let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountain4 = document.getElementById('mountain4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let Farrag = document.querySelector('.Farrag');
window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value * 4 + 'px';
    mountains3.style.top = value * 2 + 'px';
    mountain4.style.top = value * 1.5 + 'px';
    river.style.top = value  + 'px';
    boat.style.top = value  + 'px';
    boat.style.left = value * 3  + 'px';
    Farrag.style.fontSize = value  + 'px';
    if(scrollY >= 60){
        Farrag.style.fontSize = 60 + 'px';
        Farrag.style.position = 'fixed';
        if(scrollY >= 299){
            Farrag.style.display ='none';
        }else{
            Farrag.style.display ='block';
        }
        if(scrollY >= 299){
            document.querySelector('.body').style.background = 'linear-gradient(rgb(100, 185, 100));'
        }else{
            document.querySelector('.body').style.background = 'linear-gradient(rgb(100, 185, 100));'
        }
    }
}