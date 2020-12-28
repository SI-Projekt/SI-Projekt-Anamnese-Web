import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-personal-info-view',
  templateUrl: './personal-info-view.component.html',
  styleUrls: ['./personal-info-view.component.css']
})
export class PersonalInfoViewComponent implements OnInit {
  headerTitle: string = 'Personal information view'

  constructor() {
  }

  ngOnInit(): void {
  }

}
