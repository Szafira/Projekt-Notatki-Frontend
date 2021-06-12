import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-editor',
  template: `
  
  
  
    <script src="https://cdn.tiny.cloud/1/mm3bfz08zx0oabulhh1lo1hy7yc3hmdlanbxoaxtgd1g7cpp/tinymce/5/tinymce.min.js" referrerpolicy="origin"></script>
  
  
  <section class="hero is-warning is-fullheight is-bold">
 
    <textarea>
      Welcome to TinyMCE!
    </textarea>
    <script>
      tinymce.init({
        selector: 'textarea',
        plugins: 'a11ychecker advcode casechange formatpainter linkchecker autolink lists checklist media mediaembed pageembed permanentpen powerpaste table advtable tinycomments tinymcespellchecker',
        toolbar: 'a11ycheck addcomment showcomments casechange checklist code formatpainter pageembed permanentpen table',
        toolbar_mode: 'floating',
        tinycomments_mode: 'embedded',
        tinycomments_author: 'Author name'
      });
    </script>
    </section>
    
  
  
  `
  ,
  styles: []
})
export class TextEditorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
