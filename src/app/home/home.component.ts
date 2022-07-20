import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { InformationService } from '../_services/information.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MessageService],
})
export class HomeComponent implements OnInit {
  items: MenuItem[] = [];
  subscription: Subscription = new Subscription();

  constructor(
    public messageService: MessageService,
    private informationService: InformationService
  ) {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Personal',
        routerLink: 'user-info',
      },
      {
        label: 'Education',
        routerLink: 'edu-info',
      },

      {
        label: 'Confirmation',
        routerLink: 'confirm',
      },
    ];

    this.subscription = this.informationService.informationComplete$.subscribe(
      () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Information saved',
        });
      }
    );
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }
}
