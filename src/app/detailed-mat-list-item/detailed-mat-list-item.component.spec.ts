import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedMatListItemComponent } from './detailed-mat-list-item.component';

describe('DetailedMatListItemComponent', () => {
  let component: DetailedMatListItemComponent;
  let fixture: ComponentFixture<DetailedMatListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailedMatListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedMatListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
