import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GlobalVariable {
  public isLoading: Subject<boolean> = new BehaviorSubject<boolean>(false);

  setIsLoading(isLoading: boolean) {
    this.isLoading.next(isLoading);
  }
  public header: Subject<HeaderPage> = new BehaviorSubject<any>(null);

  setHeader(header: HeaderPage) {
    this.header.next(header);
  }
}

export interface HeaderPage {
  backIcon?: boolean;
  title?: string;
  buttonRight?: ButtonCustom;
  template?: any;
}

export interface ButtonCustom {
  type?: string;
  title?: string;
  url?: string;
}
