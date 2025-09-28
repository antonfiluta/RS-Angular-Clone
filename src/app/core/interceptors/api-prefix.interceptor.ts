import { HttpInterceptorFn } from '@angular/common/http';

export const ApiPrefixInterceptor: HttpInterceptorFn = (request, next) => {
  const isRelative =
    !request.url.includes('/assets/') &&
    !request.url.endsWith('.json') &&
    !/^https?:\/\//i.test(request.url);

  if (isRelative) {
    request = request.clone({ url: `https://apartment-klol.onrender.com/api${request.url}` });
  }
  return next(request);
};
