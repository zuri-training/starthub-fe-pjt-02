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