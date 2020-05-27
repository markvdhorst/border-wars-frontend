import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderstoneComponent } from './borderstone.component';

describe('BorderstoneComponent', () => {
  let component: BorderstoneComponent;
  let fixture: ComponentFixture<BorderstoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorderstoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorderstoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
