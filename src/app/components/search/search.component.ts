import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../models/user';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() onSearchData = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {

  }

  onSearch(value) {
    this.onSearchData.emit(value);
  }

}
