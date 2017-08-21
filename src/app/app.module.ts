import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { DailyTasks } from './daily-tasks.component';
import { Tasksprocess } from './tasks-process';



const appRoutes: Routes = [
  { path: 'daily-tasks', component: DailyTasks },
  { path: 'tasks-process', component: Tasksprocess },
  { path: '',
    redirectTo: '/',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    DailyTasks,
    Tasksprocess
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
