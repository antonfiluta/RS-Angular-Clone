import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileRow } from './profile-row';

describe('ProfileRow', () => {
  let component: ProfileRow;
  let fixture: ComponentFixture<ProfileRow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileRow],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileRow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
