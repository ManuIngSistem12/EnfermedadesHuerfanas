import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Conciencia } from './conciencia';

describe('Conciencia', () => {
  let component: Conciencia;
  let fixture: ComponentFixture<Conciencia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Conciencia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Conciencia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
