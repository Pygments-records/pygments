/* eslint-disable @typescript-eslint/no-use-before-define */
<<<<<<< HEAD
import ky, { HTTPError, TimeoutError } from 'ky-universal'
import { getAbsoluteUrl } from './getAbsoluteUrl'
import type { IncomingMessage } from 'http'
import type { HttpOptions } from './http-utils'
import type { NextApiRequest } from 'next'
=======
import ky, { HTTPError, TimeoutError } from "ky-universal";
import { getAbsoluteUrl } from "./getAbsoluteUrl";
import type { IncomingMessage } from "http";
import type { HttpOptions } from "./http-utils";
import type { NextApiRequest } from "next";
import type { SSRConfig } from "next-i18next";
import type { GetStaticProps } from "@lib/next/getStaticProps";
>>>>>>> 65707e8 (setup getStaticProps and getStaticPaths)

const _http = ky.create({
  retry: 0,
})

export interface HttpBase {
  <T>(url: string, options?: HttpOptions): Promise<T>
}

interface HttpClient extends HttpBase {
  readonly extend: (options: HttpOptions) => HttpClient
}
export function createHttpClient(defaults: HttpOptions = {}): HttpClient {
  const client = <T>(url: string, options: HttpOptions = {}): Promise<T> =>
    request(url, { ...defaults, ...options })
  client.create = (options: HttpOptions): HttpClient => createHttpClient(options)
  client.extend = (options: HttpOptions): HttpClient =>
    createHttpClient({ ...defaults, ...options })
  return client
}

interface HttpServer extends HttpBase {
  readonly extend: (req: IncomingMessage, options: HttpOptions) => HttpServer
}
export function createHttpServer(
  _req: NextApiRequest | IncomingMessage,
  defaults: HttpOptions = {},
): HttpServer {
  if (process.env.PORT === undefined) {
    throw new Error('PORT env variable must be defined.')
  }
  const req = _req as unknown as IncomingMessage
  const { origin } = getAbsoluteUrl(req, `localhost:${process.env.PORT}`)
  const prefixUrl = origin

  const defaultOptions = {
    prefixUrl,
    ...defaults,
  }

  const server = <T>(url: string, options: HttpOptions = {}): Promise<T> =>
    request(url, { ...defaultOptions, ...options })
  server.extend = (_req: IncomingMessage, options: HttpOptions): HttpServer =>
    createHttpServer(_req, { ...defaultOptions, ...options })
  return server
}

async function request<T>(url: string, options: HttpOptions): Promise<T> {
  try {
    const data = await _http(url, options).json<T>()

    return data
  } catch (error) {
    if (error instanceof HTTPError) {
      let response: unknown = undefined
      const contentType = error.response.headers.get('content-type')?.split(';')[0]

      if (contentType === 'application/json') {
        try {
          response = await error.response.json()
        } catch (e) {
          if (e instanceof SyntaxError) {
            response = undefined
          } else {
            throw e
          }
        }
      }

      throw new HttpClientFetchError(error.message, response, error.response.status)
    } else if (error instanceof TimeoutError) {
      throw new HttpClientTimeoutError(error.message)
    } else {
      throw error
    }
  }
}

export enum HttpStatus {
  OK = 200,
  Created = 201,
  Accepted = 202,
  NoContent = 204,

  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  MethodNotAllowed = 405,
  NotAcceptable = 406,
  ProxyAuthenticationRequired = 407,
  RequestTimeout = 408,
  Conflict = 409,
  Gone = 410,
  RequestEntityTooLarge = 413,

  InternalServerError = 500,
  NotImplemented = 501,
  BadGateway = 502,
  ServiceUnavailable = 503,
  GatewayTimeout = 504,
}

export class HttpClientError extends Error {
  public constructor(message?: string) {
    super(message)
    this.name = 'HttpClientError'
    Object.setPrototypeOf(this, HttpClientError.prototype)
  }
}

export class HttpClientFetchError extends HttpClientError {
  public readonly responseType = 'json'

  public constructor(
    message: string,
    public readonly response: unknown,
    public readonly status: HttpStatus,
  ) {
    super(message)
    this.name = 'HttpClientFetchError'
    Object.setPrototypeOf(this, HttpClientFetchError.prototype)
  }
}

export class HttpClientTimeoutError extends HttpClientError {
  public constructor(message: string) {
    super(message)
    this.name = 'HttpClientTimeoutError'
    Object.setPrototypeOf(this, HttpClientTimeoutError.prototype)
  }
}

export function is2xx(status: number): boolean {
  return status >= 200 && status < 300
}

export function is4xx(status: number): boolean {
  return status >= 400 && status < 500
}

export function is5xx(status: number): boolean {
  return status >= 500 && status < 600
}

export const handleClientError = async (
  e: unknown,
  translations: Promise<SSRConfig>
): Promise<ReturnType<GetStaticProps>> => {
  return {
    revalidate: 5,
    props: {
      ...(await translations),
      error: 500,
    },
  };
};
