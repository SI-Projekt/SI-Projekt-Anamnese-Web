// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  production: false,
  currentEnvironment: 'Local',

  // Paths:
  // baseUrl: 'http://54.145.7.15:8080', // server
  baseUrl: 'ec2-3-84-206-109.compute-1.amazonaws.com:8080' // rds
  // baseUrl: 'http://localhost:8080' // local
  baseUrl: 'http://localhost:8080'

}
