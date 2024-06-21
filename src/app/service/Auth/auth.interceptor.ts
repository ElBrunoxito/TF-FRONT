import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
    const authToken = localStorage.getItem('token');
    //console.log(authToken + "DFsad");
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${authToken}`
        }
      });

  return next(req);
};
