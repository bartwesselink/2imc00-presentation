import { Component, OnInit, ViewChild } from '@angular/core';
import { SlideComponent } from 'src/app/components/slide/slide.component';
import { AbstractSlide } from 'src/app/models/abstract-slide';

@Component({
  selector: 'app-concepts-components',
  templateUrl: './concepts-components.component.html',
  styleUrls: ['./concepts-components.component.scss']
})
export class ConceptsComponentsComponent extends AbstractSlide implements OnInit {
  max: number = 9;
  @ViewChild(SlideComponent) slide: SlideComponent;

  code = `robot PresentationRobot {
    _highlight6_ component Motor { }  _/highlight_
    _highlight7_ component Distance {
  behaviour {
      variable safety: Safety = unsafe

      initial state sensing {}
  }
}  _/highlight_

    _highlight8_ component Line {
  behaviour {
    variable has_line_left: boolean = false
    variable has_line_right: boolean = false

    transition if has_line_left and !has_line_right goto line_left
    transition if !has_line_left and has_line_right goto line_right
    transition if !has_line_left and !has_line_right goto no_lines
    transition if has_line_left and has_line_right goto both_lines

    initial state no_lines {}
    state line_left {}
    state line_right {}
    state both_lines {}
  }
}  _/highlight_
}`

  constructor() { super() }

  ngOnInit(): void {
  }

}
