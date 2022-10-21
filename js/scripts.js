function hideResults(){
  document.getElementById("java").setAttribute("class", "hidden");
  document.getElementById("cSharp").setAttribute("class", "hidden");
  document.getElementById("css").setAttribute("class", "hidden");

}



window.addEventListener("load", function () {

  const form = document.querySelector("form");
  const langResults = document.getElementById("langResults");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    hideResults();
    const bDay = document.getElementById("date").value;
    const radioButton = document.querySelector("input[name='lifeStyleType']:checked").value;
    const income =document.getElementById("money").value;
    const seasonS =document.getElementById("season").value;
    const favColor =document.getElementById("color").value;
    

    if (radioButton === "exec") {
      document.getElementById("cSharp").removeAttribute("class");
    } else if (radioButton === "beachBum") {
      document.getElementById("css").removeAttribute("class");
    } else if (radioButton === "scholar") {
      document.getElementById("java").removeAttribute("class");
    } else if (radioButton === "gamer") {
      document.getElementById("css").removeAttribute("class");
    }


  }
  )

})

