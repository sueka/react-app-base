import Box from '@material-ui/core/Box'
import Collapse from '@material-ui/core/Collapse'
import { Theme, makeStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import React, { useMemo } from 'react'
import { useRecoilValue } from 'recoil'

import bannerOpenState from '~/atoms/bannerOpenState'
import bannerState from '~/atoms/bannerState'
import classes from './classes.css'

interface Props {
  topAppbarHeight?: number
}

interface StyleProps {
  topAppbarHeight?: number
}

const useStyles = makeStyles<Theme, StyleProps, 'CollapseContainer'>({
  CollapseContainer: {
    top: ({ topAppbarHeight }) => topAppbarHeight,
  },
})

const BannerContainer: React.FC<Props> = ({ topAppbarHeight }) => {
  const banner = useRecoilValue(bannerState)
  const open = useRecoilValue(bannerOpenState)
  const jssClasses = useStyles({ topAppbarHeight })
  const collapseContainerClassName = useMemo(() => classNames(jssClasses.CollapseContainer, classes.CollapseContainer), [jssClasses])

  return (
    <Collapse
      in={ open }
      mountOnEnter
      unmountOnExit
      classes={ {
        container: collapseContainerClassName,
      } }
    >
      <Box component="div" boxShadow={ 3 }>
        { banner }
      </Box>
    </Collapse>
  )
}

export default BannerContainer