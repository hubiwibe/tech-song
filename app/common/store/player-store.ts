// src/store/playerStore.ts
import { create } from 'zustand';
import type { Track } from '~/common/types/track';

const mockTracks: Track[] = [
  {
    id: 1,
    title: '리액트 리스트에 왜 key를 사용해야 하나요?',
    content:
      'React에서 key는 리스트의 각 아이템을 고유하게 식별하여, UI 변경 시 효율적이고 정확한 업데이트를 가능하게 하는 중요한 역할을 합니다.\nkey 없이는 React가 어떤 항목이 변경되었는지 판단하기 어려워 성능 저하와 버그가 생길 수 있습니다.',
    audioUrl: '',
    createdAt: '2025-05-22',
    updatedAt: '2025-05-22',
  },
  {
    id: 2,
    title: '리액트에서 합성 이벤트란 무엇인가?',
    content:
      'React 합성 이벤트는 브라우저별 이벤트 차이를 감추고, 효율적인 이벤트 관리와 일관된 인터페이스를 제공하는 React만의 이벤트 래퍼 객체입니다.\n개발자는 합성 이벤트를 통해 편리하고 안정적으로 이벤트 처리를 할 수 있습니다.',
    audioUrl: '',
    createdAt: '2025-05-22',
    updatedAt: '2025-05-22',
  },
  {
    id: 3,
    title: 'forwardRef란 무엇인가?',
    content:
      'forwardRef는 부모 컴포넌트가 자식 함수형 컴포넌트 내부의 DOM 요소에 직접 접근할 수 있도록 ref를 전달하는 React 기능입니다.\n이를 통해 함수형 컴포넌트에서도 ref를 사용할 수 있게 해 줍니다.',
    audioUrl: '',
    createdAt: '2025-05-22',
    updatedAt: '2025-05-22',
  },
];

interface PlayerState {
  currentTrack: Track | null;
  isPlaying: boolean;
  playbackPosition: number;
  playlist: Track[];
  isFullPlayerOpen: boolean;
  setCurrentTrack: (track: Track) => void;
  setIsPlaying: (playing: boolean) => void;
  setPlaybackPosition: (pos: number) => void;
  setPlaylist: (playlist: Track[]) => void;
  playNext: () => void;
  playPrev: () => void;
  setIsFullPlayerOpen: (isOpen: boolean) => void;
}

export const usePlayerStore = create<PlayerState>((set, get) => ({
  currentTrack: mockTracks[0],
  isPlaying: false,
  playbackPosition: 0,
  playlist: mockTracks,
  isFullPlayerOpen: false,
  setCurrentTrack: track => set({ currentTrack: track }),
  setIsPlaying: playing => set({ isPlaying: playing }),
  setPlaybackPosition: pos => set({ playbackPosition: pos }),
  setPlaylist: playlist => set({ playlist }),
  playNext: () => {
    const { playlist, currentTrack } = get();
    if (!currentTrack) return;
    const currentIdx = playlist.findIndex(t => t.id === currentTrack.id);
    const nextTrack = playlist[currentIdx + 1] || playlist[0];
    set({ currentTrack: nextTrack, isPlaying: !!nextTrack });
  },
  playPrev: () => {
    const { playlist, currentTrack } = get();
    if (!currentTrack) return;
    const currentIdx = playlist.findIndex(t => t.id === currentTrack.id);
    const prevTrack = currentIdx > 0 ? playlist[currentIdx - 1] : playlist[playlist.length - 1];
    set({ currentTrack: prevTrack, isPlaying: !!prevTrack });
  },
  setIsFullPlayerOpen: (isOpen: boolean) => {
    set({ isFullPlayerOpen: isOpen });
  },
}));
