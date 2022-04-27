import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { NgxMaskModule } from 'ngx-mask';

import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieInfoComponent } from './movie-info/movie-info.component';
import { HeaderComponent } from './header/header.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CinemaInfoComponent } from './cinema-info/cinema-info.component';
import { RegisterComponent } from './register/register.component';
import { RegisterConfirmComponent } from './register-confirm/register-confirm.component';
import { BackButtonComponent } from './back-button/back-button.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: MovieListComponent },
  { path: 'movie', component: MovieInfoComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieInfoComponent,
    HeaderComponent,
    SearchBarComponent,
    CinemaInfoComponent,
    RegisterComponent,
    RegisterConfirmComponent,
    BackButtonComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: true,
    }),
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
