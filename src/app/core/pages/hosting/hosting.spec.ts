import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hosting } from './hosting';

describe('Hosting', () => {
  let component: Hosting;
  let fixture: ComponentFixture<Hosting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hosting]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hosting);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
