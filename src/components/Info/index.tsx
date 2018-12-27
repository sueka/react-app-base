import * as React from 'react'

import { Call, tryToFetch } from '../../redux/modules/httpClient'
import { Repository } from '../../githubResourceTypes'

interface Props {
  calls: Call[]
  _tryToFetch: typeof tryToFetch
}

export default class Info extends React.Component<Props> {
  private callId: string | null = null

  public componentDidMount() {
    const { _tryToFetch } = this.props

    const { payload } = _tryToFetch('GET', 'https://api.github.com/repos/sueka/react-app-prototype')

    this.callId = payload.callId
  }

  public render() {
    const { calls } = this.props

    const call = calls.find(({ id }) => (this.callId !== null) ? this.callId === id : false)

    if (call === undefined) {
      return (
        <p>
          Fetching not started.
        </p>
      )
    }

    if (call.response === null) {
      return (
        <p>
          No data fetched.
        </p>
      )
    }

    // NOTE: call.response.body を {} から Repository へダウンキャストする。
    const repo = call.response.body as Repository

    return (
      <p>
        { repo.name }
      </p>
    )
  }
}
