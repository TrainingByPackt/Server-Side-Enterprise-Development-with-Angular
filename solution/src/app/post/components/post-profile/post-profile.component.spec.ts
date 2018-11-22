import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostProfileComponent } from './post-profile.component';

describe('PostProfileComponent', () => {
  let component: PostProfileComponent;
  let fixture: ComponentFixture<PostProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
