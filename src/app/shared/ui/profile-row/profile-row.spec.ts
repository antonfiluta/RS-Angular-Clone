import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { ProfileRow, SelectOption } from './profile-row';

describe('ProfileRow', () => {
  let component: ProfileRow;
  let fixture: ComponentFixture<ProfileRow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileRow, TranslateModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileRow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default values', () => {
    expect(component.title).toBe('');
    expect(component.placeholder).toBe('');
    expect(component.addButtonText).toBe('PROFILE.ADD_ITEM');
    expect(component.emptyMessage).toBe('PROFILE.NO_ITEMS');
    expect(component.isEditMode).toBe(false);
    expect(component.maxItems).toBe(10);
    expect(component.iconClass).toBe('pi pi-tag');
    expect(component.options).toEqual([]);
  });

  it('should add item to formArray', () => {
    expect(component.formArray.length).toBe(0);

    component.addItem();

    expect(component.formArray.length).toBe(1);
  });

  it('should not add item if maxItems reached', () => {
    component.maxItems = 2;

    component.addItem();
    component.addItem();
    component.addItem(); // Sollte nicht hinzugefügt werden

    expect(component.formArray.length).toBe(2);
  });

  it('should remove item from formArray', () => {
    component.addItem();
    component.addItem();
    expect(component.formArray.length).toBe(2);

    component.removeItem(0);

    expect(component.formArray.length).toBe(1);
  });

  it('should write value to formArray', () => {
    const testValues = ['Value 1', 'Value 2', 'Value 3'];

    component.writeValue(testValues);

    expect(component.formArray.length).toBe(3);
    expect(component.displayItems).toEqual(testValues);
    expect(component.formArray.value).toEqual(testValues);
  });

  it('should handle empty writeValue', () => {
    component.writeValue([]);

    expect(component.formArray.length).toBe(0);
    expect(component.displayItems).toEqual([]);
  });

  it('should register onChange callback', () => {
    const mockOnChange = jasmine.createSpy('onChange');

    component.registerOnChange(mockOnChange);
    component.addItem();
    component.formArray.at(0).setValue('Test');

    expect(mockOnChange).toHaveBeenCalled();
  });

  it('should register onTouched callback', () => {
    const mockOnTouched = jasmine.createSpy('onTouched');

    component.registerOnTouched(mockOnTouched);

    expect(mockOnTouched).not.toHaveBeenCalled();
  });

  it('should disable formArray when setDisabledState is called', () => {
    component.addItem();

    component.setDisabledState(true);

    expect(component.formArray.disabled).toBe(true);
  });

  it('should enable formArray when setDisabledState is called with false', () => {
    component.addItem();
    component.setDisabledState(true);

    component.setDisabledState(false);

    expect(component.formArray.enabled).toBe(true);
  });

  it('should get option label from options array', () => {
    const testOptions: SelectOption[] = [
      { value: 'opt1', label: 'Option 1' },
      { value: 'opt2', label: 'Option 2' },
    ];
    component.options = testOptions;

    const label = component.getOptionLabel('opt1');

    expect(label).toBe('Option 1');
  });

  it('should return value if option not found', () => {
    component.options = [];

    const label = component.getOptionLabel('unknown');

    expect(label).toBe('unknown');
  });

  it('should filter out empty values when updating', () => {
    const mockOnChange = jasmine.createSpy('onChange');
    component.registerOnChange(mockOnChange);

    component.addItem();
    component.addItem();
    component.formArray.at(0).setValue('Valid');
    component.formArray.at(1).setValue('  '); // Nur Leerzeichen

    expect(component.displayItems.length).toBe(1);
    expect(component.displayItems[0]).toBe('Valid');
  });
});
