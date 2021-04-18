var naam_loses = 0;

function pog()
{
    naam_loses++;

    if(naam_loses >= 25)
    {
        var naamloos = document.getElementById("naamloos");
        if(naamloos != null)
        {
            naamloos.src="include/angery.png";
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