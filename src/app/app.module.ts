import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { DaysComponent } from './header/days/days.component';
import { FactoryComponent } from './header/factory/factory.component';
import { DateComponent } from './header/date/date.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';  // Add FormsModule
import { ContentComponent } from './home/content/content.component';
import { CountUpModule } from 'ngx-countup';
import { LineNameComponent } from './line/line-name/line-name.component';
import { NgChartsModule } from 'ng2-charts';
import { RiChartsComponent } from './line/line-name/ri-charts/ri-charts.component';
import { BoxesComponent } from './line/line-name/boxes/boxes.component';
import { TimeLineComponent } from './line/line-name/time-line/time-line.component';
import { LineChartComponent } from './line/line-name/line-chart/line-chart.component';
import { FactoryPageComponent } from './factory-page/factory-page.component';
import { FBoxesComponent } from './factory-page/f-boxes/f-boxes.component';
import { FBarChartComponent } from './factory-page/f-bar-chart/f-bar-chart.component';
import { HomeComponent } from './home/home.component';
import { LineComponent } from './line/line.component';
import { LineHeaderComponent } from './line/line-header/line-header.component';
import { FLHeaderComponent } from './line/line-header/f-l-header/f-l-header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    HeaderComponent,
    DaysComponent,
    FactoryComponent,
    DateComponent,
    ContentComponent,
    LineNameComponent,
    RiChartsComponent,
    BoxesComponent,
    TimeLineComponent,
    LineChartComponent,
    FactoryPageComponent,
    FBoxesComponent,
    FBarChartComponent,
    HomeComponent,
    LineComponent,
    LineHeaderComponent,
    FLHeaderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule, // Add FormsModule
    CountUpModule,
    NgChartsModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
