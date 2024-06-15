import { Routes } from "@angular/router";
import { PaginaPrincipalComponent } from "./pagina-principal/pagina-principal.component";
import { InicioComponent } from "./inicio/inicio.component";
import { PerfilComponent } from "./perfil/perfil.component";

export const PRINCIPAL_ROUTES:Routes=[
    {
        path:'',
        redirectTo:'inicio',
        pathMatch:'full'

    },
    {
        path:'inicio',component:InicioComponent
    },
    {
        path:'perfil',component:PerfilComponent 
       }

    
]