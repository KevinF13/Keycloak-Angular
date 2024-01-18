import { AuthConfig } from "angular-oauth2-oidc";
import { environment } from "src/environments/environment";
export const authCodeFlowConfig: AuthConfig = {

    //TODO ESTA CONFIGURADO DESDE ENVIROMENT
    //PARA CAMBIAR DE AZURE AUTENTICATOR A KEYCLOAK
    //SOLO SE DEBE USAR EL OTRO ENVIROMENT 'environment.azure.issuer'
    issuer: environment.keycloak.issuer,

    redirectUri: environment.keycloak.redirectUri,

    //redirectUri: window.location.origin + '/index.html',

    clientId: environment.keycloak.clientId,

    responseType: 'code',

    scope: environment.keycloak.scope,

    requireHttps: false,

    showDebugInformation: true,
};

