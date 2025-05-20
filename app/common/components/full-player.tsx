import { useNavigate } from 'react-router';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '~/common/components/ui/drawer';

export default function FullPlayer() {
  const navigate = useNavigate();

  return (
    <Drawer defaultOpen={true} onClose={() => setTimeout(() => navigate(-1), 100)}>
      <DrawerContent className="h-screen w-full">
        <DrawerHeader>
          <DrawerTitle>track name</DrawerTitle>
          <DrawerDescription>track description</DrawerDescription>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
}
