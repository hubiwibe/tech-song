import type { Track } from '~/common/types/track';
import db from '~/db';
import { tracks as tracksSchema } from '~/features/track/schema';

export const insertTracks = async (tracks: Omit<Track, 'trackId' | 'categoryId'>[]) => {
  return await db.insert(tracksSchema).values(
    tracks.map(track => ({
      title: track.title,
      content: track.content,
      audio_url: track.audioUrl,
      profile_id: 'eada7b8f-b1c3-416d-ae6f-d1e255ca1b4b',
      created_at: new Date(),
      updated_at: new Date(),
      stats: {},
    })),
  );
};
