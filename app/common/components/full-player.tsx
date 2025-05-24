import { useNavigate } from 'react-router';
import PlayerController from '~/common/components/player-controller';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '~/common/components/ui/drawer';
import { usePlayerStore } from '~/common/store/player-store';

export default function FullPlayer() {
  const navigate = useNavigate();
  const { isFullPlayerOpen, currentTrack, setIsFullPlayerOpen } = usePlayerStore();

  const handleClose = () => {
    setIsFullPlayerOpen(false);
    setTimeout(() => {
      navigate(-1);
    }, 150);
  };

  return (
    <Drawer open={isFullPlayerOpen} onOpenChange={handleClose}>
      <DrawerContent className="mx-auto h-full max-w-xl">
        <DrawerHeader>
          <DrawerTitle>{currentTrack?.title}</DrawerTitle>
          <DrawerDescription className="whitespace-pre-wrap">{currentTrack?.content}</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className="bg-gray-100 dark:bg-gray-900">
          <PlayerController />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
