import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ItemsComponent} from './items/items.component';
import {ItemDetailComponent} from './item-detail/item-detail.component';
import {HomepageComponent} from './homepage/homepage.component';
import {AddItemComponent} from './add-item/add-item.component';
import {CustomersComponent} from './customers/customers.component';
import {WorkInProgressComponent} from './work-in-progress/work-in-progress.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'items', component: ItemsComponent },
  { path: 'detail/:id', component: ItemDetailComponent },
  { path: 'create', component: AddItemComponent},
  { path: 'customers', component: CustomersComponent},
  { path: 'RIP', component: WorkInProgressComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
