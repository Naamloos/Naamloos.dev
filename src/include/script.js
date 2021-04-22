var naam_loses = 0;

function pog()
{
    naam_loses++;

    if(naam_loses >= 25)
    {
        var naamloos = document.getElementById("naamloos");
        if(naamloos != null)
        {
            naamloos.src="include/angery.jpg";
            naamloos.id = "naamshake";
        }
    }
}

// https://stackoverflow.com/a/45576888/8468356
function onKonamiCode(cb) {
    var input = '';
    var key = '38384040373937396665';
    document.addEventListener('keydown', function (e) {
      input += ("" + e.keyCode);
      if (input === key) {
        return cb();
      }
      if (!key.indexOf(input)) return;
      input = ("" + e.keyCode);
    });
  }
  
onKonamiCode(function () 
{
    //alert('song is "Stage 3" by sawsquarenoise, attribution is required per CC 4.0 license.');
    var music = document.createElement("AUDIO");
    music.src="include/stage3.mp3";
    var songname = document.createElement("p");
    songname.innerHTML = "Song: Stage 3 by SawSquareNoise. Licensed under CC BY 4.0.";
    document.getElementsByTagName("body")[0].appendChild(music);
    document.getElementsByTagName("footer")[0].appendChild(songname);

    music.play();
});

function onNaamloos(cb) {
    var input = '';
    var key = '7865657776797983495051';
    document.addEventListener('keydown', function (e) {
      input += ("" + e.keyCode);
      if (input === key) {
        return cb();
      }
      if (!key.indexOf(input)) return;
      input = ("" + e.keyCode);
    });
  }

onNaamloos(function () 
{
    document.title = "Wow! You found the naamloos123 easter egg! now you win... well.. nothing actually. I'm sorry for that. Buuuuuttttttt... I'll give you this cool emote! ヽ(・∀・)ﾉ";
});

particlesJS("particles", {particles:{number:{value:40,density:{enable:true,value_area:800}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:0.05,random:false,anim:{enable:false,speed:1,opacity_min:0.1,sync:false}},size:{value:40,random:true,anim:{enable:true,speed:28.769389369710616,size_min:11.987245570712759,sync:false}},line_linked:{enable:false,distance:150,color:"#ffffff",opacity:0.4,width:1},move:{enable:true,speed:3.333805622463184,direction:"top",random:true,straight:false,out_mode:"out",bounce:false,attract:{enable:false,rotateX:0,rotateY:0}}},interactivity:{detect_on:"window",events:{onhover:{enable:false,mode:"repulse"},onclick:{enable:true,mode:"repulse"},resize:true},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:0.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:true});