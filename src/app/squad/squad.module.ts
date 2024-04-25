import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { SquadRoutingModule } from './squad-routing.module';
import { SquadCatalogComponent } from './squad-catalog/squad-catalog.component';

@NgModule({
  declarations: [SquadCatalogComponent],
  imports: [SharedModule, SquadRoutingModule],
  providers: [],
})
export class SquadModule { }
