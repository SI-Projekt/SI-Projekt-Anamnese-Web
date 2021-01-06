import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { MatTabChangeEvent } from '@angular/material/tabs'
import { rootingPath } from '../../shared/rooting-path'

@Component({
  selector: 'app-personal-info-view',
  templateUrl: './personal-info-view.component.html',
  styleUrls: ['./personal-info-view.component.css']
})
export class PersonalInfoViewComponent implements OnInit {
  readonly headerTitle: string = 'Personal information view'
  readonly patienten: string = 'patienten'
  readonly diagnose: string = 'diagnose'
  readonly krankheiten: string = 'krankheiten'
  readonly allergien: string = 'allergien'
  readonly medikamenten: string = 'medikamenten'

  tabIndex: number

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.activeTab()
  }

  ngOnInit(): void {
    // this.activeTab()
  }

  activeTab(): void {
    const fragment: string = this.route.snapshot.params.fragment
    switch (fragment) {
      case this.patienten: this.tabIndex = 0; break
      case this.diagnose: this.tabIndex = 1; break
      case this.krankheiten: this.tabIndex = 2; break
      case this.allergien: this.tabIndex = 3; break
      case this.medikamenten: this.tabIndex = 4; break
    }
  }

  onTabClicked(event: MatTabChangeEvent): void {
    switch (event.index) {
      case 0:  this.navTo(this.patienten); break
      case 1:  this.navTo(this.diagnose); break
      case 2:  this.navTo(this.krankheiten); break
      case 3:  this.navTo(this.allergien); break
      case 4:  this.navTo(this.medikamenten); break
    }
  }

  private navTo(fragment: string): void {
    this.router.navigate([rootingPath.personal_info_view, {fragment: fragment}])
  }

}
