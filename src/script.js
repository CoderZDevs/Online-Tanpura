const songs=['B-Scale','C-Scale','CS-Scale','D-Scale','DS-Scale','F-Scale','FS-Scale','G-Scale','GS-Scale','A-Scale'];


var songsf={'B':'B-Scale','C':'C-Scale','C#':'CS-Scale','D':'D-Scale','D#':'DS-Scale','F':'F-Scale','F#':'FS-Scale','G':'G-Scale','G#':'GS-Scale','A':'A-Scale'};
var pr="A"
var song="";
player = document.getElementById('myMusic'); 
var volume = document.getElementById('rngVolume').value;
var speed = document.getElementById('rngSpeed').value; 


function load(name)
{
    
    document.getElementById(pr).classList.remove('active');
    document.getElementById(name).classList.add('active');
    document.getElementById('scc').innerHTML=name;
    pr=name;
    song=songsf[name];
    
    player.src=`src/files/${song}.mp3`;
    reset();
    player.play();


}
function reset()
{
    player.volume = volume;  
    player.playbackRate = speed;
    document.getElementById('play').classList.remove('active');
    document.getElementById('pause').classList.add('active');
    player.pause(); 
}


              
        window.onload=function()  
        {  
            document.getElementById('play').addEventListener('click', function(){  
               

               document.getElementById('play').classList.remove('active');
                document.getElementById('pause').classList.add('active');
               player.play();   
            });  
            document.getElementById('pause').addEventListener('click' ,function(){  
                document.getElementById('play').classList.add('active');
               document.getElementById('pause').classList.remove('active');
                player.pause();     
            });  
             
            document.getElementById('rngVolume').addEventListener("click", function(){  
                    volume = document.getElementById('rngVolume').value; 
                    player.volume = volume;  
                      
                }); 
                document.getElementById('rngSpeed').addEventListener("click", function(){  
                    speed = document.getElementById('rngSpeed').value; 
                    player.playbackRate = speed;  
                      
                }); 
            
              
        }  