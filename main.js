const verticalLeftNav = document.querySelector('.left-side');
const navButton = document.querySelector('.nav-button');
const closeNav = document.querySelector('.left-side button');
const closeNavByOverlay = document.querySelector('.overlay');
closeNavByOverlay.classList.add('overlay-visibility-hidden');
navButton.onclick = () => {
    verticalLeftNav.classList.add('nav-open');
    closeNavByOverlay.classList.remove('overlay-visibility-hidden');
    closeNavByOverlay.classList.add('overlay-visibility-visible');

}
closeNav.onclick = () => {
    verticalLeftNav.classList.remove('nav-open');
    closeNavByOverlay.classList.remove('overlay-visibility-visible');
    closeNavByOverlay.classList.add('overlay-visibility-hidden');
}
closeNavByOverlay.onclick = () => {
    verticalLeftNav.classList.remove('nav-open');
    navButton.classList.remove('overlay-visibility-visible');
    closeNavByOverlay.classList.add('overlay-visibility-hidden');
}