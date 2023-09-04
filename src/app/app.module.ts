import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { ListComponent } from './screens/list/list.component';
import { CartdetailComponent } from './screens/cartdetail/cartdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CartdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
