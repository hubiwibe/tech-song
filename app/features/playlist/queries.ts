import { eq } from 'drizzle-orm';
import type { Playlist, PlaylistTrack } from '~/common/types/playlist';
import db from '~/db';
import { playlist_tracks, playlists } from '~/features/playlist/schema';
import { tracks } from '~/features/track/schema';

export const getPlaylists = async () => {
  return await db
    .select({ id: playlists.playlist_id, title: playlists.title, description: playlists.description })
    .from(playlists);
};

export const getPlaylistByTrackId = async (trackId: number): Promise<Playlist | null> => {
  return await db
    .select({
      playlistId: playlists.playlist_id,
      title: playlists.title,
      description: playlists.description,
    })
    .from(playlist_tracks)
    .innerJoin(playlists, eq(playlist_tracks.playlist_id, playlists.playlist_id))
    .where(eq(playlist_tracks.track_id, trackId))
    .limit(1)
    .then(result => result[0] ?? null);
};

export const getPlaylistById = async (playlistId: number): Promise<Playlist | null> => {
  return await db
    .select({
      playlistId: playlists.playlist_id,
      title: playlists.title,
      description: playlists.description,
    })
    .from(playlists)
    .where(eq(playlists.playlist_id, playlistId))
    .limit(1)
    .then(result => result[0] ?? null);
};

export const getPlaylistTracksByPlaylistId = async (playlistId: number): Promise<PlaylistTrack[]> => {
  return await db
    .select({
      trackId: playlist_tracks.track_id,
      playlistId: playlist_tracks.playlist_id,
      title: tracks.title,
      content: tracks.content,
      audioUrl: tracks.audio_url,
    })
    .from(playlist_tracks)
    .innerJoin(tracks, eq(playlist_tracks.track_id, tracks.track_id))
    .where(eq(playlist_tracks.playlist_id, playlistId));
};
