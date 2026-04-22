const state = {
            colorIndex: 0,
            isVisible: true,
            colors: ['#2c3e50', '#8e44ad', '#27ae60', '#c0392b', '#d35400']
        };

const colorBtn = document.getElementById('colorBtn');
const toggleBtn = document.getElementById('toggleBtn');
const img = document.getElementById('target-image');
const body = document.body;

//Onclick Arrtibute of button element can also be used instead
// Event Listener 1: Change Color
        
colorBtn.addEventListener('click', () => {
    state.colorIndex = (state.colorIndex + 1) % state.colors.length;
    body.style.backgroundColor = state.colors[state.colorIndex];
});

// Event Listener 2: Toggle Image
toggleBtn.addEventListener('click', () => {
    state.isVisible = !state.isVisible;
    if (state.isVisible) {
        img.classList.remove('hidden');
        toggleBtn.innerText = "Zoom out";
    } else {
        img.classList.add('hidden');
        toggleBtn.innerText = "Zoom in";
    }
});