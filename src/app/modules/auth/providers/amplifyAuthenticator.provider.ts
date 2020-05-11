import { Provider } from '@angular/core';
import { AMPLIFY_AUTHENTICATOR } from '../auth.constants';

export const AmplifyAuthenticatorProvider: Provider = {
  provide: AMPLIFY_AUTHENTICATOR,
  useValue: {
    hideAllDefaults: true,
    signUpFields: [
      {
        label: 'Username',
        key: 'username',
        required: true,
        displayOrder: 1,
        type: 'string',
      },
      {
        label: 'Password',
        key: 'password',
        required: true,
        displayOrder: 2,
        type: 'password',
      },
    ],
  },
};
