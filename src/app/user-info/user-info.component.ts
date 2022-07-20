import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { InformationService } from '../_services/information.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
})
export class UserInfoComponent implements OnInit {
  myForm: any;
  personalInfo: any;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private informationService: InformationService
  ) {}

  ngOnInit(): void {
    this.personalInfo = this.informationService.getInformation().personal;

    this.myForm = this.fb.group({
      name: [
        this.personalInfo.name,
        [Validators.required, Validators.minLength(3)],
      ],
      email: [this.personalInfo.email, [Validators.required, Validators.email]],
      phone: [
        this.personalInfo.phone || '+92',
        [
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(13),
        ],
      ],
      address: this.personalInfo.address,
    });
  }
  

  nextPage(event: any): void {
    this.informationService.information.personal = this.myForm.value;

    this.router.navigate(['/edu-info']);
  }
}
