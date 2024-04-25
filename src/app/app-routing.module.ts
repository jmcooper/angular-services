import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from '@shared/cart/cart.component';
import { CatalogComponent } from '@catalog/catalog.component';
import { SearchComponent } from '@catalog/search/search.component';

const routes: Routes = [
  { path: 'catalog', component: CatalogComponent, title: "Catalog - Joe's Robot Shop" },
  { path: 'search', component: SearchComponent, title: "Search - Joe's Robot Shop" },
  { path: 'cart', component: CartComponent, title: "Cart - Joe's Robot Shop" },
  { path: 'squad', loadChildren: () => import('./squad/squad.module').then(m => m.SquadModule) },
  { path: '', redirectTo: '/catalog', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
