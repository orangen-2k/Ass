export class Truonghoc {
  id: number;
  name: string;
  logo: string;
  address: string;
  president: string;
  province: string;
  constructor(id=0,name="",logo="",address="",president="",province=""){
  this.id=id;
  this.name=name;
  this.logo=logo;
  this.address=address;
  this.president=president;
  this.province=province;
  }
}