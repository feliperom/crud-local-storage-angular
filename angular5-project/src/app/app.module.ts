import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Ng2Webstorage} from 'ngx-webstorage';

import { AppComponent } from './app.component';
import { CrudLocalStorageComponent } from './crud-local-storage/crud-local-storage.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CrudLocalStorageComponent,
    AppNavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    Ng2Webstorage,
    BrowserAnimationsModule,
    ToastrModule.forRoot(
      {closeButton: true,
       progressBar: true,
       timeOut: 5000,
       positionClass: 'toast-bottom-right',
       preventDuplicates: true}
      )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
