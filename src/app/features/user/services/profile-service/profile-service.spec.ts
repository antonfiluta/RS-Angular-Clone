import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from './profile-service';
import { User, GENDER, ROLE } from '../../../auth/models/auth.models';

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  const mockUser: User = {
    _id: '123',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    password: 'password123',
    role: ROLE.USER,
    aboutMe: 'Test bio',
    birthday: new Date('1990-01-01'),
    gender: GENDER.MALE,
    phone: '+1234567890',
    interests: ['travel'],
    myCountries: ['USA'],
    myLanguages: ['English'],
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService],
    });

    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should load user by id', () => {
    const userId = '123';

    service.loadUser(userId).subscribe((user) => {
      expect(user).toEqual(mockUser);
      expect(user._id).toBe(userId);
    });

    const req = httpMock.expectOne(`/user/${userId}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockUser);
  });

  it('should edit user', () => {
    service.editUser(mockUser).subscribe((response) => {
      expect(response).toEqual(mockUser);
    });

    const req = httpMock.expectOne(`/user/${mockUser._id}`);
    expect(req.request.method).toBe('PATCH');
    expect(req.request.body).toEqual(mockUser);
    req.flush(mockUser);
  });
});
