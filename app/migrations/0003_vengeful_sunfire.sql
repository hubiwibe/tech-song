ALTER TABLE "playback_histories" DROP CONSTRAINT "playback_histories_user_id_users_id_fk";
--> statement-breakpoint
ALTER TABLE "playlist_views" DROP CONSTRAINT "playlist_views_user_id_users_id_fk";
--> statement-breakpoint
ALTER TABLE "playback_histories" ADD COLUMN "profile_id" uuid;--> statement-breakpoint
ALTER TABLE "playlist_views" ADD COLUMN "profile_id" uuid;--> statement-breakpoint
ALTER TABLE "playback_histories" ADD CONSTRAINT "playback_histories_profile_id_profiles_profile_id_fk" FOREIGN KEY ("profile_id") REFERENCES "public"."profiles"("profile_id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "playlist_views" ADD CONSTRAINT "playlist_views_profile_id_profiles_profile_id_fk" FOREIGN KEY ("profile_id") REFERENCES "public"."profiles"("profile_id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "playback_histories" DROP COLUMN "user_id";--> statement-breakpoint
ALTER TABLE "playlist_views" DROP COLUMN "user_id";