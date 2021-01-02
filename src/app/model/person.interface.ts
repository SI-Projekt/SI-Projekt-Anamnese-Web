import { v4 as uuid } from 'uuid'
import { IAddress } from './address.interface'

export interface IPerson {
  id?: uuid

  userName?: string
  passWord?: string
  security: ISecurity

  firstName?: string
  lastName?: string
  profession?: string
  address?: IAddress
  phoneNumber?: string
  email?: string
  genderValues?: string
  maritalStatusValues?: string
  children?: boolean

  height?: number
  weight?: number

  type?: string
  recorded?: boolean
}

export interface ISecurity {
  id: uuid,
  secretQuestion: string,
  answer: string
}
