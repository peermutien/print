import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrcodeDriverComponent } from './qrcode-driver.component';

describe('QrcodeDriverComponent', () => {
  let component: QrcodeDriverComponent;
  let fixture: ComponentFixture<QrcodeDriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QrcodeDriverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QrcodeDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
