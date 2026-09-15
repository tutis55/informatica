// ==========================================
// TECHFIX - JAVASCRIPT
// ==========================================

// Menú móvil
const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector(".nav");

if (menuBtn && nav) {

    menuBtn.addEventListener("click", () => {

        nav.classList.toggle("active");

        const menuAbierto = nav.classList.contains("active");

        menuBtn.setAttribute(
            "aria-expanded",
            menuAbierto ? "true" : "false"
        );

    });

    // Cerrar el menú después de seleccionar una opción
    const enlacesMenu = nav.querySelectorAll("a");

    enlacesMenu.forEach((enlace) => {

        enlace.addEventListener("click", () => {

            nav.classList.remove("active");

            menuBtn.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}