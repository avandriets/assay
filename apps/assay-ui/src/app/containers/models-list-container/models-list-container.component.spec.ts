import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { ModelsListContainerComponent } from './models-list-container.component';

describe('ModelsListContainerComponent', () => {
  let component: ModelsListContainerComponent;
  let fixture: ComponentFixture<ModelsListContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModelsListContainerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelsListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
