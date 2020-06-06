import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { from, fromEvent, Observable, of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators'

const API_KEY = 'acae57c6-add1-41a2-8be7-673465ecfda7';
const API_URL = `https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=${API_KEY}`;

const DEFAULT_CONFIG: IConfig = {
  apiKey: API_KEY,
  lang: 'en_RU',
};

declare const ymaps: any;

export interface IConfig {
  apiKey: string;
  lang: 'ru_RU' | 'en_US' | 'en_RU' | 'ru_UA' | 'uk_UA' | 'tr_TR';
  coordorder?: 'latlong' | 'longlat';
  load?: string;
  mode?: 'release' | 'debug';
}

export interface ILoadEvent {
  instance?: any;
  ymaps: any;
}

export interface IEvent {
  instance: any;
  ymaps: any;
  type: string | undefined;
  event: any;
}

@Injectable({
  providedIn: 'root'
})
export class MapsYandexService {

  private _scriptYmaps: HTMLScriptElement;

  // <script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=<ваш API-ключ>" type="text/javascript"></script>

  constructor(
    @Inject(DOCUMENT) private document: Document) {
  }

  initScript(): Observable<any> {
    if (!this._scriptYmaps) {
      /*const ymapScript = this.document.createElement('script');
      const params = this._getQueryParams(this._config);

      ymapScript.src = `https://api-maps.yandex.ru/2.1/?${params}`;
      this._scriptYmaps = this.document.body.appendChild(ymapScript);*/
      this._scriptYmaps = this.loadScript();
    }

    if ('ymaps' in window) {
      return from(ymaps.ready()).pipe(
        map(() => ymaps)
      );
    }

    return fromEvent(this._scriptYmaps, 'load').pipe(
      switchMap(() => from(ymaps.ready()).pipe(
        map(() => ymaps))
      )
    );
  }

  loadScript() {
    console.log('Loading Yandex Map API..');
    let node = document.createElement('script');
    node.async = true;
    node.src = API_URL;
    node.type = 'text/javascript';
    return this.document.getElementsByTagName('head')[0].appendChild(node);
  }
}
