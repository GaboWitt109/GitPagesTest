import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export function authInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> {
  const authReq = req.clone({
    headers: req.headers
      .set('Authorization', `Basic cmVuZGl2YWxvcmVzOnJlbmRwYXNz`)
      .set('Accept-Language', 'es'),
  });

  return next(authReq);
}
