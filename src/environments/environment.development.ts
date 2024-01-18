export const environment = {
    production: true,
    keycloak:{
        issuer: "http://localhost:8080/auth/realms/AgenciaLogin",
        redirectUri: "http://localhost:4200/",
        clientId: "angular-client",
        scope: "openid profile email offline_access",
    }
};
