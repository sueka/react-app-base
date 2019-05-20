import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, number } from '@storybook/addon-knobs'

import { doNothing } from '../../commonFunctions'
import { withIntlProvider } from '../../storybook/decorators'
import Counter from '.'

storiesOf('Counter', module)
  .addDecorator(withKnobs)
  .addDecorator(withIntlProvider)
  .add('unconnected, with Knobs', () => (
    <Counter
      value={ number('Value', 0) }
      reset={ doNothing }
      increment={ doNothing }
      decrement={ doNothing }
      incrementIfOdd={ doNothing }
      incrementAsync={ doNothing }
    />
  ))
