ALTER TABLE "playlist_tracks"
ALTER COLUMN "playlist_id"
SET
    NOT NULL;

--> statement-breakpoint
ALTER TABLE "playlist_tracks"
ALTER COLUMN "track_id"
SET
    NOT NULL;

--> statement-breakpoint
ALTER TABLE "tracks"
ADD COLUMN "audio_url" text;