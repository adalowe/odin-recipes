function loadHtml(id, filename) {
    console.log(`div id: ${id}, filename: ${filename}`);

let xhttp;
let element = document.getElementById(id);
let file = filename;

if ( file ){
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4){
            if(this.status == 200) {element.innerHTML = this.responseText;}
            if(this.status == 404) {element.innerHTML = "<h1>Page not found.</h1>";}
        };
    };
    /*buraya kdr: what to do when we request data*/ 

    xhttp.open("GET", 'recipes/${file}', true); /*initialize request*/
  xhttp.send(); /**send request */
  return;
} 
}

