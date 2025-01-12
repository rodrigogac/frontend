import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { InicioComponent } from './inicio/inicio.component';


export const routes: Routes = [  // Exportando as rotas corretamente
  { path: '', component: LoginComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'usuarios', component: ListaUsuariosComponent },
  { path: 'cadastro', component: CadastroUsuarioComponent }
];
