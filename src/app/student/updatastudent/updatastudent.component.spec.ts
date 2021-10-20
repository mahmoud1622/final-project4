import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatastudentComponent } from './updatastudent.component';

describe('UpdatastudentComponent', () => {
  let component: UpdatastudentComponent;
  let fixture: ComponentFixture<UpdatastudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatastudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatastudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
