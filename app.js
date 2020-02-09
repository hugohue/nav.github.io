var tcount = 0
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    navLinks.forEach((link, index)=>{
        link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.5}s`;
        console.log(link.style.animation)
    });

    burger.addEventListener('click',() => {
        if(tcount == 0){
            tcount = 1;
        }else{
            tcount = 0;
        }
        // Toggle Nav
        nav.classList.toggle('nav-active');
        // Animate Links
        navLinks.forEach((link, index)=>{
            if(tcount == 1){
                link.style.animation = '';
            }
            if(link.style.animation != ''){
                link.style.animation = '';
                console.log(link.style.animation)
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.5}s`;
                console.log(link.style.animation)
            }
        });
        // Animate Burger
        burger.classList.toggle('toggle');
    });
}

navSlide();