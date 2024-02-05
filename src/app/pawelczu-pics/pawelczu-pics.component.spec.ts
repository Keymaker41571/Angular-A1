import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PawelczuPicsComponent } from './pawelczu-pics.component';

describe('PawelczuPicsComponent', () => {
  let component: PawelczuPicsComponent;
  let fixture: ComponentFixture<PawelczuPicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PawelczuPicsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PawelczuPicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
