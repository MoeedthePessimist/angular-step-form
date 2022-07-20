import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { InformationService } from '../_services/information.service';

@Component({
  selector: 'app-edu-info',
  templateUrl: './edu-info.component.html',
  styleUrls: ['./edu-info.component.css'],
})
export class EduInfoComponent implements OnInit {
  myForm: any;
  educationalInfo: any;

  constructor(
    private router: Router,
    private informationService: InformationService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    // console.log(this.informationService.getInformation());
    if (!this.informationService.getInformation().personal.email)
      this.prevPage();

    this.educationalInfo = this.informationService.getInformation().education;
    console.log(this.educationalInfo);

    this.myForm = this.fb.group({
      university: [this.educationalInfo.university, [Validators.required]],
      degree: [this.educationalInfo.degree, [Validators.required]],
      major: [this.educationalInfo.major, [Validators.required]],
      gpa: [this.educationalInfo.GPA, [Validators.required]],
    });
  }
  nextPage(event: any): void {
    this.informationService.information.education = this.myForm.value;
    this.router.navigate(['/confirm']);
  }
  prevPage(): void {
    this.router.navigate(['/user-info']);
  }
}
