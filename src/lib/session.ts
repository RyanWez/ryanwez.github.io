'use server';

import 'server-only';
import { cookies, type ReadonlyRequestCookies } from 'next/headers';
import { unsealData, sealData } from '@hapi/iron';
import { type SessionData } from '@/lib/definitions';

const sessionPassword = process.env.SESSION_SECRET as string || "this-is-a-default-dev-secret-32-characters";
if (!sessionPassword || sessionPassword.length < 32) {
  throw new Error('Missing SESSION_SECRET or SESSION_SECRET is not 32 characters long.');
}

const sessionOptions = {
  password: sessionPassword,
  cookieName: 'portfolio-session',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
  },
};

export async function sealSession(cookies: ReturnType<typeof import('next/headers').cookies>) {
  const sessionData: SessionData = { isLoggedIn: true };
  const encryptedSession = await sealData(sessionData, { password: sessionOptions.password });
  
  cookies.set(sessionOptions.cookieName, encryptedSession, {
    ...sessionOptions.cookieOptions,
    expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours
  });
}

export async function unsealSession(cookieStore: ReadonlyRequestCookies) {
  const cookie = cookieStore.get(sessionOptions.cookieName)?.value;
  if (!cookie) {
    return { isLoggedIn: false };
  }
  try {
    const session: SessionData = await unsealData(cookie, { password: sessionOptions.password });
    return session;
  } catch (error) {
    return { isLoggedIn: false };
  }
}

// Abstraction to use in server components and actions
export async function getIronSession(cookies: ReadonlyRequestCookies | ReturnType<typeof import('next/headers').cookies>) {
  const session = await unsealSession(cookies);
  return {
    ...session,
    destroy: () => {
      cookies.delete(sessionOptions.cookieName);
    },
  };
}
