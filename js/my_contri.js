function rMoreRLess1() {
    var etext1 = document.getElementById("etext1");
    var btnText = document.getElementById("myBtn1"); // Update the button ID
    
    if (etext1.style.display === "none") {
      btnText.innerHTML = "Read less";
      etext1.style.display = "inline"; // Change to "inline" to show the text
    } else {
      btnText.innerHTML = "Read more";
      etext1.style.display = "none"; // Change to "none" to hide the text
    }
  }


function rMoreRLess2() {
    var etext1 = document.getElementById("etext2");
    var btnText = document.getElementById("myBtn2"); // Update the button ID

    if (etext1.style.display === "none") {
        btnText.innerHTML = "Read less";
        etext1.style.display = "inline"; // Change to "inline" to show the text
    } else {
        btnText.innerHTML = "Read more";
        etext1.style.display = "none"; // Change to "none" to hide the text
    }
}