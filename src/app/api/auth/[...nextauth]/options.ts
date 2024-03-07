import GitHubProvider from "next-auth/providers/github";

export const options = {
  providers: [
    GitHubProvider({
      //@ts-expect-error issue https://github.com/nextauthjs/next-auth/issues/6174
      profile(profile) {
        if (profile?.email == process.env.GITHUB_EMAIL) {
          return {
            ...profile,
            role: "admin",
          };
        } else return null;
      },
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
  ],
  callbacks: {
    // @ts-ignore-next-line
    async jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },
    // @ts-ignore-next-line
    async session({ session, token }) {
      if (session?.user) session.user.role = token.role;
      return session;
    },
  },
};
