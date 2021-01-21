import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { v4 as uuid } from 'uuid'
import { IAllergy } from '../../model/person.interface'
import { AppConfigService } from '../../core/app-config.service'


@Injectable({providedIn: 'root'})
export class AllergyService {
  private readonly allergyUrl: string
  private readonly allergyItemUrl: string

  constructor(
    private httpClient: HttpClient,
    private appConfig: AppConfigService,
  ) {
    this.allergyUrl = this.appConfig.getAllergyPath
    this.allergyItemUrl = this.appConfig.getAllergyPath + '/'
  }


// EXTRA METHODES:....................................................................

  /*** TO GET ALL ALLERGY: ***/
  getAll(queryParam?: HttpParams): any {
    return this.httpClient.get<Response>(this.allergyUrl, {params: queryParam})
      .pipe(map((res: Response) => res))
  }

  /*** TO GET ONE BY ALLERGY ID: ***/
  getOne(allergyId: uuid): any {
    return this.httpClient.get(this.allergyItemUrl + allergyId)
      .pipe(map((res: any) => res))
  }

  /*** TO ADD A NEW ALLERGY ***/
  add(allergy: IAllergy): any {
    return this.httpClient.post(this.allergyUrl, allergy)
      .pipe(map((res: Response) => res))
  }

  /***  TO EDIT A ALLERGY ***/
  edit(allergyId: uuid, update: IAllergy): any {
    return this.httpClient.put(this.allergyItemUrl + allergyId, update)

  }

  /*** TO DELETE A ALLERGY ***/
  delete(allergyId: uuid): any {
    return this.httpClient.delete(this.allergyItemUrl + allergyId)
  }

}
