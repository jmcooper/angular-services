import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { CatalogComponent } from './catalog.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  imports: [SharedModule],
  declarations: [CatalogComponent, SearchComponent],
  exports: []
})
export class CatalogModule { }
