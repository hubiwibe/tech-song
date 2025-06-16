import PlayerController from '~/common/components/player-controller';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '~/common/components/ui/drawer';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github.css';
import { AuroraText } from '~/common/components/magicui/aurora-text';
import { ScrollArea } from '~/common/components/ui/scroll-area';

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
          <DrawerTitle className="text-2xl font-bold">
            <AuroraText>{title}</AuroraText>
          </DrawerTitle>
          <DrawerDescription />
        </DrawerHeader>
        <section className="px-2">
          <ScrollArea className="flex flex-col gap-4 max-h-[70vh] rounded-md p-2 border">
            <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
              {description}
            </ReactMarkdown>
          </ScrollArea>
        </section>
        <DrawerFooter className="bg-gray-100 dark:bg-gray-900">
          <PlayerController />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
