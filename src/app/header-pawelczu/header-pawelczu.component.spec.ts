import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPawelczuComponent } from './header-pawelczu.component';

describe('HeaderPawelczuComponent', () => {
  let component: HeaderPawelczuComponent;
  let fixture: ComponentFixture<HeaderPawelczuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderPawelczuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderPawelczuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
