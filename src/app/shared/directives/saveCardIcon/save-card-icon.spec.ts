import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { AppSaveCardIconDirective } from './save-card-icon';

@Component({
  template: `<i [appSaveCardIcon]="isLiked"></i>`,
  imports: [AppSaveCardIconDirective],
})
class TestComponent {
  isLiked = false;
}

describe('AppSaveCardIconDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;
  let iconElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestComponent, AppSaveCardIconDirective],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    iconElement = fixture.debugElement.query(By.css('i'));
    fixture.detectChanges();
  });

  it('should create', () => {
    const directive = iconElement.injector.get(AppSaveCardIconDirective);
    expect(directive).toBeTruthy();
  });

  it('should show empty heart icon when not liked', () => {
    component.isLiked = false;
    fixture.detectChanges();

    const icon = iconElement.nativeElement;
    expect(icon.classList.contains('pi-heart')).toBeTruthy();
    expect(icon.classList.contains('pi-heart-fill')).toBeFalsy();
    expect(icon.style.color).toBe('white');
  });

  it('should show filled heart icon when liked', () => {
    component.isLiked = true;
    fixture.detectChanges();

    const icon = iconElement.nativeElement;
    expect(icon.classList.contains('pi-heart-fill')).toBeTruthy();
    expect(icon.classList.contains('pi-heart')).toBeFalsy();
    expect(icon.style.color).toBe('red');
  });

  it('should update icon when isLiked changes', () => {
    component.isLiked = false;
    fixture.detectChanges();

    const icon = iconElement.nativeElement;
    expect(icon.classList.contains('pi-heart')).toBeTruthy();

    component.isLiked = true;
    fixture.detectChanges();

    expect(icon.classList.contains('pi-heart-fill')).toBeTruthy();
    expect(icon.classList.contains('pi-heart')).toBeFalsy();
  });

  it('should initialize icon on init', () => {
    const icon = iconElement.nativeElement;
    expect(icon.classList.contains('pi-heart')).toBeTruthy();
    expect(icon.style.color).toBe('white');
  });
});
