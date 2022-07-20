// core module imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FileUploadModule as ng2FileUploadModule } from 'ng2-file-upload';

// primeNg imports
import { StepsModule } from 'primeng/steps';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';

// component imports
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { EduInfoComponent } from './edu-info/edu-info.component';
import { ConfirmComponent } from './confirm/confirm.component';

// service providers imports
// import { UserInfoService } from './_services/user-info.service';
// import { EduInfoService } from './_services/edu-info.service';
// import { UploadService } from './_services/upload.service';
// import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserInfoComponent,
    EduInfoComponent,
    ConfirmComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StepsModule,
    BrowserAnimationsModule,
    CardModule,
    InputTextModule,
    FileUploadModule,
    ButtonModule,
    ng2FileUploadModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
// UserInfoService, EduInfoService, UploadService, MessageService
export class AppModule {}
