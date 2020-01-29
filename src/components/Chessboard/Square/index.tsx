import classnames from 'classnames'
import React, { useMemo } from 'react'

import { Props as ChessmanProps } from '~/components/Chessboard/Chessman'
import classes from './classes.css'

interface Props extends React.PropsWithChildren<{}> {
  children?: React.ReactElement<ChessmanProps, React.ComponentType<ChessmanProps>> | false | null
  color: Chess.Color
}

const Square: React.FunctionComponent<Props> = ({ children, color }: Props) => {
  const squareClassName = useMemo(() => classnames(classes.Square, {
    [classes.White]: color === 'white',
    [classes.Black]: color === 'black',
  }), [])

  return (
    <div className={ squareClassName }>
      { children }
    </div>
  )
}

export default Square
