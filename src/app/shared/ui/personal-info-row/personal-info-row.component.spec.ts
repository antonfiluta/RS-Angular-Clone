import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalInfoRowComponent } from './personal-info-row.component';

describe('PersonalInfoRowComponent', () => {
  let component: PersonalInfoRowComponent;
  let fixture: ComponentFixture<PersonalInfoRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalInfoRowComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PersonalInfoRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
