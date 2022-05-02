import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  mensaje: string = "SIN LOGEAR";

  constructor() { }
}
