import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhraseSlider } from './phrase-slider';

describe('PhraseSlider', () => {
  let component: PhraseSlider;
  let fixture: ComponentFixture<PhraseSlider>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhraseSlider],
    }).compileComponents();

    fixture = TestBed.createComponent(PhraseSlider);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
