function hideResults(){


}



window.addEventListener("load", function () {

  const form = document.querySelector("form");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    hideResults();
    const bDay = document.querySelector("input#born").value;


  })
}

)

