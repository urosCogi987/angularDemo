import { Injectable } from '@angular/core';
import { IScrollElement } from '../models/scroll-element';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  private _elements: IScrollElement[] = [
    {
      id: 'test',
      text: 'description1',
    },
    {
      id: 'test',
      text: 'description2',
    },
    {
      id: 'test',
      text: 'description3',
    },
    {
      id: 'test',
      text: 'description4',
    },
    {
      id: 'test',
      text: 'description5',
    },
    {
      id: 'test',
      text: 'description6',
    },
    {
      id: 'test',
      text: 'description7',
    },
    {
      id: 'test',
      text: 'description8',
    },
    {
      id: 'test',
      text: 'description9',
    },
    {
      id: 'test',
      text: 'description10',
    },
    {
      id: 'test',
      text: 'description11',
    },
    {
      id: 'test',
      text: 'description12',
    },
    {
      id: 'test',
      text: 'description13',
    },
    {
      id: 'test',
      text: 'description14',
    },
    {
      id: 'test',
      text: 'description15',
    },
    {
      id: 'test',
      text: 'description16',
    },
    {
      id: 'test',
      text: 'description17',
    },
    {
      id: 'test',
      text: 'description18',
    },
    {
      id: 'test',
      text: 'description19',
    },
    {
      id: 'test',
      text: 'description20',
    },
    {
      id: 'test',
      text: 'description21',
    },
    {
      id: 'test',
      text: 'description22',
    },
    {
      id: 'test',
      text: 'description23',
    },
    {
      id: 'test',
      text: 'description24',
    },
    {
      id: 'test',
      text: 'description25',
    },
    {
      id: 'test',
      text: 'description26',
    },
    {
      id: 'test',
      text: 'description27',
    },
    {
      id: 'test',
      text: 'description28',
    },
    {
      id: 'test',
      text: 'description29',
    },
    {
      id: 'test',
      text: 'description30',
    },
  ];

  getAllElements(): IScrollElement[] {
    return this._elements;
  }
}
