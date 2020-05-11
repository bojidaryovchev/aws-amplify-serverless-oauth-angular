import { Component, Inject, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';
import { AMPLIFY_AUTHENTICATOR_CONFIG } from '../../auth.constants';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  constructor(@Inject(AMPLIFY_AUTHENTICATOR_CONFIG) public readonly amplifyAuthConfig: object) {}

  ngOnInit() {}

  onGoogleLogin() {
    Auth.federatedSignIn({ customProvider: 'Google' });
  }

  onFacebookLogin() {
    Auth.federatedSignIn({ customProvider: 'Facebook' });
  }

  onTwitterLogin() {
    // todo
  }
}
