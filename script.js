var Pre_Read = document.getElementById("Pre_Colonial")
var Spa_Read = document.getElementById("Spanish")
var Ame_Read = document.getElementById("American")
var Jap_Read = document.getElementById("Japanese")
var Pos_Read = document.getElementById("Present")

var card = document.getElementById("card-container");

var Pre_Container = document.getElementById("Pre");
var Spa_Container = document.getElementById("Spa");
var Ame_Container = document.getElementById("Ame");
var Jap_Container = document.getElementById("Jap");
var Pos_Container = document.getElementById("Post");
var Pos2_Container = document.getElementById("1973");
var Pos3_Container = document.getElementById("1986_Constitution");
var Pos4_Container = document.getElementById("1987");
Pre_Read.onclick = function(event){
     card.style.display ="none";
     Pre_Container.style.display = "flex";
}

Spa_Read.onclick = function(event){
     card.style.display ="none";
     Spa_Container.style.display = "flex";
}

Ame_Read.onclick = function(event){
     card.style.display ="none";
     Ame_Container.style.display = "flex";
}

Jap_Read.onclick = function(event){
     card.style.display ="none";
     Jap_Container.style.display = "flex";
}

Pos_Read.onclick = function(event){
     card.style.display ="none";
     Pos_Container.style.display = "flex";
     Pos2_Container.style.display = "flex";
      Pos3_Container.style.display = "flex";
     Pos4_Container.style.display = "flex";
}

var Pre_return = document.getElementById("pre_return");
var Spa_return = document.getElementById("spanish_return");
var Ame_return = document.getElementById("american_return");
var Jap_return = document.getElementById("japanese_return");
var Pos_return = document.getElementById("present_return");
var Pos2_return = document.getElementById("present_return2");
var Pos3_return = document.getElementById("present_return3");
var Pos4_return = document.getElementById("present_return4");
Pre_return.onclick = function(event){
    card.style.display ="flex";
    Pre_Container.style.display = "none";
}

Spa_return.onclick = function(event){
    card.style.display ="flex";
     Spa_Container.style.display = "none";
}

Ame_return.onclick = function(event){
    card.style.display ="flex";
     Ame_Container.style.display = "none";
}

Jap_return.onclick = function(event){
    card.style.display ="flex";
     Jap_Container.style.display = "none";
}

Pos_return.onclick = function(event){
    card.style.display ="flex";
     Pos_Container.style.display = "none";
    Pos2_Container.style.display = "none";
     Pos3_Container.style.display = "none";
     Pos4_Container.style.display = "none";
}
Pos2_return.onclick = function(event){
    card.style.display ="flex";
     Pos_Container.style.display = "none";
        Pos2_Container.style.display = "none";
     Pos3_Container.style.display = "none";
     Pos4_Container.style.display = "none";
}
Pos3_return.onclick = function(event){
    card.style.display ="flex";
     Pos_Container.style.display = "none";
    Pos2_Container.style.display = "none";
     Pos3_Container.style.display = "none";
     Pos4_Container.style.display = "none";
}
Pos4_return.onclick = function(event){
    card.style.display ="flex";
     Pos_Container.style.display = "none";
    Pos2_Container.style.display = "none";
     Pos3_Container.style.display = "none";
     Pos4_Container.style.display = "none";
}
