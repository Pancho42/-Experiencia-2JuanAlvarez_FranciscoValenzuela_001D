import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { firebaseConfig } from "../environments/environment";

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {IonicStorageModule} from '@ionic/storage-angular';
import { Drivers } from '@ionic/storage';





@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, AngularFireModule.initializeApp(firebaseConfig), AngularFireAuthModule, IonicStorageModule.forRoot({
    name: 'mydb',
    driverOrder: [Drivers.IndexedDB,Drivers.LocalStorage]
    }),NgbModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
