import { Component, OnInit, ViewChild } from '@angular/core';
import { SlideComponent } from 'src/app/components/slide/slide.component';
import { AbstractSlide } from 'src/app/models/abstract-slide';

@Component({
  selector: 'app-concepts-communication',
  templateUrl: './concepts-communication.component.html',
  styleUrls: ['./concepts-communication.component.scss']
})
export class ConceptsCommunicationComponent extends AbstractSlide implements OnInit {
  max: number = 11;
  @ViewChild(SlideComponent) slide: SlideComponent;

  code = `robot PresentationRobot {
    ...

    component Motor {
        _highlight6_ incoming message forward with type: Twist links geometry
incoming message stop with type: Twist links geometry _/highlight_
    }

    component Distance {
        _highlight7_ outgoing message distance with type: Safety _/highlight_

        behaviour {
            ...

            initial state sensing {
                _highlight8_ on response from distance do safety := value _/highlight_
            }
        }
    }

    component Line {
        _highlight9_ outgoing message line_left with type: boolean
outgoing message line_right with type: boolean _/highlight_

        behaviour {
            _highlight10_ on response from line_left do has_line_left := value
on response from line_right do has_line_right := value _/highlight_

            ...
        }
    }

    ...
}`

  constructor() { super() }

  ngOnInit(): void {
  }

}
