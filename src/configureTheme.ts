import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import teal from '@material-ui/core/colors/teal'
import indigo from '@material-ui/core/colors/indigo'

interface Props {
  dark: boolean
}

const configureTheme = ({ dark }: Props) => createMuiTheme({
  typography: {
    fontFamily: 'sans-serif',
  },
  props: {
    MuiLink: {
      variant: 'body1',
    },
    MuiButton: {
      variant: 'outlined',
    },
    MuiFormControl: {
      variant: 'outlined',
    },
  },
  palette: {
    primary: teal,
    secondary: indigo,
    type: dark ? 'dark' : 'light',
  },
})

export default configureTheme