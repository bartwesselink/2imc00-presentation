import { Component, ContentChild, OnInit, ViewChild } from '@angular/core';
import { SlideComponent } from 'src/app/components/slide/slide.component';
import { AbstractSlide } from 'src/app/models/abstract-slide';
import { SlideItem } from 'src/app/models/slide-item';

@Component({
  selector: 'app-introduction-idea',
  templateUrl: './introduction-idea.component.html',
  styleUrls: ['./introduction-idea.component.scss']
})
export class IntroductionIdeaComponent extends AbstractSlide implements OnInit {
  max: number = 9;
  @ViewChild(SlideComponent) slide: SlideComponent;

  constructor() { super() }

  ngOnInit(): void {
  }

}
