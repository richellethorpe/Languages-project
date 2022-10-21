function hideResults(){


}



window.addEventListener("load", function () {

  const form = document.querySelector("form");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    hideResults();
    const bDay = document.getElementById("date").value;
    const radioButton = document.querySelector("input[name='lifeStyleType']:checked").value;
    const income =document.getElementById("money").value;
    const favColor =document.getElementById("color").value;
    






  })
}

)

