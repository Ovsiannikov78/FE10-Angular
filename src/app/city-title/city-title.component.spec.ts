import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityTitleComponent } from './city-title.component';

describe('CityTitleComponent', () => {
  let component: CityTitleComponent;
  let fixture: ComponentFixture<CityTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
