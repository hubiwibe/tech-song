export interface Track {
  trackId: number;
  categoryId?: number | null;
  title: string;
  content: string;
  audioUrl: string;
}

export interface TrackCategory {
  id: number;
  trackId: number;
  categoryId: number;
}

export interface TrackTag {
  id: number;
  trackId: number;
  tagId: number;
}
