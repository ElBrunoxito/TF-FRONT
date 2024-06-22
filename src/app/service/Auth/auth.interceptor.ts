import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../configP/provide.prod';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  /*const authToken = localStorage.getItem('token');
    //console.log(authToken + "DFsad");
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${authToken}`
        }
      });

  return next(req);


  */
  const allowedEndpoints = environment.allowed;

  // Verifica si la URL del request está en la lista de endpoints permitidos
  const isAllowedEndpoint = allowedEndpoints.some(url => req.url.includes(url));

  if (isAllowedEndpoint) {
    // Si es un endpoint permitido, sigue adelante sin modificar el request
    return next(req);
  }

  // Si no es un endpoint permitido, añade lógica adicional como headers de autenticación
  const authToken = localStorage.getItem('token');
  const clonedRequest = req.clone({
    setHeaders: {
      Authorization: `Bearer ${authToken}`
    }
  });

  return next(clonedRequest);
};
