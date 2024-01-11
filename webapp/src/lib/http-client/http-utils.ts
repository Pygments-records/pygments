// Definition of restricted import
// eslint-disable-next-line no-restricted-imports
import type ky from 'ky'

type _KyOptions = Parameters<(typeof ky)['extend']>[0]

type HttpHeader = Exclude<_KyOptions['headers'], string[][]>
type KyOptions = Pick<
  _KyOptions,
  | 'body'
  | 'hooks'
  | 'json'
  | 'method'
  | 'retry'
  | 'searchParams'
  | 'timeout'
  | 'prefixUrl'
  | 'signal'
> & { headers?: HttpHeader }

export type HttpOptions = KyOptions
