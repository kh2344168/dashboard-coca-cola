import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { DaysComponent } from './dashboard/header/days/days.component';
import { FactoryComponent } from './dashboard/header/factory/factory.component';
import { DateComponent } from './dashboard/header/date/date.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';  // Add FormsModule
import { ContentComponent } from './dashboard/content/content.component';
import { CountUpModule } from 'ngx-countup';
import { LineNameComponent } from './dashboard/line-name/line-name.component';
import { NgChartsModule } from 'ng2-charts';
import { RiChartsComponent } from './dashboard/line-name/ri-charts/ri-charts.component';
import { BoxesComponent } from './dashboard/line-name/boxes/boxes.component';
import { TimeLineComponent } from './dashboard/line-name/time-line/time-line.component';
import { LineChartComponent } from './dashboard/line-name/line-chart/line-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
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
    NgChartsModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
