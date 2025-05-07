import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecProductGridPageComponent } from './sec-product-grid-page.component';

describe('SecProductGridPageComponent', () => {
  let component: SecProductGridPageComponent;
  let fixture: ComponentFixture<SecProductGridPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecProductGridPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecProductGridPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
