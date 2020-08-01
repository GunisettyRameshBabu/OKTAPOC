

export default {
  oidc: {
    clientId: `0oams2zphADtrRnba4x6`,
    issuer: `https://azdesmfb.okta.com/oauth2/default`,
    redirectUri: 'http://localhost:8083/implicit/callback',
    scopes: ['openid', 'profile', 'email'],
    testing: {
      disableHttpsCheck: true
    }
  },
  resourceServer: {
    messagesUrl: 'http://localhost:8000/api/messages',
  },
};
