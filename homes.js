
      const prevBtn = document.getElementById("prevBtn");
      const nextBtn = document.getElementById("nextBtn");
      const slider = document.querySelector(".slider");
      const boxWidth = document.querySelector(".box").offsetWidth;
      const numVisibleBoxes = Math.floor(window.innerWidth / boxWidth);

      let translateX = 0;

      prevBtn.addEventListener("click", () => {
        if (translateX < 0) {
          translateX += boxWidth;
          slider.style.transform = `translateX(${translateX}px)`;
        }
      });

      nextBtn.addEventListener("click", () => {
        if (translateX > -(boxWidth * (10 - numVisibleBoxes))) {
          translateX -= boxWidth;
          slider.style.transform = `translateX(${translateX}px)`;
        }
      });

      window.addEventListener("resize", () => {
        const numVisibleBoxes = Math.floor(window.innerWidth / boxWidth);
        if (translateX < -(boxWidth * (5 - numVisibleBoxes))) {
          translateX = -(boxWidth * (5 - numVisibleBoxes));
          slider.style.transform = `translateX(${translateX}px)`;
        }
      });

      const slidePrev = () => {
        const cards = document.querySelector(".cards");
        cards.insertBefore(cards.lastElementChild, cards.firstElementChild);
      };

      const slideNext = () => {
        const cards = document.querySelector(".cards");
        cards.appendChild(cards.firstElementChild);
      };

      const showHome = () => {
        document.getElementById("home").style.display = "block";
        document.getElementById("about").style.display = "none";
        document.getElementById("services").style.display = "none";
        document.getElementById("contact").style.display = "none";
      };

      const showAbout = () => {
        document.getElementById("home").style.display = "none";
        document.getElementById("about").style.display = "block";
        document.getElementById("services").style.display = "none";
        document.getElementById("contact").style.display = "none";
      };

      const showServices = () => {
        document.getElementById("home").style.display = "none";
        document.getElementById("about").style.display = "none";
        document.getElementById("services").style.display = "block";
        document.getElementById("contact").style.display = "none";
      };

      const showContact = () => {
        document.getElementById("home").style.display = "none";
        document.getElementById("about").style.display = "none";
        document.getElementById("services").style.display = "none";
        document.getElementById("contact").style.display = "block";
      };
    