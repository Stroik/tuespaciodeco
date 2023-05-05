import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from '@/lib/prisma/client';

export const authOptions = {
  debug: true,
  adapter: PrismaAdapter(prisma),
  pages: {
    signIn: '/auth/login',
    signUp: '/auth/register',
  },
  providers: [
    CredentialsProvider({
      name: 'credentials',
      async authorize(credentials, req) {
        const { email, password } = credentials;
        const url = `http://tuespaciodeco.local/wp-json/api/v1/mo-jwt-login`;
        const response = await fetch(url, {
          method: 'POST',
          body: JSON.stringify({ email, password }),
        });
      },
    }),
  ],
};

export default NextAuth(authOptions);
