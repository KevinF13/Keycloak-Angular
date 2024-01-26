export const environment = {
    production: true,
    urlServer: "https://proy-encr-decr-b94d4-default-rtdb.firebaseio.com",
    keycloak:{
        issuer: "http://localhost:8080/auth/realms/AgenciaLogin",
        redirectUri: "http://localhost:4500/",
        clientId: "angular-client",
        scope: "openid profile email offline_access",
    }
};
