import { Routes } from "@angular/router";
import { InicioComponent } from "./inicio/inicio.component";
import { PerfilComponent } from "./perfil/perfil.component";
import { TransaccionComponent } from "./transaccion/transaccion.component";
import { ReservasComponent } from "./Reserva/reservas/reservas.component";
import { TarjetasComponent } from "./Tarjeta/tarjetas/tarjetas.component";
import { TransferirMontoComponent } from "./Tarjeta/transferir-monto/transferir-monto.component";
import { RetirarMontoComponent } from "./Tarjeta/retirar-monto/retirar-monto.component";
import { TransferenciaExitosaComponent } from "./Tarjeta/transferencia-exitosa/transferencia-exitosa.component";
import { ConfiguracionComponent } from "./configuracion/configuracion.component";
import { AhorraPorMesComponent } from "./Reserva/ahorra-por-mes/ahorra-por-mes.component";
import { CarroComponent } from "./Reserva/carro/carro.component";
import { ReporteComponent } from "./reporte/reporte.component";

export const PRINCIPAL_ROUTES:Routes=[
    {
        path:'',
        redirectTo:'inicio',
        pathMatch:'full'

    },
    {path:'inicio',component:InicioComponent},
    {path:'perfil',component:PerfilComponent},
    {path:'transaccion', component:TransaccionComponent},
    {path:'reservar',component:ReservasComponent},
    {path:'agregar-reserva',component:AhorraPorMesComponent},
    {path:'carro',component:CarroComponent},
    {path:'tarjetas',component:TarjetasComponent},
    {path:'transferir',component:TransferirMontoComponent},
    {path:'retirar',component:RetirarMontoComponent},
    {path:'exitosa',component:TransferenciaExitosaComponent},
    {path:'configuracion',component:ConfiguracionComponent},
    {path:'reporte',component:ReporteComponent}
    

    
]