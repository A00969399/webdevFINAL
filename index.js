$(document).ready(function() {
    
//PAGE 1//
    
    document.getElementById("stand1").addEventListener("click", function(){
        document.getElementById("begintxt").style.display = "block";
    });
    
//PAGE 2//
    
//squirt sound effect//
    
function playSound (e){
		var audio = document.querySelector("audio[data-key='play']");
		audio.currentTime = 0 //rewind audio
		audio.play();

	};

var squirt1 = document.getElementById("handle");            
squirt1.addEventListener('mousedown', playSound);  

var squirt2 = document.getElementById("chocobut");            
squirt2.addEventListener('mousedown', playSound); 

var squirt2 = document.getElementById("sprinklebut");            
squirt2.addEventListener('mousedown', playSound);  
    
var squirt2 = document.getElementById("cherrybut");            
squirt2.addEventListener('mousedown', playSound);
    
//yum sound effect// 
    
function play(){
       var audio2 = document.getElementById("yum");
        audio2.currentTime = 0 //rewind audio
       audio2.play();
};

var yum = document.getElementById("spoon");            
yum.addEventListener('mousedown', play);     
    
//Click giant Icecream to make a sundae//

document.getElementById("ictop").addEventListener("click", function(){
document.getElementById("bg2").style.zIndex = "100";    
document.getElementById("bg2").style.display = "block";
document.getElementById("page1").style.display = "none";    
});

//Click handle to dispense icecream//

var handle =  document.getElementById("handle");
var plainic =  document.getElementById("plainic");
var drip = document.getElementById("drip");
var step1 = document.getElementById("step1");    
var step2 = document.getElementById("step2");    

handle.addEventListener("click", function (){
    handle.style.top = "410px";
    drip.style.opacity = "1";
    plainic.style.display = "block";
    document.getElementById("bowl").style.display = "none";
    step1.style.opacity = "0";
    step2.style.opacity = "1";
    document.getElementById("instructions").style.opacity = "1";
});

//Click icecream to move to next step//

plainic.addEventListener("click", function (){
    plainic.style.left = "272px";
    drip.style.opacity = 0;
    
});

//Click chocolate button to dispense//   
    
var chocobut = document.getElementById("chocobut");
var chocoic = document.getElementById("chocoic");
var chocodrip = document.getElementById("chocodrip");
var step3 = document.getElementById("step3");     

chocobut.addEventListener("click", function(){
    chocoic.style.display = "block";
    chocodrip.style.opacity = "1";
    plainic.style.display = "none";
    step2.style.opacity = "0";
    step3.style.opacity = "1";
});

//Click icecream to move to next step//

chocoic.addEventListener("click", function(){
    chocoic.style.left = "460px";
    chocodrip.style.opacity = "0";
});

//Click sprinkle button to dispense//

var sprinklebut = document.getElementById("sprinklebut");
var sprinkles = document.getElementById("sprinkles");
var sprinkleic = document.getElementById("sprinkleic");
var step4 = document.getElementById("step4"); 

sprinklebut.addEventListener("click", function(){
    sprinkleic.style.display = "block";
    sprinkles.style.opacity = "1";
    chocoic.style.display = "none";
    step3.style.opacity = "0";
    step4.style.opacity = "1";
});

//Click icecream to move to next step//

sprinkleic.addEventListener("click", function(){
    sprinkleic.style.left = "650px";
    sprinkles.style.opacity = "0";
});

//Click cherry button to dispense cherries//

var cherrybut = document.getElementById("cherrybut");
var cherryic = document.getElementById("cherryic");
var cherries = document.getElementById("cherries");
var step5 = document.getElementById("step5"); 

cherrybut.addEventListener("click", function(){
    cherryic.style.display = "block";
    cherries.style.opacity = "1";
    sprinkleic.style.display = "none";
    step4.style.opacity = "0";
    step5.style.opacity = "1";
});

//Click to move to next step//

cherryic.addEventListener("click", function(){
    cherryic.style.left = "830px";
    cherries.style.opacity = "0";
});

//Click banana to fall into sundae//
    
var banan1 = document.getElementById("banan1");
var split = document.getElementById("bsplit");
var step6 = document.getElementById("step6"); 

banan1.addEventListener("click", function(){
    split.style.display = "block";
    banan1.style.top = "483px";
    banan1.style.opacity = "0";
    cherryic.style.display = "none";
    step5.style.opacity = "0";
    step6.style.opacity = "1";
    document.getElementById("instructions").style.opacity = "0";
    document.getElementById("i2").style.opacity = "1";

});
    
//Click and drag spoon into sundae to serve//
    
    $(function () {
        $("#spoon").draggable();
        
        $("#bsplit").droppable({
            drop: function(event, ui){
                if(ui.draggable.attr("id") == "spoon"){
                    document.getElementById("enjoy").style.display = "block";
                }
            }
        })
        
    })
    
    document.getElementById("spoon").addEventListener("click", function(){
        step6.style.opacity = "0";
    });
    
    });
    