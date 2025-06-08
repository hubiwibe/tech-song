import { useEffect } from 'react';
import FullPlayer from '~/common/components/full-player';
import type { Route } from './+types/watch-page';
import { getPlaylistByTrackId, getPlaylistTracksByPlaylistId } from '~/features/playlist/queries';
import { getTrackById } from '~/features/track/queries';
import { usePlayerStore } from '~/common/store/player-store';
import { useNavigate } from 'react-router';

export const meta: Route.MetaFunction = ({ data }) => {
  return [{ title: `Playlist - ${data.track?.title ?? 'Not Found'}` }];
};

export const loader = async ({ params }: Route.LoaderArgs) => {
  const trackId = params.trackId;
  if (!trackId) {
    return { track: null, playlist: null, playlistTracks: [] };
  }

  const track = await getTrackById(parseInt(trackId));
  if (!track) {
    return { track: null, playlist: null, playlistTracks: [] };
  }

  const playlist = await getPlaylistByTrackId(track.trackId);
  if (!playlist) {
    return { track: null, playlist: null, playlistTracks: [] };
  }

  const playlistTracks = await getPlaylistTracksByPlaylistId(playlist.playlistId);
  if (!playlistTracks) {
    return { track: null, playlist: null, playlistTracks: [] };
  }

  return { track, playlist, playlistTracks };
};

export default function WatchPage({ loaderData }: Route.ComponentProps) {
  const { track, playlist, playlistTracks } = loaderData;
  const navigate = useNavigate();
  const { currentTrack, setCurrentTrack, setPlaylist, setPlaylistTracks, isFullPlayerOpen, setIsFullPlayerOpen } =
    usePlayerStore();

  useEffect(() => {
    setIsFullPlayerOpen(true);
  }, []);

  useEffect(() => {
    if (!currentTrack && !track) {
      navigate(-1);
      return;
    }

    if (currentTrack?.trackId === track?.trackId) {
      return;
    }

    setCurrentTrack(track);
    setPlaylist(playlist);
    setPlaylistTracks(playlistTracks);
  }, [currentTrack, track]);

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setIsFullPlayerOpen(false);
      setTimeout(() => {
        navigate(-1);
      }, 150);
    }
  };

  return (
    <FullPlayer
      isOpen={isFullPlayerOpen}
      onOpenChange={handleOpenChange}
      title={track?.title ?? ''}
      description={track?.content ?? ''}
    />
  );
}
