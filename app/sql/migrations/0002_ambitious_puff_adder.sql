ALTER TABLE "track_tags" DROP CONSTRAINT "track_tags_track_id_tracks_track_id_fk";
--> statement-breakpoint
ALTER TABLE "track_tags" ADD CONSTRAINT "track_tags_track_id_tracks_track_id_fk" FOREIGN KEY ("track_id") REFERENCES "public"."tracks"("track_id") ON DELETE cascade ON UPDATE no action;