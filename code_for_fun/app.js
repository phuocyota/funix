(function () {
  const btn = document.querySelectorAll(".control");
  btn.forEach((button) => {
    button.addEventListener("click", function () {
      const currentBtn = document.querySelector(".active-btn").classList;
      console.log(currentBtn);
      currentBtn.remove("active-btn");
      console.log(currentBtn);

      console.log(this.classList);
      this.classList.add("active-btn");
      console.log(this.classList);

      const currentActive = document.querySelector(".active").classList;
      console.log(currentActive);
      currentActive.remove("active");
      console.log(currentActive);

      const activeBtn = document.getElementById(button.dataset.id).classList;
      console.log(activeBtn);
      activeBtn.add("active");
      console.log(activeBtn);
    });
  });
  // document.querySelector(".theme-btn").addEventListener("click", () => {
  //   document.body.classList.toggle("light-mode");
  // });
})();
