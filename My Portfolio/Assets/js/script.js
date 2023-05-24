/* Set the width of the side navigation to 250px */
function openNav() {
    // document.getElementById("mySidenav").style.width = "300px";
    document.getElementById('mySidenav').classList.toggle('is-open-nav')
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    // document.getElementById("mySidenav").style.width = "0";
    document.getElementById('mySidenav').classList.remove('is-open-nav')
}


// Type Animation 
const text = document.querySelector(".type-animate");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Front-end Developer";
    }, 0);
    setTimeout(() => {
        text.textContent = "Wordpress Developer";
    }, 4000);;
    setTimeout(() => {
        text.textContent = "Freelancer";
    }, 8000);
}
textLoad();
setInterval(textLoad, 12000);
