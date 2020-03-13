import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicinesInfoComponent } from './medicines-info.component';

describe('MedicinesInfoComponent', () => {
  let component: MedicinesInfoComponent;
  let fixture: ComponentFixture<MedicinesInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicinesInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicinesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
