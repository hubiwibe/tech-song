import { ChevronLeft, Play } from 'lucide-react';
import type { Route } from './+types/playlist-page';
import { useNavigate } from 'react-router';
import Playlist from '~/features/playlist/components/playlist';
import { ScrollArea } from '~/common/components/ui/scroll-area';
import { Button } from '~/common/components/ui/button';
import { getPlaylistById, getPlaylistTracksByPlaylistId } from '~/features/playlist/queries';
import { MagicCard } from '~/common/components/magicui/magic-card';
import { Card } from '~/common/components/ui/card';
import { getRandomColors } from '~/lib/utils';

export const meta: Route.MetaFunction = ({ data }) => {
  return [{ title: `Playlist - ${data.playlistTracks?.[0]?.title ?? 'Not Found'}` }];
};

export const loader = async ({ params }: Route.LoaderArgs) => {
  if (!params.playlistId) {
    return { playlist: null };
  }
  const playlistId = Number(params.playlistId);
  const playlist = await getPlaylistById(playlistId);
  const playlistTracks = await getPlaylistTracksByPlaylistId(playlistId);
  return { playlist, playlistTracks };
};

export default function PlaylistPage({ loaderData }: Route.ComponentProps) {
  const navigate = useNavigate();
  const { playlist, playlistTracks } = loaderData;

  if (!playlist) {
    return <div>Playlist not found</div>;
  }

  const handleListen = () => {
    navigate(`/watch/${playlistTracks[0].trackId}`);
  };

  return (
    <section className="px-3 py-6 h-full">
      <header className="mb-8 flex items-center gap-4">
        <ChevronLeft className="w-10 h-10 cursor-pointer" onClick={() => navigate(-1)} />
        <h1 className="text-4xl font-bold">{playlist.title}</h1>
      </header>
      <Card className="p-0 shadow-none border-none">
        <MagicCard className="p-0" gradientColor="#D9D9D955">
          <ScrollArea className="flex flex-col gap-4 h-96 rounded-md p-2 border-none">
            <Playlist playlistTracks={playlistTracks} />
          </ScrollArea>
        </MagicCard>
      </Card>
      <div className="fixed left-0 right-0 bottom-12 flex items-center justify-center p-4 max-w-xl mx-auto">
        <Button className="w-full cursor-pointer" onClick={handleListen} disabled={playlistTracks.length === 0}>
          <Play className="size-5" />
          <span>Listen</span>
        </Button>
      </div>
    </section>
  );
}
