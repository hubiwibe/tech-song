// src/store/playerStore.ts
import { create } from 'zustand';
import type { Playlist } from '~/common/types/playlist';
import type { Track } from '~/common/types/track';

interface PlayerState {
  currentTrack: Track | null;
  isPlaying: boolean;
  isPaused: boolean;
  playbackPosition: number;
  playlist: Playlist | null;
  isFullPlayerOpen: boolean;
  setCurrentTrack: (track: Track) => void;
  setIsPlaying: (playing: boolean) => void;
  setIsPaused: (paused: boolean) => void;
  setPlaybackPosition: (pos: number) => void;
  setPlaylist: (playlist: Playlist) => void;
  playNext: () => void;
  playPrev: () => void;
  setIsFullPlayerOpen: (isOpen: boolean) => void;
}

export const usePlayerStore = create<PlayerState>((set, get) => ({
  currentTrack: null,
  isPlaying: false,
  isPaused: false,
  playbackPosition: 0,
  playlist: null,
  isFullPlayerOpen: false,
  setCurrentTrack: track => set({ currentTrack: track }),
  setIsPlaying: playing => set({ isPlaying: playing }),
  setIsPaused: paused => set({ isPaused: paused }),
  setPlaybackPosition: pos => set({ playbackPosition: pos }),
  setPlaylist: playlist => set({ playlist }),
  playNext: () => {
    const { playlist, currentTrack } = get();
    if (!currentTrack || !playlist) return;
    const currentIdx = playlist.playlistTracks.findIndex(t => t.id === currentTrack.id);
    const nextTrack = playlist.playlistTracks[currentIdx + 1] || playlist.playlistTracks[0];
    set({ currentTrack: nextTrack, isPlaying: !!nextTrack });
  },
  playPrev: () => {
    const { playlist, currentTrack } = get();
    if (!currentTrack || !playlist) return;
    const currentIdx = playlist.playlistTracks.findIndex(t => t.id === currentTrack.id);
    const prevTrack =
      currentIdx > 0
        ? playlist.playlistTracks[currentIdx - 1]
        : playlist.playlistTracks[playlist.playlistTracks.length - 1];
    set({ currentTrack: prevTrack, isPlaying: !!prevTrack });
  },
  setIsFullPlayerOpen: (isOpen: boolean) => {
    set({ isFullPlayerOpen: isOpen });
  },
}));
