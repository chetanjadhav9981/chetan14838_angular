import { Component, OnInit } from '@angular/core';
import { Descr } from '../descr';
import { Section1 } from '../section1';
import { Section2 } from '../section2';
import { Section3 } from '../section3';

@Component({
  selector: 'app-teamretro',
  templateUrl: './teamretro.component.html',
  styleUrls: ['./teamretro.component.css']
})
export class TeamretroComponent implements OnInit {

  retroname:string
  isViewMode:Boolean
  sectionname1:string
  sectionname2:string
  sectionname3:string
  textarea:string
  textarea2:string
  textarea3:string
  section1:Section1[]
  section2:Section2[]
  section3:Section3[]
  descr:Descr[]

  constructor() {

  this.retroname="Daily-Retrospective"
  this.isViewMode=true
  this.sectionname1="What Went Well"
  this.sectionname2="What can be improved"
  this.sectionname3="Action Items"
  this.textarea=""
  this.textarea2=""
  this.textarea3=""
  this.section1=[
    {
      sectionid:101,
      sectionname:"What Went Well"
  }
  ]
  this.section2=[
    {
      sectionid:102,
      sectionname:"What can be improved"
  }
  ]
  this.section3=[
    {
      sectionid:103,
      sectionname:"Action Items"
  }
  ]
  this.descr=[
    {
     retroid:1,
     sectionid:101,
     descr:"did well today"
    }
  ]
   }
  


   toggleModeforEmpform():void{
    this.isViewMode=!this.isViewMode
    
    }


    textAreasList1:any = [];
    textAreasList2:any = [];
    textAreasList3:any = [];

    addTextarea1(){        
        this.textAreasList1.push('text_area'+ (this.textAreasList1.length + 1));
    }
    addTextarea2(){        
      this.textAreasList2.push('text_area'+ (this.textAreasList2.length + 1));
    }
    addTextarea3(){        
    this.textAreasList3.push('text_area'+ (this.textAreasList3.length + 1));
    }


      removeTextArea1(index: any){
          this.textAreasList1.splice(index, 1);
      }
      removeTextArea2(index: any){
        this.textAreasList2.splice(index, 1);
      }
      removeTextArea3(index: any){
      this.textAreasList3.splice(index, 1);
      }


  ngOnInit(): void {
  }

}
