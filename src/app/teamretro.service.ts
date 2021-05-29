import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamretroService {

  // constructor() { }

   // constructor() {

    
  //  }

  serverURL:string
  constructor(private httpsvc:HttpClient) { 
    this.serverURL="http://localhost:3434/"

  }

   addRetroSectionBySectionId(sectionid:number,sectionname:string){
    
     var sectiondata="sectionid="+sectionid+ "&sectionname"+sectionname

     console.log(sectiondata)

     var httpOptions = { // add the header for request body format type
               headers: new HttpHeaders(
             {"Content-Type":"application/x-www-form-urlencoded"})
         }
         return this.httpsvc.post(this.serverURL+"retro/newsection",sectiondata,httpOptions)
   }



  //  getProjectsByEmpno(empno:number):Observable<Project[]>{
  //    return this.httpsvc.get<Project[]>(this.serverURL+"emp/list/"+empno)

    
  //  }

//    registernewRetro(description:Description):Observable<Description>{
//     //format= key=value&key=value
//  // var retrodata = "RetroDescription="+RetroDescription
//  var retrodata=""
  
//    console.log(retrodata)

//    var httpOptions = { // add the header for request body format type
//        headers: new HttpHeaders(
//           {"Content-Type":"application/x-www-form-urlencoded"})
//   }

//    registerEmployeeProject(empno:number,newProject:Project):Observable<Project>{
//      //format= key=value&key=value
//      var empdata = "empno="+empno+"&projectid="+newProject.projectid+
//            "&name="+newProject.name+"&location="+newProject.location
   
//       console.log(empdata)

//      var httpOptions = { // add the header for request body format type
//          headers: new HttpHeaders(
//           {"Content-Type":"application/x-www-form-urlencoded"})
//      }

//      return this.httpsvc.post<Project>(this.serverURL+"emp/register",empdata,httpOptions)

//  }

// deleteProjectByProjectId(empno:number,projectid:number):Observable<String>{
//   return this.httpsvc.get<String>(
//       this.serverURL+"emp/"+empno+"/project/delete/"+projectid)
// }
}
