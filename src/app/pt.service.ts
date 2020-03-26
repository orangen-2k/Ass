import { Injectable } from '@angular/core';
import { datalophoc } from './thongtin';
import { datatruonghoc } from './thongtin';

@Injectable()
export class PtService {

  lophoc = datalophoc;
  truonghoc = datatruonghoc;
  constructor() { }

  getdatalh(){
    return this.lophoc
  }
  
  getdatath(){
    return this.truonghoc
  }
}