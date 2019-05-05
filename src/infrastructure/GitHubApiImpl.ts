import assert from 'assert'
import { Repository } from '../githubResourceTypes'
import { HttpClient } from '../lib'
import GitHubApi, { GetRepoInput, GetRepoOutput } from '../useCase/GitHubApi'

export default class GitHubApiImpl implements GitHubApi {
  private httpClient: HttpClient

  /**
   * @throws AssertionError
   */
  private checkInvariant() {

    // TODO: 環境変数を検査するメカニズムを導入する。
    assert('GITHUB_API_V3_ORIGIN' in process.env, 'The GITHUB_API_V3_ORIGIN environment variable does not exist.')
  }

  constructor() {
    this.httpClient = new HttpClient()

    this.checkInvariant()
  }

  public async getRepo({ owner, repo }: GetRepoInput): Promise<GetRepoOutput> {

    // TODO: no-process-env を有効にする。
    const { response: { status }, body } = await this.httpClient.fetch({
      method: 'GET',
      parameterizedEndpoint: `${ process.env.GITHUB_API_V3_ORIGIN }/repos/${ owner }/${ repo }`,
      query: {},
      params: {},
    })

    // TODO: validate body
    return {
      response: {
        status,
      },
      body: body as Repository,
    }
  }
}
