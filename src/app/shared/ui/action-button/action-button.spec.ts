import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { ActionButton } from './action-button';

@Component({
  template: `
    <app-action-button [type]="type" [isDisabled]="isDisabled" [content]="content" [icon]="icon" />
  `,
  imports: [ActionButton],
})
class TestWrapperComponent {
  type: 'primary' | 'secondary' = 'primary';
  isDisabled = false;
  content = 'Click me';
  icon = 'pi pi-check';
}

describe('ActionButton', () => {
  let wrapper: TestWrapperComponent;
  let fixture: ComponentFixture<TestWrapperComponent>;
  let component: ActionButton;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActionButton, TestWrapperComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestWrapperComponent);
    wrapper = fixture.componentInstance;

    const debugElement = fixture.debugElement.children[0];
    component = debugElement.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default primary type', () => {
    expect(component.type).toBe('primary');
  });

  it('should accept secondary type', () => {
    wrapper.type = 'secondary';
    fixture.detectChanges();

    expect(component.type).toBe('secondary');
  });

  it('should receive isDisabled input', () => {
    expect(component.isDisabled()).toBeFalsy();

    wrapper.isDisabled = true;
    fixture.detectChanges();

    expect(component.isDisabled()).toBeTruthy();
  });

  it('should receive content input', () => {
    expect(component.content()).toBe('Click me');
  });

  it('should receive icon input', () => {
    expect(component.icon()).toBe('pi pi-check');
  });
});
