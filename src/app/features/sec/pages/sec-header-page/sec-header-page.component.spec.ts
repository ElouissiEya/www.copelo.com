import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecHeaderPageComponent } from './sec-header-page.component';

describe('SecHeaderPageComponent', () => {
  let component: SecHeaderPageComponent;
  let fixture: ComponentFixture<SecHeaderPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecHeaderPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecHeaderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
