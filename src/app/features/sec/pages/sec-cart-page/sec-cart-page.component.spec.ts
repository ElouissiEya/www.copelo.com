import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecCartPageComponent } from './sec-cart-page.component';

describe('SecCartPageComponent', () => {
  let component: SecCartPageComponent;
  let fixture: ComponentFixture<SecCartPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecCartPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecCartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
