function Myfunction() {
    const dots = document.getElementById('dots-' + btnId);
    const moreText = document.getElementById('more-' + btnId);
    const btnText = document.getElementById('myBtn-' + btnId);
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerText = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerText = "Read less";
      moreText.style.display = "inline";
    }
  }
  
  const btn = document.getElementById("myBtn");
  btn.addEventListener("click", Myfunction);