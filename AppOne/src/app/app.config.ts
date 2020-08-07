

export default {
  oidc: {
    clientId: `0oalybbhasPl9mNBO4x6`,
    issuer: `https://azdesmfb.okta.com/oauth2/default`,
    redirectUri: 'http://localhost:8081/implicit/callback',
    scopes: ['openid', 'profile', 'email'],
    testing: {
      disableHttpsCheck: true
    }
  },
  resourceServer: {
    messagesUrl: 'http://localhost:8000/api/messages',
  },
};
