import { Pause, Play, StepBack, StepForward } from 'lucide-react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { usePlayerStore } from '~/common/store/player-store';
import type { Track } from '~/common/types/track';
import useSpeechSynthesisPlayer from '~/hooks/useSpeachSynthesisPlayer';

export default function MiniPlayer() {
  const navigate = useNavigate();
  const {
    isPlaying,
    setIsPlaying,
    isPaused,
    setIsPaused,
    playNext,
    playPrev,
    currentTrack,
    isFullPlayerOpen,
    setIsFullPlayerOpen,
  } = usePlayerStore();
  const { play, pause, resume, stop } = useSpeechSynthesisPlayer({ setIsPlaying, setIsPaused, currentTrack });

  useEffect(() => {
    if (currentTrack?.id) {
      stop();
      play();
    }
  }, [currentTrack?.id]);

  const handleTogglePlay = () => {
    if (isPaused) {
      resume();
      return;
    }

    if (isPlaying) {
      pause();
    } else {
      play();
    }
  };

  const handleStepBack = () => {
    stop();
    playPrev();
  };

  const handleStepForward = () => {
    stop();
    playNext();
  };

  const handleOpenFullPlayer = () => {
    if (currentTrack?.id) {
      setIsFullPlayerOpen(true);
      navigate(`/watch/${currentTrack.id}`);
    }
  };

  const handleCloseFullPlayer = () => {
    setIsFullPlayerOpen(false);
    setTimeout(() => navigate(-1), 150);
  };

  const handleToggleFullPlayer = () => {
    console.debug('@@ handleToggleFullPlayer', isFullPlayerOpen);
    if (isFullPlayerOpen) {
      handleCloseFullPlayer();
    } else {
      handleOpenFullPlayer();
    }
  };

  return (
    <section className="fixed bottom-0 w-full z-99999 bg-white dark:bg-gray-950 max-w-xl pointer-events-auto">
      <div className="flex items-center justify-between p-2 gap-1">
        <section className="flex items-center">
          <button
            className="p-2 rounded-full hover:bg-gray-100 transition cursor-pointer"
            onClick={handleStepBack}
            aria-label="이전 트랙"
          >
            <StepBack size={24} fill="currentColor" />
          </button>
          <button
            className="p-2 rounded-full hover:bg-gray-100 transition cursor-pointer"
            onClick={handleTogglePlay}
            aria-label={isPlaying ? '일시정지' : '재생'}
          >
            {isPlaying ? <Pause size={28} fill="currentColor" /> : <Play size={28} fill="currentColor" />}
          </button>
          <button
            className="p-2 rounded-full hover:bg-gray-100 transition cursor-pointer"
            onClick={handleStepForward}
            aria-label="다음 트랙"
          >
            <StepForward size={24} fill="currentColor" />
          </button>
        </section>
        <div
          className="flex-1 min-w-0 cursor-pointer text-sm font-semibold whitespace-nowrap overflow-hidden text-ellipsis"
          onClick={handleToggleFullPlayer}
        >
          {currentTrack?.title || 'No Track'}
        </div>
      </div>
    </section>
  );
}
