import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/internal/Observable';

@Injectable({
    providedIn: 'root'
  })
export class SpeechClassification {

    constructor(private http: HttpClient) { }

    GetClassification:(toPredict: string) => Observable<string> = (toPredict) => this.http.get<string>(`/classifier/${toPredict}`);
}