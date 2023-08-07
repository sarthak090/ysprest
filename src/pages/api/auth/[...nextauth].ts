import { getEnv } from '@/config/get-env';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default NextAuth({
  // https://next-auth.js.org/configuration/providers
  providers: [
    // GoogleProvider({
    //   clientId:
    //     '334029046406-ivq0adf1ipipgt22t1h06vh168923759.apps.googleusercontent.com',
    //   clientSecret: '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',
    // }),
  ],

  secret: getEnv('SECRET'),

  session: {
    strategy: 'jwt',
  },

  jwt: {
    // A secret to use for key generation (you should set this explicitly)
    // secret: 'INp8IvdIyeMcoGAgFGoA61DdBglwwSqnXJZkgz8PSnw',
    // Set to true to use encryption (default: false)
    // encryption: true,
    // You can define your own encode/decode functions for signing and encryption
    // if you want to override the default behaviour.
    // encode: async ({ secret, token, maxAge }) => {},
    // decode: async ({ secret, token, maxAge }) => {},
  },

  // You can define custom pages to override the built-in ones. These will be regular Next.js pages
  // so ensure that they are placed outside of the '/api' folder, e.g. signIn: '/auth/mycustom-signin'
  // The Routes shown here are the default URLs that will be used when a custom
  // pages is not specified for that route.
  // https://next-auth.js.org/configuration/pages
  pages: {
    // signIn: '/auth/signin',  // Displays signin buttons
    // signOut: '/auth/signout', // Displays form with sign out button
    // error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // Used for check email page
    // newUser: null // If set, new users will be directed here on first sign in
  },

  // Callbacks are asynchronous functions you can use to control what happens
  // when an action is performed.
  // https://next-auth.js.org/configuration/callbacks
  callbacks: {
    // async signIn({ account, profile, user}) {
    // 	if (account.provider === "google") {
    //     return profile.email_verified && profile?.email?.endsWith("@gmail.com")
    //   }
    //   return true // Return true to allow sign in
    // },
    async jwt({ token, account }) {
      if (account) {
        const { access_token, provider } = account;
        token.provider = provider;
        // reform the `token` object from the access token we appended to the `user` object
        token.access_token = access_token;
      }
      return token;
    },
    async session({ session, token, user }) {
      const { access_token, provider } = token;
      session.provider = provider;
      session.access_token = access_token;
      return session;
    },
  },

  // Events are useful for logging
  // https://next-auth.js.org/configuration/events
  events: {},

  // Enable debug messages in the console if you are having problems
  // debug: getEnv('NODE_ENV') === 'development',
});
