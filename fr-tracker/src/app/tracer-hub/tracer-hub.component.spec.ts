import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TracerHubComponent } from './tracer-hub.component';

describe('TracerHubComponent', () => {
  let component: TracerHubComponent;
  let fixture: ComponentFixture<TracerHubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TracerHubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TracerHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
