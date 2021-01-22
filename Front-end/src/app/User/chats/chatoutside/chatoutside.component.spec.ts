import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatoutsideComponent } from './chatoutside.component';

describe('ChatoutsideComponent', () => {
  let component: ChatoutsideComponent;
  let fixture: ComponentFixture<ChatoutsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatoutsideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatoutsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
