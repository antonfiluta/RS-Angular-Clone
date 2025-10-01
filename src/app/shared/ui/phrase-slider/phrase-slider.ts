import { Component, input } from '@angular/core';
import { PhraseSliderModal } from '../../models/shared.models';

@Component({
  selector: 'app-phrase-slider',
  imports: [],
  templateUrl: './phrase-slider.html',
  styleUrl: './phrase-slider.scss',
})
export class PhraseSlider {
  public readonly dependancy = input.required<boolean>();
  public readonly content = input.required<PhraseSliderModal>();
}
