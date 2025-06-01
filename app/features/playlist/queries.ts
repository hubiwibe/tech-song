import db from '~/db';
import { playlists } from '~/features/playlist/schema';

export const getPlaylists = async () => {
  return await db
    .select({ id: playlists.playlist_id, title: playlists.title, description: playlists.description })
    .from(playlists);
};
