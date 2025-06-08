import { create } from 'zustand';
import type { Playlist, PlaylistTrack } from '~/common/types/playlist';
import type { Track } from '~/common/types/track';

/**
 * PlayerState: 오디오 플레이어의 상태와 제어 함수 정의
 */
interface PlayerState {
  // 상태값
  currentTrack: Track | null;
  playlist: Playlist | null;
  playlistTracks: PlaylistTrack[];
  isPlaying: boolean;
  isFullPlayerOpen: boolean;

  // Setter 함수
  setCurrentTrack: (track: Track | null) => void;
  setPlaylist: (playlist: Playlist | null) => void;
  setPlaylistTracks: (tracks: PlaylistTrack[]) => void;
  setIsFullPlayerOpen: (isOpen: boolean) => void;

  // 플레이어 제어 함수
  play: () => void;
  pause: () => void;
}

export const usePlayerStore = create<PlayerState>((set, get) => ({
  // 상태값
  currentTrack: null,
  playlist: null,
  playlistTracks: [],
  isPlaying: false,
  isFullPlayerOpen: false,

  // Setter 함수
  setCurrentTrack: (track: Track | null) => {
    const { currentTrack } = get();
    if (currentTrack?.trackId === track?.trackId) {
      return;
    }
    set({ currentTrack: track });
  },
  setPlaylist: (playlist: Playlist | null) => set({ playlist }),
  setPlaylistTracks: (playlistTracks: PlaylistTrack[]) => set({ playlistTracks }),
  setIsFullPlayerOpen: isFullPlayerOpen => set({ isFullPlayerOpen }),

  // 플레이어 제어 함수
  play: () => {
    const { currentTrack } = get();
    if (!currentTrack) {
      return;
    }

    set({ isPlaying: true });
  },
  pause: () => {
    set({ isPlaying: false });
  },
}));
