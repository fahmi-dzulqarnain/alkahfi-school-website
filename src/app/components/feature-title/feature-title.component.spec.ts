import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureTitleComponent } from './feature-title.component';

describe('FeatureTitleComponent', () => {
  let component: FeatureTitleComponent;
  let fixture: ComponentFixture<FeatureTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureTitleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeatureTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
