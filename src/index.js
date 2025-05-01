import "./styles/main.scss";

async function loadComponent(selector, file) {
  const response = await fetch(`components/${file}`);

  if (!response.ok) {
    return;
  }

  const container = document.querySelector(selector);
  if (!container) {
    return;
  }

  container.innerHTML = await response.text();
}

// Завантажуємо компоненти
Promise.all([
  loadComponent(".header", "header.html"),
  loadComponent(".banner", "banner.html"),
  loadComponent(".products", "products.html"),
  loadComponent(".about", "about.html"),
  loadComponent(".reviews", "reviews.html"),
  loadComponent(".trends", "trends.html"),
  loadComponent(".team", "team.html"),
  loadComponent(".follow-us", "follow-us.html"),
  loadComponent(".contact", "contact.html"),
  loadComponent(".footer", "footer.html"),
]).then(() => {
  const burger = document.querySelector(".burger");
  const mobileMenu = document.querySelector(".mobile-menu");

  if (!burger || !mobileMenu) {
    return;
  }

  burger.addEventListener("click", () => {
    burger.classList.toggle("open");
    mobileMenu.classList.toggle("open");
  });
});
