import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillonComponent } from './villon.component';

describe('VillonComponent', () => {
  let component: VillonComponent;
  let fixture: ComponentFixture<VillonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VillonComponent]
    });
    fixture = TestBed.createComponent(VillonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
