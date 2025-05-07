import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecProductGridComponent } from './sec-product-grid.component';

describe('SecProductGridComponent', () => {
  let component: SecProductGridComponent;
  let fixture: ComponentFixture<SecProductGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecProductGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecProductGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
