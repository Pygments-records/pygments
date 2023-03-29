import type { IncomingMessage } from "http";

// Taken from https://github.com/jakeburden/next-absolute-url
export function getAbsoluteUrl(req?: IncomingMessage, localhostAddress = "localhost:3000") {
  let host =
    (req?.headers !== undefined ? req.headers.host : window.location.host) ?? localhostAddress;
  let protocol = /^localhost(:\d+)?$/.test(host) ? "http:" : "https:";

  if (
    req !== undefined &&
    req.headers["x-forwarded-host"] !== undefined &&
    typeof req.headers["x-forwarded-host"] === "string"
  ) {
    host = req.headers["x-forwarded-host"];
  }

  if (
    req !== undefined &&
    req.headers["x-forwarded-proto"] !== undefined &&
    typeof req.headers["x-forwarded-proto"] === "string"
  ) {
    protocol = `${req.headers["x-forwarded-proto"]}:`;
  }

  return {
    protocol,
    host,
    origin: protocol + "//" + host,
  };
}
