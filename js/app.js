function initParticles() {
    particlesJS('particles-js', {
        // Configurações das partículas (exemplo padrão)
        "particles": {
            "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": "#ffffff" },
            "shape": { "type": "circle" },
            "opacity": { "value": 0.5, "random": false },
            "size": { "value": 3, "random": true },
            "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 },
            "move": { "enable": true, "speed": 6, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" }, "resize": true },
        },
        "retina_detect": true
    });
}
document.addEventListener("DOMContentLoaded", () => {
    
    initParticles();

    Router.navigate("home");
    
     document.querySelectorAll("button[data-route]").forEach(btn => {
        btn.addEventListener("click", () => {
            const route = btn.getAttribute("data-route");
            Router.navigate(route);
        });
    });
});
