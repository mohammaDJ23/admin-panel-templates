import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import {Auth as awsAuth, Hub} from 'aws-amplify';
import {auth as firebaseAuth} from '../services/auth/firebase/firebase';
import {
  fetchStart,
  fetchSuccess,
  onGetLoggedInCognitoUser,
  setJWTToken,
} from '../../redux/actions';
import {AuthType} from '../../shared/constants/AppEnums';
import {defaultUser} from '../../shared/constants/AppConst';
import jwtAxios from '../services/auth/jwt-auth/jwt-api';
import {AppState} from '../../redux/store';
import {UPDATE_AUTH_USER} from '../../types/actions/Auth.actions';
import {AuthUser} from '../../types/models/AuthUser';

export const useAuthToken = (): [boolean, AuthUser | null] => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const {user} = useSelector<AppState, AppState['auth']>(({auth}) => auth);

  useEffect(() => {
    const awsAuthUser = () =>
      new Promise(resolve => {
        awsAuth
          .currentAuthenticatedUser()
          .then(user => {
            resolve();
            if (user) {
              dispatch({
                type: UPDATE_AUTH_USER,
                payload: {
                  authType: AuthType.AWS_COGNITO,
                  uid: user.username,
                  displayName: user.attributes.name,
                  email: user.attributes.email,
                  role: defaultUser.role,
                  photoURL: user.photoURL,
                  token: user.signInUserSession.accessToken.jwtToken,
                },
              });
            }
          })
          .catch(function(error) {
            resolve();
          });
        return Promise.resolve();
      });

    const firebaseCheck = () =>
      new Promise(resolve => {
        firebaseAuth.onAuthStateChanged(authUser => {
          if (authUser) {
            dispatch({
              type: UPDATE_AUTH_USER,
              payload: {
                authType: AuthType.FIREBASE,
                uid: authUser.uid,
                displayName: authUser.displayName,
                email: authUser.email,
                role: defaultUser.role,
                photoURL: authUser.photoURL,
                token: authUser.refreshToken,
              },
            });
          }
          resolve();
        });
        return Promise.resolve();
      });

    const validateAuth = async () => {
      dispatch(fetchStart());
      const token = localStorage.getItem('token');
      if (!token) {
        dispatch(fetchSuccess());
        return;
      }
      dispatch(setJWTToken(token));
      try {
        const res = await jwtAxios.get('/auth');
        dispatch(fetchSuccess());
        dispatch({
          type: UPDATE_AUTH_USER,
          payload: {
            authType: AuthType.JWT_AUTH,
            displayName: res.data.name,
            email: res.data.email,
            role: defaultUser.role,
            token: res.data._id,
            photoURL: res.data.avatar,
          },
        });
        return;
      } catch (err) {
        dispatch(fetchSuccess());
        return;
      }
    };

    const checkAuth = () => {
      Promise.all([firebaseCheck(), awsAuthUser(), validateAuth()]).then(() => {
        setLoading(false);
      });
      Hub.listen('auth', ({payload: {event, data}}) => {
        switch (event) {
          case 'signIn':
            dispatch(onGetLoggedInCognitoUser());
            break;
          case 'signOut':
            dispatch({type: UPDATE_AUTH_USER, payload: null});
            break;
          default:
            return false;
        }
      });
    };
    checkAuth();
  }, [dispatch]);

  return [loading, user];
};

export const useAuthUser = (): AuthUser | null => {
  const {user} = useSelector<AppState, AppState['auth']>(({auth}) => auth);
  if (user) {
    return user;
  }
  return null;
};
