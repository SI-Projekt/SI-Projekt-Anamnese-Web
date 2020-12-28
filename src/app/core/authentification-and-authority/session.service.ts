import { Injectable } from '@angular/core'

/**
 *
 * @author Steve Ngalamo (Software Developer Intern)
 *
 */

@Injectable({providedIn: 'root'})
export class SessionService {
  private authTokenKey: string = 'authToken'
  private usernameKey: string = 'username'
  private firstNameKey: string = 'firstname'
  private lastNameKey: string = 'lastname'
  private userIdKey: string = 'userId'
  private personTypeKey: string = 'personType'

  /*** is authenticated ***/
  isAuthenticated(): boolean {
    return !!this.getToken()
  }

  /*** to set the session ***/
  setSession(session: any, username: string): void {
    this.setToken(session.token)
    this.setFirstName(session.user.first)
    this.setLastName(session.user.last)
    this.setUsername(username)
  }

  /*** to clear the session ***/
  clearSession(): void {
    sessionStorage.clear()
    console.log('cession clear')
  }

  /*** about the authenticated token ***/
  setToken(token: any): void {
    sessionStorage.setItem(this.authTokenKey, token)
  }

  getToken(): any {
    const token = sessionStorage.getItem(this.authTokenKey)
    if (token) {
      return token
    } else {
      return ''
    }
  }

  /*** about the userName ***/
  setUsername(username: string): void {
    sessionStorage.setItem(this.usernameKey, username)
  }

  getUsername(): any {
    return sessionStorage.getItem(this.usernameKey)
  }

  /*** about the firstName ***/
  setFirstName(firstName: string): void {
    sessionStorage.setItem(this.firstNameKey, firstName)
  }

  getFirstName(): any {
    return sessionStorage.getItem(this.firstNameKey)
  }

  /*** about the lastName ***/
  setLastName(lastName: string): void {
    sessionStorage.setItem(this.lastNameKey, lastName)
  }

  getLastName(): any {
    return sessionStorage.getItem(this.lastNameKey)
  }

  /*** about the userId ***/
  setUserId(userId: string): void {
    sessionStorage.setItem(this.userIdKey, userId)
  }

  getUserId(): any {
    return sessionStorage.getItem(this.userIdKey)
  }

  /*** about the personType ***/
  setPersonTypeKey(personTypeKey: string): void {
    sessionStorage.setItem(this.personTypeKey, personTypeKey)
  }

  getPersonTypeKey(): any {
    return sessionStorage.getItem(this.personTypeKey)
  }

}
