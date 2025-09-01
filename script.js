//boton de comprar ahora
document.getElementById("btn-comprar").addEventListener("click", () => {
    alert("Gracias por tu interés, pronto habilitaremos la tienda en línea.");
})


//botones de agregar al carrito
const addCartButtons = document.querySelectorAll(".add-cart");
addCartButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        alert("Producto agregado al carrito 🐾")
    });
});

//formulario de contacto
document.getElementById("contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Gracias por contactarnos. Te responderemos pronto");
    e.target.reset();
});