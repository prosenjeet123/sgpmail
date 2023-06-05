import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardsUiComponent } from './cards-ui.component';

describe('CardsUiComponent', () => {
  let component: CardsUiComponent;
  let fixture: ComponentFixture<CardsUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardsUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardsUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
