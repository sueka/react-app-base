import classnames from 'classnames'
import React, { useMemo } from 'react'
import { useDrop } from 'react-dnd'

import { DragObject, Props as ChessmanProps } from '~/components/Chessboard/Chessman'
import getColorFromChessCoordinates from '~/utils/chess/getColorFromChessCoordinates'
import classes from './classes.css'

interface Props extends React.PropsWithChildren<{}> {
  children?: React.ReactElement<ChessmanProps, React.ComponentType<ChessmanProps>> | false | null
  coord: Chess.Coordinates

  halfMove(piece: Chess.CoordinatedPiece, target: Chess.Coordinates): void
}

const Square: React.FunctionComponent<Props> = ({ children, coord, halfMove }: Props) => {
  const [, drop] = useDrop<DragObject, unknown, unknown>({
    accept: 'Chessman',
    drop(item) {
      halfMove(item.piece, coord)
    },
  })

  const color = useMemo(() => getColorFromChessCoordinates(coord), [coord])

  const squareClassName = useMemo(() => classnames(classes.Square, {
    [classes.White]: color === 'white',
    [classes.Black]: color === 'black',
  }), [])

  return (
    <div ref={ drop } className={ squareClassName }>
      { children }
    </div>
  )
}

export default Square