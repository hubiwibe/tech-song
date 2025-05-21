export interface PlaybackHistory {
  id: number;
  userId: number;
  trackId: number;
  playlistId: number;
  playedAt: string;
  position?: string | null;
  endedAt?: string | null;
}
