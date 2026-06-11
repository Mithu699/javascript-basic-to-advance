function changeColor(color) {
    document.body.style.backgroundColor = color;
}

function randomColor() {
    const colors = [
        "#FF5733",
        "#33FF57",
        "#3357FF",
        "#F39C12",
        "#9B59B6",
        "#1ABC9C",
        "#E74C3C",
        "#2ECC71"
    ];

    const randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomIndex];
}