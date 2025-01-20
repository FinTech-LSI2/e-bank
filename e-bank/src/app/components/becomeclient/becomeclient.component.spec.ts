import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeclientComponent } from './becomeclient.component';

describe('BecomeclientComponent', () => {
  let component: BecomeclientComponent;
  let fixture: ComponentFixture<BecomeclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BecomeclientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BecomeclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
