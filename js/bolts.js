var xhttp = new XMLHttpRequest();
xhttp.open("GET", "/texts/build/bolts.html", true);
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("md_insert_data").innerHTML = this.responseText;
      console.log(this.responseText);
    } else {
        console.log('Unknown status code: ', this.status);
    }
  };
  
  xhttp.send();