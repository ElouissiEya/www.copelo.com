import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecFooterPageComponent } from './sec-footer-page.component';

describe('SecFooterPageComponent', () => {
  let component: SecFooterPageComponent;
  let fixture: ComponentFixture<SecFooterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecFooterPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecFooterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
