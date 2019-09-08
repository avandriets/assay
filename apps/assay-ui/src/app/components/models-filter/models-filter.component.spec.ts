import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { ModelsFilterComponent } from './models-filter.component';

describe('ModelsFilterComponent', () => {
  let component: ModelsFilterComponent;
  let fixture: ComponentFixture<ModelsFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelsFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
