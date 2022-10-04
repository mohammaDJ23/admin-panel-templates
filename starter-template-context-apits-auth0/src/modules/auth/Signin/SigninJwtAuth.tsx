import React from 'react';
import InfoView from '../../../@crema/core/InfoView';
import Box from '@material-ui/core/Box';
import {makeStyles} from '@material-ui/core/styles';
import {Fonts} from 'shared/constants/AppEnums';
import {CremaTheme} from '../../../types/AppContextPropsType';
import grey from '@material-ui/core/colors/grey';
import {Button} from '@material-ui/core';
import clsx from 'clsx';
import {useAuth0} from '@auth0/auth0-react';
import IntlMessages from '../../../@crema/utility/IntlMessages';

const useStyles = makeStyles((theme: CremaTheme) => ({
  formRoot: {
    textAlign: 'left',
    [theme.breakpoints.up('xl')]: {
      marginBottom: 24,
    },
  },
  myTextFieldRoot: {
    width: '100%',
  },
  checkboxRoot: {
    marginLeft: -12,
  },
  pointer: {
    cursor: 'pointer',
  },
  btnRoot: {
    borderRadius: theme.overrides.MuiCard.root.borderRadius,
    width: '10rem',
    fontWeight: Fonts.REGULAR,
    fontSize: 16,
    textTransform: 'capitalize',
  },
  btnRootFull: {
    width: '100%',
  },
  dividerRoot: {
    marginBottom: 16,
    marginLeft: -48,
    marginRight: -48,
    [theme.breakpoints.up('xl')]: {
      marginBottom: 32,
    },
  },
  textPrimary: {
    color: theme.palette.text.primary,
  },
  colorTextPrimary: {
    color: theme.palette.primary.main,
  },
  underlineNone: {
    textDecoration: 'none',
  },
  textGrey: {
    color: theme.palette.grey[500],
  },
}));
interface UserSigninProps {}

const SigninJwtAuth: React.FC<UserSigninProps> = (props) => {
  const {loginWithRedirect} = useAuth0();

  const classes = useStyles(props);

  return (
    <Box flex={1} display='flex' flexDirection='column'>
      <Box
        px={{xs: 6, sm: 10, xl: 15}}
        pt={8}
        flex={1}
        display='flex'
        flexDirection='column'>
        <Box
          bgcolor={grey[100]}
          px={{xs: 6, sm: 10, xl: 15}}
          py={{xs: 3, xl: 4}}
          display='flex'
          justifyContent='center'
          alignItems='center'>
          <Button
            variant='contained'
            color='primary'
            className={clsx(classes.btnRoot, classes.btnRootFull)}
            onClick={loginWithRedirect}>
            <IntlMessages id='auth.loginWithAuth0' />
          </Button>
        </Box>
      </Box>

      <InfoView />
    </Box>
  );
};

export default SigninJwtAuth;
