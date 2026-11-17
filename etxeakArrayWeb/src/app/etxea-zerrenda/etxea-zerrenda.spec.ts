import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EtxeaZerrenda } from './etxea-zerrenda';

describe('EtxeaZerrenda', () => {
  let component: EtxeaZerrenda;
  let fixture: ComponentFixture<EtxeaZerrenda>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EtxeaZerrenda],
    }).compileComponents();

    fixture = TestBed.createComponent(EtxeaZerrenda);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
