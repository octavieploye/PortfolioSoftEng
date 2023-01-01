
 // **typing text animation script


    const text = document.querySelector('.hero-heading');
    const strText = text.textContent;
    const splitText = strText.split("");
    text.textContent = "";

    for(i=0; i < splitText.length; i++) {
        text.innerHTML += "<span>" + splitText[i] + "</span>"
    }

    let char = 0;
    let timer = setInterval(onTick, 50);

    function onTick() {
        const span = text.querySelectorAll('span') [char];
        span.classList.add('fade');
        char++;
        if(char === splitText.length){
            complete();
            return;
        }
    }

    // * Reset Loop
    function complete() {
        clearInterval(timer);
        timer =null;
    }

    // * Links transition

const links = document.querySelectorAll('.link');
const sections = document.querySelectorAll('section');

let activeLink = 0;

links.forEach((link, i) => {
    link.addEventListener('click', () => {
        if(activeLink != i){
            links[activeLink].classList.remove('active');
            link.classList.add('active');
            sections[activeLink].classList.remove('active');

            setTimeout(() => {
                activeLink = i;
                sections[i].classList.add('active');
            }, 1000);
        }
    })
})


