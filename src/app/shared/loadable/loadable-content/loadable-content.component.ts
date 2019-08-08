import {Component, Input, OnInit} from '@angular/core';
import {Loadable} from '../../model/loadable.model';

@Component({
  selector: 'app-loadable-content',
  templateUrl: './loadable-content.component.html',
  styleUrls: ['./loadable-content.component.scss']
})
export class LoadableContentComponent implements OnInit {

  @Input() loadable: Loadable<any>;

  constructor() {
  }

  ngOnInit() {
  }

}
