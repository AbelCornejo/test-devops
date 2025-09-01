// Cambiar color del header al hacer scroll
window.addEventListener("scroll", () => {
  const header = document.getElementById("main-header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Botón de comprar ahora
document.getElementById("btn-comprar").addEventListener("click", () => {
  alert("Gracias por tu interés 🐾, pronto habilitaremos la tienda en línea.");
});

// Botones de agregar al carrito
document.querySelectorAll(".add-cart").forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Producto agregado al carrito 🐶🐱");
  });
});

// Formulario de contacto
document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Gracias por contactarnos. Te responderemos pronto.");
  e.target.reset();
});

