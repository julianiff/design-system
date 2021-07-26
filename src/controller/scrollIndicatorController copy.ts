import {ReactiveController, ReactiveControllerHost} from 'lit';
import {fromEvent} from 'rxjs';
import {tap} from 'rxjs/operators';

export class ScrollIndicatorController implements ReactiveController {
  private host: ReactiveControllerHost;
  width?: number;

  constructor(host: ReactiveControllerHost) {
    this.host = host;
    host.addController(this);
  }

  hostConnected() {
    fromEvent(document, 'scroll')
      .pipe(tap({next: (_) => this.setScroll()}))
      .subscribe();
  }

  hostDisconnected() {}

  setScroll() {
    const doc = document.documentElement;
    const winScroll = doc.scrollTop;
    const height = doc.scrollHeight - doc.clientHeight;

    this.width = (winScroll / height) * 100;
    this.host.requestUpdate();
  }
}
