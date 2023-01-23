import { Component , OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit{

  isDragover = false
file: File | null = null
nextStep =false
showAlert = false
alertMsg = "Please wait ! Your Account is Created "
alertColor = 'blue' 
inSubmission  =false

title = new FormControl('',[
Validators.required,
Validators.minLength(3)]
)
uploadForm = new FormGroup({
  title:this.title
})
constructor(){

  }
  ngOnInit(): void {

  }
  
  storeFile($event: Event){
    this.showAlert = true,
    this.alertMsg = "Please wait ! Your file is uploaded "
    this.alertColor = 'blue'
    this.isDragover = false
    this.file = ($event as DragEvent).dataTransfer?.files.item(0) ?? null
   if(!this.file || this.file.type !== 'video/mp4'){
return 
   }
   this.title.setValue(
    this.file.name.replace(/\.[^/.]+$/, '')
   )
   this.nextStep =true
  /* this.alertMsg = 'Your file is succesfully uploded'
   this.alertColor = 'blue'*/
  }
  uploadFile(){
    console.log('file uploadede')
  }
}
