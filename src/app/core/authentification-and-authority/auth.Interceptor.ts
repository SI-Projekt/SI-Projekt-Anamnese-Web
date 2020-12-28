import { Injectable } from '@angular/core'
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, } from '@angular/common/http'
import { SessionService } from './session.service'
import { Observable } from 'rxjs'

/**
 *
 * @author Steve Ngalamo (Software Developer Intern)
 *
 */

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private sessionService: SessionService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let authReq
        if (request.method === 'POST' && request.url.endsWith('auth/api/sessions')) {
            return next.handle(request)
        } else {
            const authHeader = 'Bearer ' + this.sessionService.getToken()
            authReq = request.clone({setHeaders: {Authorization: authHeader}})
        }

        return next.handle(authReq)
    }
}
