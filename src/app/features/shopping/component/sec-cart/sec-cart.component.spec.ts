import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecCartComponent } from './sec-cart.component';

describe('SecCartComponent', () => {
  let component: SecCartComponent;
  let fixture: ComponentFixture<SecCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecCartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
