import { Component,HostListener } from "@angular/core";
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
selector:'files-component',
templateUrl:'./files.component.html',
styleUrls:['./files.component.css']

})
export class FilesComponent{

files :any[]=[
{
"image":"/assets/Files/image.png","name":"photo.png","size":"222KB"
},
{
    "image":"/assets/Files/pdf.png","name":"book.pdf","size":"3MB"
},
{
    "image":"/assets/Files/folder.png","name":"SomeFolder","size":"7MB"
},
{
    "image":"/assets/Files/video.png","name":"MyMovie.mp4","size":"1GB"
},
{
    "image":"/assets/Files/headphone.png","name":"adelle.mp3","size":"2MB"
},
{
    "image":"/assets/Files/image.png","name":"oldImage.png","size":"522KB"
    },
    {
        "image":"/assets/Files/pdf.png","name":"document.png","size":"52MB"
        }
        ,
    {
        "image":"/assets/Files/folder.png","name":"Private","size":"10MB"
        },
        {
            "image":"/assets/Files/file.png","name":"notes.txt","size":"50KB"
            },
        {
            "image":"/assets/Files/video.png","name":"Film.mp4","size":"1.5GB"
            }
];

}