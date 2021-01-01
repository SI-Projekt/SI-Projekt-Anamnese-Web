import { Component, OnInit } from '@angular/core'
import { rootingPath } from '../../shared/rooting-path'

@Component({
  selector: 'app-home-personal',
  templateUrl: './home-personal.component.html',
  styleUrls: ['./home-personal.component.css']
})
export class HomePersonalComponent implements OnInit {
  readonly headerTitle: string = 'Administration - Home'
  readonly personal_info_view_path: string

  constructor() {
    this.headerTitle = 'Administration - Home'
    this.personal_info_view_path = '/' + rootingPath.personal_info_view
  }

  ngOnInit(): void {
  }

}
