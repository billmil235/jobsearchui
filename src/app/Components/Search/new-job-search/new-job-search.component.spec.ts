import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewJobSearchComponent } from './new-job-search.component';

describe('NewJobSearchComponent', () => {
  let component: NewJobSearchComponent;
  let fixture: ComponentFixture<NewJobSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewJobSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewJobSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
