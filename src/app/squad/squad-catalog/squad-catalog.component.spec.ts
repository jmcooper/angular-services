import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquadCatalogComponent } from './squad-catalog.component';

describe('SquadCatalogComponent', () => {
  let component: SquadCatalogComponent;
  let fixture: ComponentFixture<SquadCatalogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SquadCatalogComponent]
    });
    fixture = TestBed.createComponent(SquadCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
