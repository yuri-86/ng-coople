import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LoadableContentComponent} from './loadable-content.component';

describe('LoadableContentComponent', () => {
  let component: LoadableContentComponent;
  let fixture: ComponentFixture<LoadableContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoadableContentComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadableContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
