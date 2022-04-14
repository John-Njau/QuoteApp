import { Injectable } from '@angular/core';
import { quotes } from '../quotes-list'

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  getQuotes(){
    return quotes;
  }

  constructor() { }
}
