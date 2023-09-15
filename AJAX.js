function loadData(){
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            // document.getElementById("header").innerHTML = this.responseText
            console.log(this.responseText);
        }

    }

    xhttp.open('GET','https://jsonplaceholder.typicode.com/posts',false);
    xhttp.send();

}