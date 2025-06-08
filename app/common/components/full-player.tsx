import PlayerController from '~/common/components/player-controller';
import { Drawer, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle } from '~/common/components/ui/drawer';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github.css';

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
          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
            {description}
          </ReactMarkdown>
        </DrawerHeader>
        <DrawerFooter className="bg-gray-100 dark:bg-gray-900">
          <PlayerController />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
