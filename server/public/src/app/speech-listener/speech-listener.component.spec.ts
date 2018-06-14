import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeechListenerComponent } from './speech-listener.component';

describe('SpeechListenerComponent', () => {
  let component: SpeechListenerComponent;
  let fixture: ComponentFixture<SpeechListenerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeechListenerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeechListenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
