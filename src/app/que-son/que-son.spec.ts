import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueSon } from './que-son';

describe('QueSon', () => {
  let component: QueSon;
  let fixture: ComponentFixture<QueSon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QueSon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueSon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
