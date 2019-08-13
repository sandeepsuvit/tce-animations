import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlItemsComponent } from './pl-items.component';

describe('PlItemsComponent', () => {
  let component: PlItemsComponent;
  let fixture: ComponentFixture<PlItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
