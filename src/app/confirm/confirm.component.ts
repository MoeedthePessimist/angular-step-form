import { Component, OnInit } from '@angular/core';
import { InformationService } from '../_services/information.service';
import { Router } from '@angular/router';
import { UploadService } from '../_services/upload.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css'],
})
export class ConfirmComponent implements OnInit {
  information: any;
  image: any;
  imageUploaded: boolean = false;

  constructor(
    private informationService: InformationService,
    private router: Router,
    private uploadService: UploadService
  ) {}

  ngOnInit(): void {
    this.information = this.informationService.getInformation();

    if (
      !this.information.education.university ||
      !this.information.personal.email
    )
      this.prevPage();
  }

  upload(event: any) {
    console.log(typeof event.files[0]);
    console.log(event.files[0]);
    this.image = event.files[0];
  }

  prevPage() {
    this.router.navigate(['/edu-info']);
  }

  goToStart() {
    this.informationService.resetInformation();
    this.router.navigate(['/user-info']);
  }

  onSubmit() {
    console.log('on submit function called');
    this.uploadService.uploadInformation(this.information).subscribe(
      (data) => {
        console.log(data);
        this.goToStart();
      },
      (err) => {
        console.log(err.error.message);
      }
    );
  }

  onUploadImage(event: any) {
    this.image = event.files[0];
    this.uploadService.uploadImage(this.image).subscribe(
      (data) => {
        console.log(data);
        this.imageUploaded = true;
      },
      (err) => {
        console.log(err.error.message);
        this.imageUploaded = false;
      }
    );
  }
}
