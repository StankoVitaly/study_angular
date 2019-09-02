import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {SearchComponent} from './components/search/search.component';
import {ListComponent} from './components/list/list.component';

import {UserService} from './services/user.service';
import {DateFormatPipe} from './pipes/date-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ListComponent,
    DateFormatPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
