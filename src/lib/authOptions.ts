import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { Account, Profile, Session } from "next-auth";
import { JWT } from "next-auth/jwt";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",         //  явно указываем стратегию
    maxAge: 60 * 60 * 24,    //  токен живёт 1 день
    updateAge: 60 * 60,      //  обновляется каждый час при активности
  },

  jwt: {
    maxAge: 60 * 60 * 24,    //  столько же — 1 день
  },
  callbacks: {
    async jwt({
      token,
      account,
      profile,
    }: {
      token: JWT;
      account?: Account | null;
      profile?: Profile | null;
    }) {
      if (account && profile) {
        token.googleId = profile.sub;
      }
      return token;
    },

    async session({ session, token }: { session: Session; token: JWT }) {
      if (token.googleId) {
        session.user = {
          ...session.user,
          googleId: token.googleId,
        };
      }
      return session;
    },
  },
};
