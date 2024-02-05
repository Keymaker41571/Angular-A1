import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PawelczuAboutComponent } from './pawelczu-about.component';

describe('PawelczuAboutComponent', () => {
  let component: PawelczuAboutComponent;
  let fixture: ComponentFixture<PawelczuAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PawelczuAboutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PawelczuAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
