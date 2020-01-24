import { injectable } from 'inversify'
import { Action, Reducer } from 'redux'
import { SagaIterator, Task } from 'redux-saga'
import { ForkEffect, call, cancel, put } from 'redux-saga/effects'

import { takeEvery } from '~/lib/boni/redux-saga/effects'
import delay from '~/lib/delay'

//
//             _|                  _|
//   _|_|_|  _|_|_|_|    _|_|_|  _|_|_|_|    _|_|
// _|_|        _|      _|    _|    _|      _|_|_|_|
//     _|_|    _|      _|    _|    _|      _|
// _|_|_|        _|_|    _|_|_|      _|_|    _|_|_|
//
//

export interface IoState {
  now: Date
}

//
//                       _|      _|
//   _|_|_|    _|_|_|  _|_|_|_|        _|_|    _|_|_|
// _|    _|  _|          _|      _|  _|    _|  _|    _|
// _|    _|  _|          _|      _|  _|    _|  _|    _|
//   _|_|_|    _|_|_|      _|_|  _|    _|_|    _|    _|
//
//
//
//   _|
// _|_|_|_|  _|    _|  _|_|_|      _|_|      _|_|_|
//   _|      _|    _|  _|    _|  _|_|_|_|  _|_|
//   _|      _|    _|  _|    _|  _|            _|_|
//     _|_|    _|_|_|  _|_|_|      _|_|_|  _|_|_|
//                 _|  _|
//             _|_|    _|

export /* for testing */ const UPDATE_NOW = '@@react-app-prototype/io/UPDATE_NOW' // TODO: rename
export /* for testing */ const START_CLOCK = '@@react-app-prototype/io/START_CLOCK'
const STOP_CLOCK = '@@react-app-prototype/io/STOP_CLOCK'
export /* for testing */ const SET_NOW = '@@react-app-prototype/io/SET_NOW'

const ioActionTypes = [
  UPDATE_NOW,
  START_CLOCK,
  STOP_CLOCK,
  SET_NOW,
]

interface UpdateNowAction extends Action<typeof UPDATE_NOW> {}

interface StartClockAction extends Action<typeof START_CLOCK> {}

interface StopClockAction extends Action<typeof STOP_CLOCK> {}

export /* for testing */ interface SetNowAction extends Action<typeof SET_NOW> {
  payload: {
    now: Date
  }
}

export type IoAction =
  | UpdateNowAction
  | StartClockAction
  | StopClockAction
  | SetNowAction

function isIoAction(action: Action): action is IoAction {
  return ioActionTypes.includes(action.type)
}

//
//                       _|      _|
//   _|_|_|    _|_|_|  _|_|_|_|        _|_|    _|_|_|
// _|    _|  _|          _|      _|  _|    _|  _|    _|
// _|    _|  _|          _|      _|  _|    _|  _|    _|
//   _|_|_|    _|_|_|      _|_|  _|    _|_|    _|    _|
//
//
//
//                                           _|
//   _|_|_|  _|  _|_|    _|_|      _|_|_|  _|_|_|_|    _|_|    _|  _|_|    _|_|_|
// _|        _|_|      _|_|_|_|  _|    _|    _|      _|    _|  _|_|      _|_|
// _|        _|        _|        _|    _|    _|      _|    _|  _|            _|_|
//   _|_|_|  _|          _|_|_|    _|_|_|      _|_|    _|_|    _|        _|_|_|
//
//

export const updateNow = (): UpdateNowAction => ({
  type: UPDATE_NOW,
})

export const startClock = (): StartClockAction => ({
  type: START_CLOCK,
})

export const stopClock = (): StopClockAction => ({
  type: STOP_CLOCK,
})

export /* for testing */ const setNow = (now: Date): SetNowAction => ({
  type: SET_NOW,
  payload: {
    now,
  },
})

//
//                           _|
// _|  _|_|    _|_|      _|_|_|  _|    _|    _|_|_|    _|_|    _|  _|_|
// _|_|      _|_|_|_|  _|    _|  _|    _|  _|        _|_|_|_|  _|_|
// _|        _|        _|    _|  _|    _|  _|        _|        _|
// _|          _|_|_|    _|_|_|    _|_|_|    _|_|_|    _|_|_|  _|
//
//

export const createIoReducer: (initialState: IoState) => Reducer<IoState, Action> = (initialState) => (state = initialState, action) => {
  if (!isIoAction(action)) {
    return state
  }

  switch (action.type) {
    case UPDATE_NOW: return state
    case START_CLOCK: return state
    case STOP_CLOCK: return state
    case SET_NOW: return {
      ...state,
      now: action.payload.now,
    }
  }
}

//
//                                           _|
//   _|_|_|    _|_|    _|  _|_|  _|      _|        _|_|_|    _|_|
// _|_|      _|_|_|_|  _|_|      _|      _|  _|  _|        _|_|_|_|
//     _|_|  _|        _|          _|  _|    _|  _|        _|
// _|_|_|      _|_|_|  _|            _|      _|    _|_|_|    _|_|_|
//
//

@injectable()
export class IoService {
  private startClockTask: ForkEffect & Task | null = null // NOTE: Redux-Saga の型定義のバグ？（ `ForkEffect extends Task` とするか、 `cancel(task: ForkEffect): CancelEffect` とオーバーロードするかすべき）

  public /* for testing */ *updateNowSaga(): SagaIterator {
    yield put(setNow(new Date))
  }

  public /* for testing */ *startClockSaga(): SagaIterator {
    // tslint:disable-next-line:no-loop-statement
    while (true) {
      yield call(delay, 1000 - new Date().getMilliseconds())

      yield put(updateNow())
    }
  }

  public /* for testing */ *stopClockSaga(): SagaIterator {
    if (this.startClockTask !== null) {
      yield cancel(this.startClockTask)

      // Resume the cancelled task
      // tslint:disable-next-line:no-object-mutation
      this.startClockTask = yield takeEvery(START_CLOCK, [this, this.startClockSaga])
    }
  }

  public *rootSaga(): SagaIterator {
    yield takeEvery(UPDATE_NOW, [this, this.updateNowSaga])
    // tslint:disable-next-line:no-object-mutation
    this.startClockTask = yield takeEvery(START_CLOCK, [this, this.startClockSaga])
    yield takeEvery(STOP_CLOCK, [this, this.stopClockSaga])
  }
}
