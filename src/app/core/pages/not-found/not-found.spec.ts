import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Location } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { provideRouter } from '@angular/router';
import { NotFound } from './not-found';

describe('NotFound', () => {
  let component: NotFound;
  let fixture: ComponentFixture<NotFound>;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotFound, TranslateModule.forRoot()],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(NotFound);
    component = fixture.componentInstance;
    location = TestBed.inject(Location);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have goBack method', () => {
    expect(component.goBack).toBeDefined();
  });

  it('should call location.back() when history length > 1', () => {
    spyOn(location, 'back');
    spyOnProperty(window.history, 'length', 'get').and.returnValue(3);

    component.goBack();

    expect(location.back).toHaveBeenCalled();
  });
});
