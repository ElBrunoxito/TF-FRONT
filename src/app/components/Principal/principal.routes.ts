import { Routes } from "@angular/router";
import { PaginaPrincipalComponent } from "./pagina-principal/pagina-principal.component";
import { InicioComponent } from "./inicio/inicio.component";
import { PerfilComponent } from "./perfil/perfil.component";
import { TransaccionComponent } from "./transaccion/transaccion.component";
import { ReservasComponent } from "./reservas/reservas.component";
import { TarjetasComponent } from "./Tarjeta/tarjetas/tarjetas.component";
import { TransferirMontoComponent } from "./Tarjeta/transferir-monto/transferir-monto.component";
import { RetirarMontoComponent } from "./Tarjeta/retirar-monto/retirar-monto.component";
import { TransferenciaExitosaComponent } from "./Tarjeta/transferencia-exitosa/transferencia-exitosa.component";

export const PRINCIPAL_ROUTES:Routes=[
    {
        path:'',
        redirectTo:'exitosa',
        pathMatch:'full'

    },
    {path:'inicio',component:InicioComponent},
    {path:'perfil',component:PerfilComponent},
    {path:'transaccion', component:TransaccionComponent},
    {path:'reservar',component:ReservasComponent},
    {path:'tarjetas',component:TarjetasComponent},
    {path:'transferir',component:TransferirMontoComponent},
    {path:'retirar',component:RetirarMontoComponent},
    {path:'exitosa',component:TransferenciaExitosaComponent}
    

    
]