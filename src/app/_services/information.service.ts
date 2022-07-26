import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InformationService {
  information = {
    personal: {
      name: '',
      email: '',
      phone: '',
      address: '',
    },
    education: {
      university: '',
      degree: '',
      major: '',
      GPA: 1.7,
    },
  };

  private informationComplete = new Subject<any>();

  informationComplete$ = this.informationComplete.asObservable();

  getInformation() {
    return this.information;
  }

  resetInformation() {
    this.information = {
      personal: {
        name: '',
        email: '',
        phone: '',
        address: '',
      },
      education: {
        university: '',
        degree: '',
        major: '',
        GPA: 1.7,
      },
    };
  }

  setInformation(information: any) {
    this.information = information;
  }

  complete() {
    this.informationComplete.next(this.information);
  }
}
