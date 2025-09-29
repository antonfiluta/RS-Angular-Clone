import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { EditButton } from './edit-button';

// Wrapper component to test inputs
@Component({
  template: `
    <app-edit-button
      [isEditMode]="isEditMode"
      [isFormValid]="isFormValid"
      (edit)="onEdit()"
      (cancelEdit)="onCancel()"
      (saveEdit)="onSave()"
    />
  `,
  imports: [EditButton],
})
class TestWrapperComponent {
  isEditMode = false;
  isFormValid = true;
  editCalled = false;
  cancelCalled = false;
  saveCalled = false;

  onEdit() {
    this.editCalled = true;
  }
  onCancel() {
    this.cancelCalled = true;
  }
  onSave() {
    this.saveCalled = true;
  }
}

describe('EditButton', () => {
  let wrapper: TestWrapperComponent;
  let fixture: ComponentFixture<TestWrapperComponent>;
  let component: EditButton;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditButton, TestWrapperComponent],
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

  it('should emit edit event when startEdit is called', () => {
    component.startEdit();
    fixture.detectChanges();

    expect(wrapper.editCalled).toBeTruthy();
  });

  it('should emit cancelEdit event when cancel is called', () => {
    component.cancel();
    fixture.detectChanges();

    expect(wrapper.cancelCalled).toBeTruthy();
  });

  it('should emit saveEdit event when form is valid', () => {
    wrapper.isFormValid = true;
    fixture.detectChanges();

    component.save();
    fixture.detectChanges();

    expect(wrapper.saveCalled).toBeTruthy();
  });

  it('should not emit saveEdit event when form is invalid', () => {
    wrapper.isFormValid = false;
    fixture.detectChanges();

    component.save();
    fixture.detectChanges();

    expect(wrapper.saveCalled).toBeFalsy();
  });

  it('should receive isEditMode input', () => {
    wrapper.isEditMode = true;
    fixture.detectChanges();

    expect(component.isEditMode()).toBeTruthy();
  });

  it('should receive isFormValid input', () => {
    wrapper.isFormValid = false;
    fixture.detectChanges();

    expect(component.isFormValid()).toBeFalsy();
  });
});
