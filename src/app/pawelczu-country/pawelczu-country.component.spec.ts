import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PawelczuCountryComponent } from './pawelczu-country.component';

describe('PawelczuCountryComponent', () => {
  let component: PawelczuCountryComponent;
  let fixture: ComponentFixture<PawelczuCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PawelczuCountryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PawelczuCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
