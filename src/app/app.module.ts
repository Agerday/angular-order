import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ItemsComponent} from './items/items.component';
import {ItemSearchComponent} from './item-search/item-search.component';
import {ItemDetailComponent} from './item-detail/item-detail.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HomepageComponent } from './homepage/homepage.component';
import {FilterPipe} from './filter.pipe';
import { AddItemComponent } from './add-item/add-item.component';
import {RouterModule} from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { WorkInProgressComponent } from './work-in-progress/work-in-progress.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    ItemSearchComponent,
    ItemDetailComponent,
    HomepageComponent,
    FilterPipe,
    AddItemComponent,
    CustomersComponent,
    WorkInProgressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
