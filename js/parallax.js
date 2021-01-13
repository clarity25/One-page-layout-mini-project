
const parallax = document.getElementById('home');

window.addEventListener('scroll', function(){
    let offset = window.pageYOffset;
    console.log(offset);
    parallax.style.backgroundPositionY = offset / 2 + "px";    

    navbarScrollEffect(offset);
    
})

        var home = document.querySelector('.li:nth-Child(1)');
        home.style.backgroundColor = 'aquamarine';

const navbarScrollEffect = (offset) =>{

    // let li = document.querySelector('li');

    // if(offset > 400 && offset < 1000){
    //     li[1].style.backgroundColor = 'red';
    // }
    let navBarScrollBackgrounColor = 'aquamarine';
    let navbarColor = '#604C68';
    let navBarScrollBackgrounColorNoBackgroundImage = '#ffff';


    let navbar = document.querySelector('header');

    if(offset < 600){
        var home = document.querySelector('.li:nth-Child(1)');
        var dogo = document.querySelector('.li:nth-Child(2)');
        home.style.backgroundColor = ' aquamarine';
        dogo.style.backgroundColor = 'transparent';
        navbar.style.backgroundColor = 'transparent';
    }else if(offset > 400 && offset < 1000){
        var home = document.querySelector('.li:nth-Child(1)');
        var dogo = document.querySelector('.li:nth-Child(2)');
        var shimonada = document.querySelector('.li:nth-Child(3)');
        home.style.backgroundColor = 'transparent';
        dogo.style.backgroundColor = navBarScrollBackgrounColorNoBackgroundImage;
        shimonada.style.backgroundColor = 'transparent';
        navbar.style.backgroundColor = navbarColor;
    }else if(offset > 1000 && offset < 1550){
        var dogo = document.querySelector('.li:nth-Child(2)');
        var shimonada = document.querySelector('.li:nth-Child(3)');
        var minobu = document.querySelector('.li:nth-Child(4)');
        dogo.style.backgroundColor = 'transparent';
        shimonada.style.backgroundColor = navBarScrollBackgrounColor;
        minobu.style.backgroundColor = 'transparent';
    }else if(offset > 1550 && offset < 2150){
        var minobu = document.querySelector('.li:nth-Child(4)');
        var shimonada = document.querySelector('.li:nth-Child(3)');
        var yakushima = document.querySelector('.li:nth-Child(5)');
        minobu.style.backgroundColor = navBarScrollBackgrounColor;
        shimonada.style.backgroundColor = 'transparent';
        yakushima.style.backgroundColor = 'transparent';
    }else if(offset > 2300 && offset < 2840){
        var minobu = document.querySelector('.li:nth-Child(4)');
        var yakushima = document.querySelector('.li:nth-Child(5)');
        var ikebukuro = document.querySelector('.li:nth-Child(6)');
        minobu.style.backgroundColor = 'transparent';
        yakushima.style.backgroundColor = navBarScrollBackgrounColor;
        ikebukuro.style.backgroundColor = 'transparent';
    }else if(offset > 2840 && offset < 3430){
        var yakushima = document.querySelector('.li:nth-Child(5)');
        var ikebukuro = document.querySelector('.li:nth-Child(6)');
        var washinomiya = document.querySelector('.li:nth-Child(7)');
        yakushima.style.backgroundColor = 'transparent';
        ikebukuro.style.backgroundColor = navBarScrollBackgrounColor;
        washinomiya.style.backgroundColor = 'transparent';
    }else if(offset > 3430 && offset < 4060){
        var ikebukuro = document.querySelector('.li:nth-Child(6)');
        var washinomiya = document.querySelector('.li:nth-Child(7)');
        var iwami = document.querySelector('.li:nth-Child(8)');
        ikebukuro.style.backgroundColor = 'transparent';
        washinomiya.style.backgroundColor = navBarScrollBackgrounColor;
        iwami.style.backgroundColor = 'transparent';
    }else if(offset > 4060 && offset < 4683){
        var washinomiya = document.querySelector('.li:nth-Child(7)');
        var iwami = document.querySelector('.li:nth-Child(8)');
        var toyosato = document.querySelector('.li:nth-Child(9)');
        washinomiya.style.backgroundColor = 'transparent';
        iwami.style.backgroundColor = navBarScrollBackgrounColor;
        toyosato.style.backgroundColor = 'transparent';
    }else if(offset > 4683 && offset < 5300){
        var iwami = document.querySelector('.li:nth-Child(8)');
        var toyosato = document.querySelector('.li:nth-Child(9)');
        var kaikan = document.querySelector('.li:nth-Child(10)');
        iwami.style.backgroundColor = 'transparent';
        toyosato.style.backgroundColor = navBarScrollBackgrounColor;
        kaikan.style.backgroundColor = 'transparent';
    }else if(offset > 5300 && offset < 6000){
        var toyosato = document.querySelector('.li:nth-Child(9)');
        var kaikan = document.querySelector('.li:nth-Child(10)');
        var ogimachi = document.querySelector('.li:nth-Child(11)');
        toyosato.style.backgroundColor = 'transparent';
        kaikan.style.backgroundColor = navBarScrollBackgrounColor;
        ogimachi.style.backgroundColor = 'transparent';
    }else if(offset > 6000 && offset < 6500){
        var kaikan = document.querySelector('.li:nth-Child(10)');
        var ogimachi = document.querySelector('.li:nth-Child(11)');
        kaikan.style.backgroundColor = 'transparent';
        ogimachi.style.backgroundColor = navBarScrollBackgrounColor;

    }else if(offset > 6500 && offset < 6888){
        var kaikan = document.querySelector('.li:nth-Child(10)');
        var ogimachi = document.querySelector('.li:nth-Child(11)');
        kaikan.style.backgroundColor = 'transparent';
        ogimachi.style.backgroundColor = 'transparent';

    }

}