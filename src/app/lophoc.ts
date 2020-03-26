export class Lophoc {
  id:number;
  name:string;
  room_number:string;
  total_student:string;
  schoolId:number;
  main_teacher:string;
  constructor(id=0,name="",room_number="",total_student="",schoolId=1,main_teacher=""){
    this.id=id;
    this.name=name;
    this.room_number=room_number;
    this.total_student=total_student;
    this.schoolId=schoolId;
    this.main_teacher=main_teacher;
  }
}