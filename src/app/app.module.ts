import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent }          from './app.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'error', component: ErrorComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**',   redirectTo: '/error', pathMatch: 'full' }, // redirect to `first-component`
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }