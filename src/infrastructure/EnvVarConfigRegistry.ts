import { injectable } from 'inversify'

import typed from '~/lib/typed'
import ConfigRegistry, { ConfigKey } from '~/config/ConfigRegistry'

@injectable()
export default class EnvVarConfigRegistry implements ConfigRegistry {
  private env: Record<ConfigKey, string | undefined> = {
    GITHUB_API_URL: process.env.GITHUB_API_URL,
  }

  /**
   * @throws {Error} if not found.
   */
  public get(name: ConfigKey) {
    const value = this.env[name]

    if (value === undefined) {
      throw new Error(typed<[string]>`The ${ name } environment variable does not exist.`) // TODO:
    }

    return value
  }
}
