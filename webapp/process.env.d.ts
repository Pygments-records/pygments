declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_APP_STAGE: "development" | "staging" | "production";
      NEXT_PUBLIC_APP_NAME: string;
      NEXT_PUBLIC_APP_VERSION: string;

      GIT_COMMIT_SHA_SHORT: string | undefined;
      GIT_COMMIT_SHA: string | undefined;
    }
  }
}

// Needed to trick Typescript into thinking this file is a valid module since no import/export statements are present
export {};
