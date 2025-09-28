import { Component } from '@angular/core';
import { CreateListing } from '../../../features/listing/components/create-listing/create-listing';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-listing',
  imports: [TranslateModule, CreateListing],
  templateUrl: './listing.html',
  styleUrl: './listing.scss',
})
export class Listing {}
