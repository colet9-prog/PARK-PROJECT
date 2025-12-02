function scrollReel(direction) {

    const reel = document.querySelector('.highlight-reel');
    const scrollAmount = 350

    if (direction === 'left') {
        reel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
        reel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
}