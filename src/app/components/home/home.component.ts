import { Component } from '@angular/core';
import { JwksValidationHandler, OAuthService } from 'angular-oauth2-oidc';
import { authCodeFlowConfig } from 'src/app/sso-config';
import { FormGroup, FormControl } from '@angular/forms';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { EncrService } from 'src/app/services/encr.service';
import { keySecret } from '../conf/secretKey';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  private llave = keySecret.key;

  usuarios:UsuarioModel[]=[];

  registerForm = new FormGroup({
    nombre: new FormControl(''),
    password: new FormControl('')
  })

  name: string = "";

  constructor(private oAuthService: OAuthService, 
    private usuarioSVC:UsuariosService,
    private encr:EncrService){}

  ngOnInit(): void {
    this.configureSingleSignOn();
    const userClaims: any = this.oAuthService.getIdentityClaims();
    this.name = userClaims.name ? userClaims.name: "";
  }

  configureSingleSignOn(){
    this.oAuthService.configure(authCodeFlowConfig);
    this.oAuthService.tokenValidationHandler = new JwksValidationHandler();
    this.oAuthService.loadDiscoveryDocumentAndTryLogin();
  }

  onRegister(){
    
    if(this.registerForm.value.nombre === '' || this.registerForm.value.password === ''){
      Swal.fire('ERROR', 'Debe llenar los campos', 'error');
    }else{
      var encrypted = this.encr.set(this.llave, this.registerForm.value.password);

    const usuario:UsuarioModel={
      nombre:this.registerForm.value.nombre ?? undefined,
      password:encrypted,
      estado:true
    }

    this.usuarioSVC.crearUsuarios(usuario).subscribe(res=>{
      Swal.fire({
        icon: 'success',
        title: 'EXITO',
        text: 'Los datos se encriptaron correctamente...',
        confirmButtonText: 'Aceptar',
        allowOutsideClick: false
      }).then((result)=>{
        if(result.value){
          this.registerForm.reset();
        }
      })
    })
    }
    
  }
}
