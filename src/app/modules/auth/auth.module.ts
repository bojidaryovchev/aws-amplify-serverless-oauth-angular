import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './components/auth/auth.component';
import { AmplifyAuthenticatorConfigProvider } from './providers/amplifyAuthenticatorConfig.provider';

@NgModule({
  imports: [SharedModule, AuthRoutingModule],
  providers: [AmplifyAuthenticatorConfigProvider],
  declarations: [AuthComponent],
})
export class AuthModule {}
