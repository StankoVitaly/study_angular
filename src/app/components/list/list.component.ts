import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../models/user';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() item;
  @Input() followers;
  @Input() repositories;
  @Output() onShowFollowers = new EventEmitter<string>();
  @Output() onShowRepos = new EventEmitter<string>();

  selectedUserName = '';
  // isLoaded = false;

  constructor() {
  }

  ngOnInit() {

  }

  readMore(user: User) {
    this.selectedUserName = user.login;
    this.onShowFollowers.emit(user.login);
    this.onShowRepos.emit(user.login);
  }

}
