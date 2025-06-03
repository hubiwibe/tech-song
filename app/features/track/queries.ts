import { eq } from 'drizzle-orm';
import db from '~/db';
import { tracks } from '~/features/track/schema';
import type { Track } from '~/common/types/track';

export const getTrackById = async (trackId: number): Promise<Track | null> => {
  return await db
    .select({
      trackId: tracks.track_id,
      title: tracks.title,
      content: tracks.content,
    })
    .from(tracks)
    .where(eq(tracks.track_id, trackId))
    .then(result => result[0] ?? null);
};
