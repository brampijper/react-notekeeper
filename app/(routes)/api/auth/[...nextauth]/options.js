import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/app/_lib/prisma";
import GitHubProvider from "next-auth/providers/github";
// import CredentialsProvider from "next-auth/providers/credentials"

// Configure NextAuthOptions
export const options = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ... Add more providers here.
  ],
  callbacks: {
    async session({ session, token, user }) {
      const { id } = user 
      return { ...session, id }
    }
  }
};