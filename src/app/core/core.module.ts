import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FakeApiService } from './service/fake-api.service';
import { HttpService } from './service/http.service';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
  ],
  exports: [
    RouterModule,
    HttpClientModule,
  ],
  providers: [
    HttpService,
    FakeApiService
  ],
})
export class CoreModule { }
