import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkSaver } from './link-saver';

describe('LinkSaver', () => {
  let component: LinkSaver;
  let fixture: ComponentFixture<LinkSaver>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkSaver],
    }).compileComponents();

    fixture = TestBed.createComponent(LinkSaver);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
