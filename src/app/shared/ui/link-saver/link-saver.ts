import { Component, OnInit } from '@angular/core';
import { PhraseSlider } from '../phrase-slider/phrase-slider';
import { shareButtonContent } from '../../../features/specific-offer/utils/content';

@Component({
  selector: 'app-link-saver',
  imports: [PhraseSlider],
  templateUrl: './link-saver.html',
  styleUrl: './link-saver.scss',
})
export class LinkSaver implements OnInit {
  protected isLinkSaved = false;
  protected shareButtonContent = shareButtonContent;
  protected fullUrl = '';

  protected copyLink() {
    navigator.clipboard.writeText(this.fullUrl);
    this.isLinkSaved = true;
  }

  public ngOnInit() {
    this.fullUrl = window.location.href;
  }
}
