import type { SSRConfig } from "next-i18next";

export type ServerSideRenderingRequiredError = SSRConfig & {
  error: number;
};
