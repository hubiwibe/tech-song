// src/store/playerStore.ts
import { create } from 'zustand';
import type { Track } from '~/common/types/track';

interface PlayerState {
  currentTrack: Track | null;
  isPlaying: boolean;
  playbackPosition: number;
  playlist: Track[];
  setCurrentTrack: (track: Track | null) => void;
  setIsPlaying: (playing: boolean) => void;
  setPlaybackPosition: (pos: number) => void;
  setPlaylist: (playlist: Track[]) => void;
  playNext: () => void;
  playPrev: () => void;
}

export const usePlayerStore = create<PlayerState>((set, get) => ({
  currentTrack: null,
  isPlaying: false,
  playbackPosition: 0,
  playlist: [],
  setCurrentTrack: track => set({ currentTrack: track }),
  setIsPlaying: playing => set({ isPlaying: playing }),
  setPlaybackPosition: pos => set({ playbackPosition: pos }),
  setPlaylist: playlist => set({ playlist }),
  playNext: () => {
    const { playlist, currentTrack } = get();
    if (!currentTrack) return;
    const currentIdx = playlist.findIndex(t => t.id === currentTrack.id);
    const nextTrack = playlist[currentIdx + 1] || null;
    set({ currentTrack: nextTrack, isPlaying: !!nextTrack });
  },
  playPrev: () => {
    const { playlist, currentTrack } = get();
    if (!currentTrack) return;
    const currentIdx = playlist.findIndex(t => t.id === currentTrack.id);
    const prevTrack = currentIdx > 0 ? playlist[currentIdx - 1] : null;
    set({ currentTrack: prevTrack, isPlaying: !!prevTrack });
  },
}));
