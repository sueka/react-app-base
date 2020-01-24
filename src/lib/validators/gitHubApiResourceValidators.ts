import { asObject, asString, optional } from './commonValidators'

export function asGetRepoResponse(input: unknown): GitHubApiResource.GetRepoResponse {
  return asRepository(input)
}

const asRepository = asObject<GitHubApiResource.Repository>('a Repository', (input) => ({
  name: asString(input.name),
}))

export const asUnsuccessfulResponse = asObject<GitHubApiResource.UnsuccessfulResponse>('an UnsuccessfulResponse', (input) => ({
  message: asString(input.message),
  documentation_url: optional(asString)(input.documentation_url),
}))
