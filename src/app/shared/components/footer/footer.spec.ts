import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Footer } from './footer';

describe('Footer', () => {
  let component: Footer;
  let fixture: ComponentFixture<Footer>;
  let translateService: TranslateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footer, TranslateModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(Footer);
    component = fixture.componentInstance;
    translateService = TestBed.inject(TranslateService);

    spyOn(translateService, 'instant').and.returnValue('Mocked translation');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have current year', () => {
    expect(component.currentYear).toBe(new Date().getFullYear());
  });

  it('should have 3 authors', () => {
    expect(component.authors.length).toBe(3);
    expect(component.authors[0].name).toBe('Anton Filiuta');
  });

  it('should toggle GitHub list visibility', () => {
    expect(component.isGitHubListVisible).toBeFalsy();

    component.toggleGitHubList();
    expect(component.isGitHubListVisible).toBeTruthy();

    component.toggleGitHubList();
    expect(component.isGitHubListVisible).toBeFalsy();
  });

  it('should toggle on Enter key', () => {
    const event = new KeyboardEvent('keydown', { key: 'Enter' });
    spyOn(event, 'preventDefault');

    component.onKeydown(event);

    expect(event.preventDefault).toHaveBeenCalled();
    expect(component.isGitHubListVisible).toBeTruthy();
  });

  it('should toggle on Space key', () => {
    const event = new KeyboardEvent('keydown', { key: ' ' });
    spyOn(event, 'preventDefault');

    component.onKeydown(event);

    expect(event.preventDefault).toHaveBeenCalled();
    expect(component.isGitHubListVisible).toBeTruthy();
  });

  it('should close list on Escape key', () => {
    component.isGitHubListVisible = true;

    const event = new KeyboardEvent('keydown', { key: 'Escape' });
    spyOn(event, 'stopPropagation');

    component.onEscape(event);

    expect(component.isGitHubListVisible).toBeFalsy();
    expect(event.stopPropagation).toHaveBeenCalled();
  });

  it('should get correct tooltip text', () => {
    component.isGitHubListVisible = false;
    component.getTooltipText();
    expect(translateService.instant).toHaveBeenCalledWith('FOOTER.SHOW_AUTHORS');

    component.isGitHubListVisible = true;
    component.getTooltipText();
    expect(translateService.instant).toHaveBeenCalledWith('FOOTER.HIDE_AUTHORS');
  });

  it('should close list when clicking outside', () => {
    component.isGitHubListVisible = true;

    const mockElement = document.createElement('div');
    const event = new MouseEvent('click', { bubbles: true });
    Object.defineProperty(event, 'target', { value: mockElement });

    component.onDocumentClick(event);

    expect(component.isGitHubListVisible).toBeFalsy();
  });
});
