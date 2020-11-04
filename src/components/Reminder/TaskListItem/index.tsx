import Case from 'case'
import classnames from 'classnames'
import React, { useCallback, useContext, useMemo } from 'react'
import { DragObjectWithType, useDrag } from 'react-dnd'
import { useIntl } from 'react-intl'

import Checkbox from '@material-ui/core/Checkbox'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import TextField from '@material-ui/core/TextField'
import DragHandleIcon from '@material-ui/icons/DragHandle'

import Task, { TaskParams } from '~/domain/entity/Task'
import IntlProviderContext from '~/lib/contexts/IntlProviderContext'
import { isOneOf } from '~/lib/guards/commonGuards'
import ValidationError from '~/lib/validators/ValidationError'
import DeleteTaskButton from './DeleteTaskButton'
import classes from './classes.css'
import messages from './messages'

export interface Props {
  value: Task
  index: number

  onChange(value: Partial<TaskParams>): void
  onDelete(): void
  validate(input: Task): Partial<Record<keyof Task, ValidationError>>
}

interface CollectedProps {
  dragging: boolean
}

export interface DragObject extends DragObjectWithType {
  value: Task
  index: number
}

const TaskListItem: React.FC<Props> = ({ value, index, onChange, onDelete, validate }) => {
  const [{ dragging }, drag, preview] = useDrag<DragObject, unknown, CollectedProps>({
    item: {
      type: 'TaskListItem',
      value,
      index,
    },
    isDragging: (monitor) => {
      const item: DragObject = monitor.getItem()

      return value.isIdenticalTo(item.value)
    },
    collect: (monitor) => ({
      dragging: monitor.isDragging(),
    }),
  })

  const { dir } = useContext(IntlProviderContext)

  const className = useMemo(() => classnames(classes.TaskListItemContainer, {
    [classes.Ltr]: dir === 'ltr',
    [classes.Rtl]: dir === 'rtl',
    [classes.Dragging]: dragging,
  }), [dir, dragging])

  const handleContentChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>((event) => {
    onChange({
      content: event.target.value,
    })
  }, [onChange])

  const handleDoneChange = useCallback((event: React.ChangeEvent<HTMLInputElement>, _checked: boolean) => {
    onChange({
      done: event.target.checked,
    })
  }, [onChange])

  const { formatMessage, locale } = useIntl()

  const errors = useMemo(() => validate(value), [value, validate])
  const hasError = useMemo(() => Object.values(errors).some((error) => error !== undefined), [errors])

  const helperText = useMemo(() => {
    if (errors.content === undefined) {
      return null
    }

    if (isOneOf(...Object.keys(messages))(errors.content.key)) {
      const text = formatMessage(messages[errors.content.key], errors.content.values)

      switch (locale) {
        case 'en': return Case.sentence(text)
        case 'ja':
        case 'he': return text
        default: throw new Error // TODO
      }
    }

    return null // TODO
  }, [locale, formatMessage, errors.content])

  return (
    <div ref={ preview }>
      <ListItem
        classes={ {
          container: className,
          secondaryAction: classes.ListItemSecondaryAction,
        } }
      >
        <ListItemIcon>
          <div ref={ drag }>
            <DragHandleIcon />
          </div>
        </ListItemIcon>
        <ListItemIcon>
          <Checkbox checked={ value.done } onChange={ handleDoneChange } />
        </ListItemIcon>
        <TextField
          fullWidth
          value={ value.content }
          onChange={ handleContentChange }
          disabled={ value.done }
          error={ hasError }
          helperText={ helperText }
        />
        <ListItemSecondaryAction>
          <DeleteTaskButton onClick={ onDelete } />
        </ListItemSecondaryAction>
      </ListItem>
    </div>
  )
}

export default TaskListItem
