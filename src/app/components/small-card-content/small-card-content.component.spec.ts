import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallCardContentComponent } from './small-card-content.component';

describe('SmallCardContentComponent', () => {
  let component: SmallCardContentComponent;
  let fixture: ComponentFixture<SmallCardContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallCardContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallCardContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
