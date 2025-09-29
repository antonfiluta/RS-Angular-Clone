import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { provideHttpClient } from '@angular/common/http';
import { provideMockStore } from '@ngrx/store/testing';
import { PersonalInfo } from './personal-info';
import { UserState } from '../../../features/user/store/user.state';

describe('PersonalInfo', () => {
  let component: PersonalInfo;
  let fixture: ComponentFixture<PersonalInfo>;

  const initialState: { user: UserState } = {
    user: {
      user: null,
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalInfo, TranslateModule.forRoot()],
      providers: [provideHttpClient(), provideMockStore({ initialState })],
    }).compileComponents();

    fixture = TestBed.createComponent(PersonalInfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
