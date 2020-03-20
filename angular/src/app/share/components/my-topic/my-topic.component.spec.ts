/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyTopicComponent } from './my-topic.component';

describe('MyTopicComponent', () => {
  let component: MyTopicComponent;
  let fixture: ComponentFixture<MyTopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
