import PlayerController from '~/common/components/player-controller';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '~/common/components/ui/drawer';
interface FullPlayerProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description: string;
}

export default function FullPlayer({ isOpen, onOpenChange, title, description }: FullPlayerProps) {
  return (
    <Drawer open={isOpen} onOpenChange={onOpenChange}>
      <DrawerContent className="mx-auto h-full max-w-xl">
        <DrawerHeader>
          <DrawerTitle>{title}</DrawerTitle>
          <DrawerDescription className="whitespace-pre-wrap">{description}</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className="bg-gray-100 dark:bg-gray-900">
          <PlayerController />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
