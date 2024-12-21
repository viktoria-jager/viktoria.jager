
const carousels = {}; 

function scrollCarousel(direction, carouselId) {

    if (!carousels[carouselId]) {
        const track = document.querySelector(`#${carouselId} .carousel-track`);
        const groups = document.querySelectorAll(`#${carouselId} .carousel-group`);
        carousels[carouselId] = {
            currentPosition: 0,
            track: track,
            groups: groups,
            groupCount: groups.length,
        };
    }

    const carousel = carousels[carouselId];
    if (direction === 'left') {
        carousel.currentPosition--;
        if (carousel.currentPosition < 0) {
            carousel.currentPosition = carousel.groupCount - 1; 
        }
    } else if (direction === 'right') {
        carousel.currentPosition++;
        if (carousel.currentPosition >= carousel.groupCount) {
            carousel.currentPosition = 0; 
        }
    }

    
    const offset = -carousel.currentPosition * 100; 
    carousel.track.style.transform = `translateX(${offset}%)`;
}


