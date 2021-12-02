import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'download-image';
  constructor(
    private http: HttpClient,
 ) {}

//  way 1
//  downloadImage(img:any) {
//   const imgUrl = img.src;
//   const imgName = imgUrl.substr(imgUrl.lastIndexOf('/') + 1);
//   this.http.get(imgUrl, {
//         responseType: 'blob'
//      })
//      .subscribe((res: any) => {
//         const file = new Blob([res], {
//            type: res.type
//         });

//         const blob = window.URL.createObjectURL(file);
//         const link = document.createElement('a');
//         link.href = blob;
//         link.download = imgName;

//         // Version link.click() to work at firefox
//         link.dispatchEvent(new MouseEvent('click', {
//            bubbles: true,
//            cancelable: true,
//            view: window
//         }));

//         setTimeout(() => { // firefox
//            window.URL.revokeObjectURL(blob);
//            link.remove();
//         }, 100);
//      });
// }

// way 2
async downloadImage() {
  debugger;
  let imageSrc ='https://i.imgur.com/sduLRvf.jpg'
  const image = await fetch(imageSrc)
  const imageBlog = await image.blob()
  const imageURL = URL.createObjectURL(imageBlog)

  const link = document.createElement('a')
  link.href = imageURL
  link.download = 'test'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
}
