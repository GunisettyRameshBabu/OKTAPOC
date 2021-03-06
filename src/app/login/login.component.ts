/*!
 * Copyright (c) 2018, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

import { Component, OnInit } from '@angular/core';
import * as OktaSignIn from '@okta/okta-signin-widget';
import sampleConfig from '../app.config';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signIn: any;
  constructor() {
    this.signIn = new OktaSignIn({
      baseUrl: sampleConfig.oidc.issuer.split('/oauth2')[0],
      clientId: sampleConfig.oidc.clientId,
      redirectUri: sampleConfig.oidc.redirectUri,
      logo: '/assets/azgov-logo.png',
      i18n: {
        en: {
          'primaryauth.title': 'Sign in to Arizona Department of Economic Security',
        },
      },
      authParams: {
        pkce: true,
        responseMode: 'query',
        issuer: sampleConfig.oidc.issuer,
        display: 'page',
        scopes: sampleConfig.oidc.scopes,
      },
      features: {
        registration: true,                 // Enable self-service registration flow
        rememberMe: true,                   // Setting to false will remove the checkbox to save username
        //multiOptionalFactorEnroll: true,  // Allow users to enroll in multiple optional factors before finishing the authentication flow.
        //selfServiceUnlock: true,          // Will enable unlock in addition to forgotten password
        //smsRecovery: true,                // Enable SMS-based account recovery
        //callRecovery: true,               // Enable voice call-based account recovery
        router: true,                       // Leave this set to true for the API demo
      },
    });
  }

  ngOnInit() {
    this.signIn.renderEl(
      { el: '#sign-in-widget' },
      () => {
        /**
         * In this flow, the success handler will not be called because we redirect
         * to the Okta org for the authentication workflow.
         */
      },
      (err) => {
        throw err;
      },
    );
  }

}
