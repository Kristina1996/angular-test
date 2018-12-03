import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsTableComponent } from './settings-table.component';

describe('SettingsTableComponent', () => {
  let component: SettingsTableComponent;
  let fixture: ComponentFixture<SettingsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
