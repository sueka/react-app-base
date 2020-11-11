import Typography from '@material-ui/core/Typography'
import React from 'react'
import { connect } from 'react-redux'

import FormattedTimeOfDay from '~/lib/components/FormattedTimeOfDay'
import { State } from '~/redux'

interface StateProps {
  now: Date
}

type Props =
  & StateProps

const CurrentTimeOfDay: React.FC<Props> = ({ now }) => (
  <Typography>
    <FormattedTimeOfDay value={ now } format="medium" />
  </Typography>
)

// connect

const mapStateToProps = ({ io: { now } }: State): StateProps => ({
  now,
})

export default connect(mapStateToProps)(CurrentTimeOfDay)
