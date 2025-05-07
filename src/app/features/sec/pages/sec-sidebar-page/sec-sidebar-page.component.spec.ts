import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecSidebarPageComponent } from './sec-sidebar-page.component';

describe('SecSidebarPageComponent', () => {
  let component: SecSidebarPageComponent;
  let fixture: ComponentFixture<SecSidebarPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecSidebarPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecSidebarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
