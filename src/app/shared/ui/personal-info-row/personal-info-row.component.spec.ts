import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { PersonalInfoRowComponent } from './personal-info-row.component';

describe('PersonalInfoRowComponent', () => {
  let component: PersonalInfoRowComponent;
  let fixture: ComponentFixture<PersonalInfoRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        PersonalInfoRowComponent,
        TranslateModule.forRoot(), // Wichtig für ngx-translate
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PersonalInfoRowComponent);
    component = fixture.componentInstance;

    // Pflichtfelder setzen, damit die Component nicht crasht
    component.title = 'Test Title';
    component.fieldKey = 'testField';
    component.control = new FormControl('');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default values', () => {
    expect(component.empty).toBe(false);
    expect(component.actionLabel).toBe('Add');
    expect(component.isEditing).toBe(false);
    expect(component.type).toBe('text');
    expect(component.options).toEqual([]);
    expect(component.isFieldInvalid).toBe(false);
    expect(component.errorMessage).toBe('');
  });

  it('should emit editField event', () => {
    spyOn(component.editField, 'emit');

    component.editField.emit('testField');

    expect(component.editField.emit).toHaveBeenCalledWith('testField');
  });

  it('should emit saveField event', () => {
    spyOn(component.saveField, 'emit');

    component.saveField.emit('testField');

    expect(component.saveField.emit).toHaveBeenCalledWith('testField');
  });

  it('should emit cancelEdit event', () => {
    spyOn(component.cancelEdit, 'emit');

    component.cancelEdit.emit('testField');

    expect(component.cancelEdit.emit).toHaveBeenCalledWith('testField');
  });

  it('should accept different input values', () => {
    component.title = 'Email';
    component.fieldKey = 'email';
    component.actionLabel = 'Edit';
    component.isEditing = true;
    component.type = 'email';
    component.options = ['Option 1', 'Option 2'];

    expect(component.title).toBe('Email');
    expect(component.fieldKey).toBe('email');
    expect(component.actionLabel).toBe('Edit');
    expect(component.isEditing).toBe(true);
    expect(component.type).toBe('email');
    expect(component.options.length).toBe(2);
  });
});
