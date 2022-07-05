import { Component, OnInit, ViewChild } from '@angular/core';
import { SlideComponent } from 'src/app/components/slide/slide.component';
import { AbstractSlide } from 'src/app/models/abstract-slide';

@Component({
  selector: 'app-overview-generation',
  templateUrl: './overview-generation.component.html',
  styleUrls: ['./overview-generation.component.scss']
})
export class OverviewGenerationComponent extends AbstractSlide implements OnInit {
  max: number = 8;
  @ViewChild(SlideComponent) slide: SlideComponent;

  constructor() { super() }

  ngOnInit(): void {
  }

}
