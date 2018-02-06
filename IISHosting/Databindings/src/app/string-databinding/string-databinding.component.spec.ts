import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StringDatabindingComponent } from './string-databinding.component';

describe('StringDatabindingComponent', () => {
  let component: StringDatabindingComponent;
  let fixture: ComponentFixture<StringDatabindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StringDatabindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StringDatabindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
