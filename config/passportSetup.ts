import { passport } from "passport";
import { GoogleStrategy } from "passport-google-oauth20";

const clientID = process.env.GOOGLE_CLIENT_ID || "";
const clientSecret = process.env.GOOGLE_CLIENT_SECRET || "";

if (!clientID || !clientSecret) {
  throw new Error(
    "Google OAuth credentials are not set in environment variables."
  );
}
passport.use(
  new GoogleStrategy(
    {
      clientID,
      clientSecret,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      // Here you would typically find or create a user in your database
      // For now, we will just return the profile
      return done(null, profile);
    }
  )
);
