import { Routes } from '@angular/router';
import { PaginaPrincipalComponent } from './components/Principal/pagina-principal/pagina-principal.component';

export const routes: Routes = [
    //{path:''},
    {
        path:'',redirectTo:'auth',pathMatch:'full'
    }
    ,
    { 
        path:'principal',component:PaginaPrincipalComponent,loadChildren:()=> import('./components/Principal/principal.routes').then(m=>m.PRINCIPAL_ROUTES),    
    },
    {
        path:'auth',loadChildren:()=>import('./components/Auth/auth.routes').then(m=>m.AUTH_ROUTES)
    }
    
];
