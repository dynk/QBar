import { Injectable } from '@angular/core';

import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';


@Injectable()
export class UserData {
  name: String;
  id;
  avatar;
  actualPosition;
  actualDate;
  HAS_LOGGED_IN = 'hasLoggedIn';
  HAS_SEEN_TUTORIAL = 'hasSeenTutorial';

  constructor(public events: Events, public storage: Storage) {}

  login(username) {
    this.storage.set(this.HAS_LOGGED_IN, true);
    this.setUsername(username);
    this.events.publish('user:login');
  };

  signup(username) {
    this.storage.set(this.HAS_LOGGED_IN, true);
    this.setUsername(username);
    this.events.publish('user:signup');
  };

  logout() {
    this.storage.remove(this.HAS_LOGGED_IN);
    this.storage.remove('username');
    this.events.publish('user:logout');
  };

  setUsername(username) {
    this.storage.set('username', username);
  };

  setUserActualPosition(position) {
    this.storage.set('actualposition', position);
  };

  getUsername() {
    return this.storage.get('username').then((value) => {
      return value;
    });
  };

  getUserActualPosition() {
    return this.storage.get('actualposition').then((value) => {
      return value;
    });
  };

  // return a promise
  hasLoggedIn() {
    return this.storage.get(this.HAS_LOGGED_IN).then((value) => {
      return value === true;
    });
  };

  checkHasSeenTutorial() {
    return this.storage.get(this.HAS_SEEN_TUTORIAL).then((value) => {
      return value;
    })
  };
}
