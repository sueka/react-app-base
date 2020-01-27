/**
 * src/lib/fetch.ts
 */

import * as pathToRegexp from 'path-to-regexp'

import UrlOrPathAbempty from './UrlOrPathAbempty'
import mapValues from './extensions/Record/mapValues'
import typed from './typed'

type Method = 'GET' | 'POST'

interface RequestParams {
  method: Method
  parameterizedEndpoint: string
  params?: Record<string, string>
  headers?: Record<string, string>
  query?: Record<string, string>
}

interface ResponseParams {
  response: Response
  body: Json
}

function isEmpty<T extends {}>(object: T): object is EmptyRecord<T> {
  return Object.keys(object).length === 0
}

function toRecord(input: {}): Record<string, unknown> {
  return Object.entries(input).reduce((result, [i, x]) => ({ ...result, [i]: x }), {})
}

function toJson(input: unknown): Json {
  if (typeof input === 'boolean' || typeof input === 'number' || typeof input === 'string') {
    return input
  }

  if (Array.isArray(input)) {
    return input.map((json) => toJson(json))
  }

  if (typeof input === 'object') {
    if (input === null) {
      return input
    }

    return mapValues((json) => toJson(json), toRecord(input))
  }

  throw new Error(typed<[string]>`${ String(input) } is not a Json.`)
}

function buildRequestInfo({ method, parameterizedEndpoint, params = {}, query = {} }: RequestParams): RequestInfo {
  const parameterizedUrl = new UrlOrPathAbempty(parameterizedEndpoint)

  parameterizedUrl.pathname = isEmpty(params) ? parameterizedUrl.pathname : pathToRegexp.compile(parameterizedUrl.pathname)(params)

  // tslint:disable-next-line:no-object-mutation
  const endpoint = parameterizedUrl.href

  switch (method) {
    case 'GET':
      const url = new UrlOrPathAbempty(endpoint)
      const urlSearchParams = new URLSearchParams(url.search)

      Object.entries(query).forEach(([key, value]) => {
        urlSearchParams.append(key, value)
      })

      // tslint:disable-next-line:no-object-mutation
      url.search = urlSearchParams.toString()

      return url.href
    case 'POST':
      return endpoint
  }
}

function buildRequestInit({ method, headers = {}, query = {} }: RequestParams): RequestInit {
  switch (method) {
    case 'GET':
      return {
        method,
        headers,
      }
    case 'POST':
      const formData = new FormData

      Object.entries(query).forEach(([key, value]) => {
        formData.append(key, value)
      })

      return {
        method,
        body: formData,
        headers,
      }
  }
}

export default async function fetch(request: RequestParams): Promise<ResponseParams> {
  const requestInfo = buildRequestInfo(request)
  const requestInit = buildRequestInit(request)
  const response = await globalThis.fetch(requestInfo, requestInit)

  const body = toJson(await response.json())

  return { response, body }
}
