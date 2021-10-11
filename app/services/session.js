import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class SessionService extends Service {
  @tracked filepathservice;

  getFilePath() {
    return this.filepathservice;
  }

  setFilePath(filepath) {
    this.filepathservice = filepath;
  }
}
