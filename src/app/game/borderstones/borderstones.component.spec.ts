import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderstonesComponent } from './borderstones.component';

describe('BorderstonesComponent', () => {
  let component: BorderstonesComponent;
  let fixture: ComponentFixture<BorderstonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorderstonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorderstonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
