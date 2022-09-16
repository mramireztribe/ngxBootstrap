import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//NGX-BOOTSTRAP MODULES....
import { CarouselModule } from 'ngx-bootstrap/carousel'
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ProgressbarModule, ProgressbarConfig } from 'ngx-bootstrap/progressbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgressBarComponent } from './comonents/progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    TooltipModule,
    ProgressbarModule
  ],
  providers: [ProgressbarConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
