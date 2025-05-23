import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle } from '~/common/components/ui/drawer';
import { usePlayerStore } from '~/common/store/player-store';

export default function FullPlayer() {
  const { isFullPlayerOpen, currentTrack } = usePlayerStore();

  return (
    <Drawer open={isFullPlayerOpen}>
      <DrawerContent className="mx-auto h-full max-w-xl">
        <DrawerHeader>
          <DrawerTitle>{currentTrack?.title}</DrawerTitle>
          <DrawerDescription className="whitespace-pre-wrap">{currentTrack?.content}</DrawerDescription>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
}
