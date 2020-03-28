/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TabMyComponent } from './tab-my.component';

describe('TabMyComponent', () => {
  let component: TabMyComponent;
  let fixture: ComponentFixture<TabMyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabMyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabMyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
