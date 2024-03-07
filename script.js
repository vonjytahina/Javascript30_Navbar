   // Get the DOM elements
   const desktopMenu = document.querySelector(".desktop-products-menu");
   const productsMenu = document.querySelector(".products");
   const hamburger = document.querySelector(".hamburger");
   const closeBtn = document.querySelector(".close");
   const mobileMenu = document.querySelector(".mobile-menu");

   // Define the toggleDesktopMenu function
   function toggleDesktopMenu() {
     if (!desktopMenu.classList.contains("show-desktop-menu")) {
       desktopMenu.classList.add("show-desktop-menu");
     } else {
       desktopMenu.classList.remove("show-desktop-menu");
     }
   }

   // Add click event listener to productsMenu
   productsMenu.addEventListener("click", toggleDesktopMenu);

   // Add mouseleave event listener to desktopMenu
   desktopMenu.addEventListener("mouseleave", function() {
     if (desktopMenu.classList.contains("show-desktop-menu")) {
       desktopMenu.classList.remove("show-desktop-menu");
     }
   });

// show mobile menu
   hamburger.onclick = () => {
    if (!mobileMenu.classList.contains("show-mobile-menu")) {
      mobileMenu.classList.add("show-mobile-menu");
      mobileMenu.classList.remove("hide-mobile-menu");
      hamburger.style.display = "none";
      closeBtn.style.display = "block";
    }
  };
  
  // close mobile menu
  closeBtn.onclick = () => {
    if (!mobileMenu.classList.contains("hide-mobile-menu")) {
      mobileMenu.classList.add("hide-mobile-menu");
      mobileMenu.classList.remove("show-mobile-menu");
      hamburger.style.display = "block";
      closeBtn.style.display = "none";
    }
  };
  
  // toggle mobile and desktop menus
  function windowResize() {
    if (document.documentElement.clientWidth > 550) {
      hamburger.style.display = "none";
      closeBtn.style.display = "none";
      mobileMenu.classList.remove("hide-mobile-menu");
      mobileMenu.classList.remove("show-mobile-menu");
    } else if (document.documentElement.clientWidth <= 550) {
      hamburger.style.display = "block";
      closeBtn.style.display = "none";
      mobileMenu.classList.remove("hide-mobile-menu");
      mobileMenu.classList.remove("show-mobile-menu");
    }
  }
  
  window.addEventListener("resize", windowResize);
