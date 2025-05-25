import { useNavigate } from 'react-router';
import { Card, CardContent } from '~/common/components/ui/card';
import type { Playlist } from '~/common/types/playlist';

interface PlaylistProps {
  playlist: Playlist;
}

export default function Playlist({ playlist }: PlaylistProps) {
  const navigate = useNavigate();

  const handleClick = (trackId: string) => {
    navigate(`/watch/${trackId}`);
  };

  return (
    <div className="flex flex-col gap-2.5">
      {playlist.playlistTracks.map(track => (
        <Card
          key={track.id}
          onClick={() => handleClick(track.id)}
          className="cursor-pointer hover:bg-gray-100 transition p-3"
        >
          <CardContent className="px-2">
            <p className="text-sm font-semibold">{track.title}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
