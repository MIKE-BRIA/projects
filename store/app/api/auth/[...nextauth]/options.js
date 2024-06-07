import clientPromise from "@/lib/mongodb";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
// const adminEmails = ["brianmichaelader@gmail.com"];

export const options = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      profile(profile) {
        console.log("Google profile: ", profile);

        let Role = "Google user";
        if (profile?.email == "brianmichaeladero@gmail.com") {
          Role = "admin";
        }
        return {
          ...profile,
          id: profile.sub,
          role: Role,
          image: profile.picture,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      console.log("JWT token: ", token);
      return token;
    },
    async session({ session, token, user }) {
      if (session) {
        session.user.role = user.role;
        session.user.image = user.picture;
      } else {
        session.user.role = "unknown"; // Handle the case where role is undefined
      }
      console.log("Session data: ", session);
      return session;
    },
  },
  adapter: MongoDBAdapter(clientPromise),
};

// export default NextAuth(options);
