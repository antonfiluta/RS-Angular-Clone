import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LinkSaver } from './link-saver';

describe('LinkSaver', () => {
  let component: LinkSaver;
  let fixture: ComponentFixture<LinkSaver>;
  let clipboardSpy: jasmine.Spy;

  beforeEach(async () => {
    clipboardSpy = jasmine.createSpy('writeText').and.returnValue(Promise.resolve());

    Object.defineProperty(navigator, 'clipboard', {
      value: {
        writeText: clipboardSpy,
      },
      writable: true,
      configurable: true,
    });

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

  it('should set fullUrl on init', () => {
    expect(component['fullUrl']).toBe(window.location.href);
  });

  it('should copy link to clipboard', async () => {
    component['fullUrl'] = 'https://example.com';

    await component['copyLink']();

    expect(clipboardSpy).toHaveBeenCalledWith('https://example.com');
  });

  it('should set isLinkSaved to true after copying', async () => {
    expect(component['isLinkSaved']).toBeFalsy();

    await component['copyLink']();

    expect(component['isLinkSaved']).toBeTruthy();
  });

  it('should have shareButtonContent', () => {
    expect(component['shareButtonContent']).toBeDefined();
  });
});
