

export default {
  oidc: {
    clientId: `0oalye591oQwUL3B84x6`,
    issuer: `https://azdesmfb.okta.com/oauth2/default`,
    redirectUri: 'http://localhost:8082/implicit/callback',
    scopes: ['openid', 'profile', 'email'],
    testing: {
      disableHttpsCheck: true
    }
  },
  resourceServer: {
    messagesUrl: 'http://localhost:8000/api/messages',
  },
};
