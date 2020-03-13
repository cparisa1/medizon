import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMedicinesComponent } from './my-medicines.component';

describe('MyMedicinesComponent', () => {
  let component: MyMedicinesComponent;
  let fixture: ComponentFixture<MyMedicinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyMedicinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMedicinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
