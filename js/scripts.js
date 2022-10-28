function hideResults(){
  document.getElementById("java").setAttribute("class", "hidden");
  document.getElementById("cSharp").setAttribute("class", "hidden");
  document.getElementById("css").setAttribute("class", "hidden");
  document.getElementById("ruby").setAttribute("class", "hidden");


}

window.addEventListener("load", function () {

  const form = document.querySelector("form");
  

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    hideResults();
    
    const radioButton = document.querySelector("input[name='lifeStyleType']:checked").value;

  

    if (radioButton === "exec") {
      document.getElementById("cSharp").removeAttribute("class");
    } else if (radioButton === "beachBum") {
      document.getElementById("css").removeAttribute("class");
    } else if (radioButton === "scholar") {
      document.getElementById("java").removeAttribute("class");
    } else if (radioButton === "gamer") {
      document.getElementById("ruby").removeAttribute("class");
    } else {
      document.getElementById("error-message").removeAttribute("class");

   }
  } 
  )

})

