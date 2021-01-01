/**
 *
 * @author Steve Ngalamo (Software Developer Intern)
 *
 */
export interface EnvConfig {
    baseUrl?: string
    baseUrlLocal?: string

    domainUrl?: string
    authUrl?: string
}

export const CONFIG: EnvConfig = {}
