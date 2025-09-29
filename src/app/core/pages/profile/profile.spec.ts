import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { provideHttpClient } from '@angular/common/http';
import { provideMockStore } from '@ngrx/store/testing';
import { Profile } from './profile';
import { UserState } from '../../../features/user/store/user.state';

describe('Profile', () => {
  let component: Profile;
  let fixture: ComponentFixture<Profile>;

  const initialState: { user: UserState } = {
    user: {
      user: null,
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Profile, TranslateModule.forRoot()],
      providers: [provideHttpClient(), provideMockStore({ initialState })],
    }).compileComponents();

    fixture = TestBed.createComponent(Profile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
