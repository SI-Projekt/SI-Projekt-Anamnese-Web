/**
 * general app configuration
 *
 * @author Steve Ngalamo (Software Developer Intern)
 */
import { environment } from '../../environments/environment'
import { Injectable } from '@angular/core'
import { CONFIG, EnvConfig } from '../shared/env.config'

@Injectable()
export class AppConfigService {

    public get config(): EnvConfig {
        return CONFIG
    }


    // Administration paths:

    public get getBaseUrl(): string {
        // return environment.baseUrl
      return ''
    }

    public get getDomainUrl(): string {
        // return environment.domainUrl
      return ''
    }

    public get getCrmUrl(): string {
        // return environment.crmUrl
      return ''
    }

    public get getCrmPath(): string {
        return this.getBaseUrl + this.getCrmUrl
    }

    public get getAuthUrl(): string {
        // return this.getBaseUrl + environment.authUrl
      return ''
    }

    public get getAuthenticationPath(): string {
        return this.getAuthUrl + '/sessions'
    }

    public get getAuthorityPath(): string {
        return this.getAuthUrl + '/my/authorities'
    }

}
