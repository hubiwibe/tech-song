import { Pause, Play } from 'lucide-react';
import { useNavigate } from 'react-router';
import { BorderBeam } from '~/common/components/magicui/border-beam';
import { Button } from '~/common/components/ui/button';
import { usePlayerStore } from '~/common/store/player-store';

export default function MiniPlayer() {
  const navigate = useNavigate();

  const { isPlaying, play, pause, currentTrack, isFullPlayerOpen, setIsFullPlayerOpen } = usePlayerStore();

  const handleTogglePlay = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  };

  const handleOpenFullPlayer = () => {
    if (!currentTrack) {
      return;
    }

    setIsFullPlayerOpen(true);
    navigate(`/watch/${currentTrack.trackId}`);
  };

  const handleCloseFullPlayer = () => {
    setTimeout(() => navigate(-1), 150);
  };

  const handleToggleFullPlayer = () => {
    if (isFullPlayerOpen) {
      handleCloseFullPlayer();
    } else {
      handleOpenFullPlayer();
    }
  };

  return (
    <section className="fixed bottom-0 w-full z-50 bg-white dark:bg-gray-950 max-w-xl pointer-events-auto">
      <div className="flex items-center justify-between py-2 px-3 gap-3 bg-gray-100 dark:bg-gray-900">
        <div
          className="flex-1 min-w-0 cursor-pointer text-sm font-semibold whitespace-nowrap overflow-hidden text-ellipsis"
          onClick={handleToggleFullPlayer}
        >
          {currentTrack?.title || 'No Track'}
        </div>
        <section className="flex items-center gap-2">
          <Button
            variant="ghost"
            className="p-2 cursor-pointer relative overflow-hidden"
            onClick={handleTogglePlay}
            aria-label={isPlaying ? '일시정지' : '재생'}
          >
            {isPlaying ? (
              <>
                <Pause className="size-6" />
                <BorderBeam duration={6} className="from-transparent via-red-500 to-transparent" />
                <BorderBeam duration={6} delay={3} className="from-transparent via-blue-500 to-transparent" />
              </>
            ) : (
              <Play className="size-6" />
            )}
          </Button>
        </section>
      </div>
    </section>
  );
}
