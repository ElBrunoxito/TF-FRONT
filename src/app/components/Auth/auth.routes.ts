import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { AddTarjetaComponent } from "./add-tarjeta/add-tarjeta.component";
import { RecuperarComponent } from "./recuperar/recuperar.component";

export const AUTH_ROUTES:Routes=[
    {
      path:''  ,
      redirectTo: 'login',
      pathMatch:'full'
    },
    {path:'login',component:LoginComponent,},
    {path:'register',component:RegisterComponent},
    {path:'recuperar',component:RecuperarComponent},
    {path:'addtarjeta',component:AddTarjetaComponent}


    
]