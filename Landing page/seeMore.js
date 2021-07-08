const greeting = document.getElementById("greeting");

if(localStorage.token){
  greeting.innerHTML= `Hello ${localStorage.getItem('userFirstName')}?<a href="/Login/login.html">Sign out</a>`;
}

const seeMore = () => {
    const dots = document.getElementById("dots");
    const moreText = document.getElementById("more");
    const btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "See more Projects";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "See less Projects";
      moreText.style.display = "inline";
    }
  }