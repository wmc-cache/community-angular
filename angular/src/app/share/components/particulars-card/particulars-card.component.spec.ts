/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ParticularsCardComponent } from './particulars-card.component';

describe('ParticularsCardComponent', () => {
  let component: ParticularsCardComponent;
  let fixture: ComponentFixture<ParticularsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticularsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticularsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
