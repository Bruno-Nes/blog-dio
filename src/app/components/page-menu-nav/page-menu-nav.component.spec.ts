import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMenuNavComponent } from './page-menu-nav.component';

describe('PageMenuNavComponent', () => {
  let component: PageMenuNavComponent;
  let fixture: ComponentFixture<PageMenuNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageMenuNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageMenuNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
