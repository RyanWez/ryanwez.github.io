import { type Project } from "@prisma/client";

export type ProjectWithId = Project;

export type SessionData = {
  isLoggedIn: boolean;
};
