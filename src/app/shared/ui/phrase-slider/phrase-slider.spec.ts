import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhraseSlider } from './phrase-slider';
import { PhraseSliderModal } from '../../models/shared.models';

describe('PhraseSlider', () => {
  let component: PhraseSlider;
  let fixture: ComponentFixture<PhraseSlider>;

  const mockContent: PhraseSliderModal = {
    icon1: 'icon-home',
    icon2: 'icon-settings',
    title1: 'First Title',
    title2: 'Second Title',
    fillIcon: 'icon-star',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhraseSlider],
    }).compileComponents();

    fixture = TestBed.createComponent(PhraseSlider);
    component = fixture.componentInstance;

    fixture.componentRef.setInput('dependancy', true);
    fixture.componentRef.setInput('content', mockContent);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have dependancy input', () => {
    expect(component.dependancy()).toBe(true);
  });

  it('should have content input with correct properties', () => {
    const content = component.content();

    expect(content.icon1).toBe('icon-home');
    expect(content.icon2).toBe('icon-settings');
    expect(content.title1).toBe('First Title');
    expect(content.title2).toBe('Second Title');
    expect(content.fillIcon).toBe('icon-star');
  });

  it('should update when dependancy changes', () => {
    fixture.componentRef.setInput('dependancy', false);
    fixture.detectChanges();

    expect(component.dependancy()).toBe(false);
  });

  it('should handle content without optional fillIcon', () => {
    const contentWithoutFillIcon: PhraseSliderModal = {
      icon1: 'icon-user',
      icon2: 'icon-cart',
      title1: 'Title A',
      title2: 'Title B',
    };

    fixture.componentRef.setInput('content', contentWithoutFillIcon);
    fixture.detectChanges();

    const content = component.content();
    expect(content.fillIcon).toBeUndefined();
  });
});
