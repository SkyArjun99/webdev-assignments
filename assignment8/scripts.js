 setTimeout(() => {
        alert("Welcome to the Dashboard, User 001.");
}, 500);

           
const dateEl = document.getElementById('date-display');
            
function updateDateTime() {
    const now = new Date();
                
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateEl.innerText = now.toLocaleDateString('en-US', options) + " " + now.toLocaleTimeString();

    const start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const diff = now - start;
    const oneDay = 1000 * 60 * 60 * 24;
    const percentage = ((diff / oneDay) * 100).toFixed(2);
                
    document.getElementById('time-left').innerText = `Day Progress: ${percentage}%`;
}

setInterval(updateDateTime, 1000);
updateDateTime();
        