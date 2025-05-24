import { useEffect } from 'react';
import FullPlayer from '~/common/components/full-player';
import { usePlayerStore } from '~/common/store/player-store';

export default function WatchPage() {
  const { setIsFullPlayerOpen } = usePlayerStore();

  useEffect(() => {
    setIsFullPlayerOpen(true);

    return () => {
      setIsFullPlayerOpen(false);
    };
  }, []);

  return <FullPlayer />;
}
