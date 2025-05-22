import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle } from '~/common/components/ui/drawer';

export default function FullPlayer() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);

  return (
    <Drawer open={open} onOpenChange={setOpen} onClose={() => setTimeout(() => navigate(-1), 100)}>
      <DrawerContent className="mx-auto h-screen max-w-xl">
        <DrawerHeader>
          <DrawerTitle>track name</DrawerTitle>
          <DrawerDescription>track description</DrawerDescription>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
}
