import { v4 as uuid } from 'uuid'

export interface IPerson {
  id?: uuid
  userName?: string
  passWord?: string
  firstName?: string
  lastName?: string
  type?: string
  recorded?: boolean
}
