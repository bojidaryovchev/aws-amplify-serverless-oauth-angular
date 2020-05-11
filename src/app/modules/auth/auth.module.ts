import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './components/auth/auth.component';
import { AmplifyAuthenticatorProvider } from './providers/amplifyAuthenticator.provider';

@NgModule({
  imports: [SharedModule, AuthRoutingModule],
  providers: [AmplifyAuthenticatorProvider],
  declarations: [AuthComponent],
})
export class AuthModule {}
