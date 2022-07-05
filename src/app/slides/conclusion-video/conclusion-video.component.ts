import { Component, OnInit, ViewChild } from '@angular/core';
import { SlideComponent } from 'src/app/components/slide/slide.component';
import { AbstractSlide } from 'src/app/models/abstract-slide';

@Component({
  selector: 'app-conclusion-video',
  templateUrl: './conclusion-video.component.html',
  styleUrls: ['./conclusion-video.component.scss']
})
export class ConclusionVideoComponent extends AbstractSlide implements OnInit {
  max: number = 0;
  @ViewChild(SlideComponent) slide: SlideComponent;

  constructor() { super() }

  ngOnInit(): void {
  }

}
