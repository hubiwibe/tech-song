import { create } from 'zustand';
import type { Playlist } from '~/common/types/playlist';
import type { Track } from '~/common/types/track';

/**
 * PlayerState: 오디오 플레이어의 상태와 제어 함수 정의
 */
interface PlayerState {
  // 상태값
  currentTrack: Track | null;
  playlist: Playlist | null;
  playbackPosition: number;
  isPlaying: boolean;
  isPaused: boolean;
  isFullPlayerOpen: boolean;

  // Setter 함수
  setCurrentTrack: (track: Track) => void;
  setPlaylist: (playlist: Playlist) => void;
  setPlaybackPosition: (pos: number) => void;
  setIsPlaying: (playing: boolean) => void;
  setIsPaused: (paused: boolean) => void;
  setIsFullPlayerOpen: (isOpen: boolean) => void;

  // 플레이어 제어 함수
  play: () => void;
  pause: () => void;
  resume: () => void;
  stop: () => void;
  playNext: () => void;
  playPrev: () => void;
}

export const usePlayerStore = create<PlayerState>((set, get) => ({
  // 상태값
  currentTrack: null,
  playlist: null,
  playbackPosition: 0,
  isPlaying: false,
  isPaused: false,
  isFullPlayerOpen: false,

  // Setter 함수
  setCurrentTrack: track => set({ currentTrack: track }),
  setPlaylist: playlist => set({ playlist }),
  setPlaybackPosition: pos => set({ playbackPosition: pos }),
  setIsPlaying: playing => set({ isPlaying: playing }),
  setIsPaused: paused => set({ isPaused: paused }),
  setIsFullPlayerOpen: isOpen => set({ isFullPlayerOpen: isOpen }),

  // 플레이어 제어 함수
  play: () => {
    if (!window.speechSynthesis) return;
    const { currentTrack } = get();
    if (!currentTrack) return;

    // 이미 재생 중이거나 일시정지 상태면 취소 후 새로 재생
    if (window.speechSynthesis.speaking || window.speechSynthesis.paused) {
      window.speechSynthesis.cancel();
    }

    const utterance = new SpeechSynthesisUtterance(`${currentTrack.title}\n${currentTrack.content}`);
    utterance.lang = 'ko-KR';
    utterance.onstart = () => set({ isPlaying: true, isPaused: false });
    utterance.onend = () => set({ isPlaying: false, isPaused: false });
    utterance.onerror = () => set({ isPlaying: false, isPaused: false });
    window.speechSynthesis.speak(utterance);
  },

  pause: () => {
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.pause();
      set({ isPaused: true, isPlaying: false });
    }
  },

  resume: () => {
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
      set({ isPaused: false, isPlaying: true });
    }
  },

  stop: () => {
    window.speechSynthesis.cancel();
    set({ isPlaying: false, isPaused: false });
  },

  playNext: () => {
    const { playlist, currentTrack } = get();
    if (!playlist || !currentTrack) return;
    const tracks = playlist.playlistTracks;
    const currentIdx = tracks.findIndex(t => t.id === currentTrack.id);
    if (currentIdx === -1) return;
    const nextIdx = (currentIdx + 1) % tracks.length;
    const nextTrack = tracks[nextIdx];
    set({ currentTrack: nextTrack, isPlaying: true, isPaused: false });
  },

  playPrev: () => {
    const { playlist, currentTrack } = get();
    if (!playlist || !currentTrack) return;
    const tracks = playlist.playlistTracks;
    const currentIdx = tracks.findIndex(t => t.id === currentTrack.id);
    if (currentIdx === -1) return;
    const prevIdx = (currentIdx - 1 + tracks.length) % tracks.length;
    const prevTrack = tracks[prevIdx];
    set({ currentTrack: prevTrack, isPlaying: true, isPaused: false });
  },
}));
