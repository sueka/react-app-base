import { injectable } from 'inversify'
import { Action, Reducer } from 'redux'
import { SagaIterator } from 'redux-saga'
import { call, put, select } from 'redux-saga/effects'

import { takeEvery } from '~/boni/redux-saga/effects'
import delay from '~/delay'
import { State } from '~/redux'

//
//             _|                  _|
//   _|_|_|  _|_|_|_|    _|_|_|  _|_|_|_|    _|_|
// _|_|        _|      _|    _|    _|      _|_|_|_|
//     _|_|    _|      _|    _|    _|      _|
// _|_|_|        _|_|    _|_|_|      _|_|    _|_|_|
//
//

export interface CounterState {
  count: number
}

export function counterInvariant(state: CounterState) {
  return state.count >= 0
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

export /* for testing */ const RESET = '@@rap/counter/RESET'
export /* for testing */ const INCREMENT_IF_ODD = '@@rap/counter/INCREMENT_IF_ODD'
export /* for testing */ const INCREMENT_ASYNC = '@@rap/counter/INCREMENT_ASYNC'
export /* for testing */ const INCREMENT = '@@rap/counter/INCREMENT'
export /* for testing */ const DECREMENT = '@@rap/counter/DECREMENT'

const counterActionTypes = [
  RESET,
  INCREMENT_IF_ODD,
  INCREMENT_ASYNC,
  INCREMENT,
  DECREMENT,
]

type ResetAction = ReturnType<typeof reset>
type IncrementIfOddAction = ReturnType<typeof incrementIfOdd>
type IncrementAsyncAction = ReturnType<typeof incrementAsync>
type IncrementAction = ReturnType<typeof increment>
type DecrementAction = ReturnType<typeof decrement>

export type CounterAction =
  | ResetAction
  | IncrementIfOddAction
  | IncrementAsyncAction
  | IncrementAction
  | DecrementAction

function isCounterAction(action: Action): action is CounterAction {
  return counterActionTypes.includes(action.type)
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

export const reset = () => <const> ({
  type: RESET,
})

export const incrementIfOdd = () => <const> ({
  type: INCREMENT_IF_ODD,
})

export const incrementAsync = (ms: number) => <const> ({
  type: INCREMENT_ASYNC,
  payload: {
    ms,
  },
})

export const increment = () => <const> ({
  type: INCREMENT,
})

export const decrement = () => <const> ({
  type: DECREMENT,
})

//
//                     _|                        _|
//   _|_|_|    _|_|    _|    _|_|      _|_|_|  _|_|_|_|    _|_|    _|  _|_|    _|_|_|
// _|_|      _|_|_|_|  _|  _|_|_|_|  _|          _|      _|    _|  _|_|      _|_|
//     _|_|  _|        _|  _|        _|          _|      _|    _|  _|            _|_|
// _|_|_|      _|_|_|  _|    _|_|_|    _|_|_|      _|_|    _|_|    _|        _|_|_|
//
//

export const selectCount = (state: State) => state.counter.count

//
//                           _|
// _|  _|_|    _|_|      _|_|_|  _|    _|    _|_|_|    _|_|    _|  _|_|
// _|_|      _|_|_|_|  _|    _|  _|    _|  _|        _|_|_|_|  _|_|
// _|        _|        _|    _|  _|    _|  _|        _|        _|
// _|          _|_|_|    _|_|_|    _|_|_|    _|_|_|    _|_|_|  _|
//
//

export const createCounterReducer: (initialState: CounterState) => Reducer<CounterState, Action> = (initialState) => (state = initialState, action) => {
  if (!isCounterAction(action)) {
    return state
  }

  switch (action.type) {
    case RESET: return initialState
    case INCREMENT_IF_ODD:
    case INCREMENT_ASYNC: return state
    case INCREMENT: return {
      ...state,
      count: state.count + 1,
    }
    case DECREMENT: return {
      ...state,
      count: state.count - 1,
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
export class CounterService {
  public /* for testing */ *incrementIfOddSaga(): SagaIterator {
    const { counter: { count } }: State = yield select()

    if (count % 2 !== 0) {
      yield put(increment())
    }
  }

  public /* for testing */ *incrementAsyncSaga({ payload: { ms } }: IncrementAsyncAction): SagaIterator {
    yield call(delay, ms)
    yield put(increment())
  }

  public *rootSaga(): SagaIterator {
    yield takeEvery(INCREMENT_IF_ODD, [this, this.incrementIfOddSaga])
    yield takeEvery(INCREMENT_ASYNC, [this, this.incrementAsyncSaga])
  }
}
