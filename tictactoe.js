var temp = "O";
var count=0;
  
//Fresh Start
function Input() {
    var x1 = document.getElementById("1");
    var x2 = document.getElementById("2");
    var x3 = document.getElementById("3");
    var x4 = document.getElementById("4");
    var x5 = document.getElementById("5");
    var x6 = document.getElementById("6");
    var x7 = document.getElementById("7");
    var x8 = document.getElementById("8");
    var x9 = document.getElementById("9");
    count=0;
    x1.value="";
    x2.value="";
    x3.value="";
    x4.value="";
    x5.value="";
    x6.value="";
    x7.value="";
    x8.value="";
    x9.value="";
    x1.disabled=false;x2.disabled=false;x3.disabled=false;x4.disabled=false;x5.disabled=false;x6.disabled=false;x7.disabled=false;x8.disabled=false;x9.disabled=false;
    
    document.getElementById("pop").style.visibility = "hidden";
    document.getElementById("write").style.visibility = "hidden";
}

function DeactivateButton() {
    var b1 = document.getElementById("1");
    var b2 = document.getElementById("2");
    var b3 = document.getElementById("3");
    var b4 = document.getElementById("4");
    var b5 = document.getElementById("5");
    var b6 = document.getElementById("6");
    var b7 = document.getElementById("7");
    var b8 = document.getElementById("8");
    var b9 = document.getElementById("9");
    
    b1.disabled = true;
    b2.disabled = true;
    b3.disabled = true;
    b4.disabled = true;
    b5.disabled = true;
    b6.disabled = true;
    b7.disabled = true;
    b8.disabled = true;
    b9.disabled = true;
}

function popupShow(Winner) {
      //Deactivates all Buttons
      DeactivateButton();
    
      //Replaced Text
      popuptext = document.getElementById("text");
      popuptext.innerHTML = Winner + " wins.";
    
      //Makes Popup Visible
      var pop = document.getElementById("pop");
      var write = document.getElementById("write");
      pop.style.visibility = "visible";
      write.style.visibility ="visible"
}

//Checks Game is Over or Not
function Check() {
    var b1 = document.getElementById("1").value;
    var b2 = document.getElementById("2").value;
    var b3 = document.getElementById("3").value;
    var b4 = document.getElementById("4").value;
    var b5 = document.getElementById("5").value;
    var b6 = document.getElementById("6").value;
    var b7 = document.getElementById("7").value;
    var b8 = document.getElementById("8").value;
    var b9 = document.getElementById("9").value;
    
    //Upper Row
    if (((b1=="X") || (b1=="O")) && ((b1 == b2) && (b2 == b3))) {
      popupShow(b1);
    }
    //Leftmost COlumn
    else if (((b1=="X") || (b1=="O")) && ((b1 == b4) && (b4 == b7))){
      popupShow(b1);
    }
    //Bottom Row
    else if (((b9=="X") || (b9=="O")) && ((b9 == b8) && (b8 == b7))){
      popupShow(b9);
    }
    //Rightmost column
    else if (((b9=="X") || (b9=="O")) && ((b9 == b6) && (b6 == b3))){
      popupShow(b9);
    }
    //middle row
    else if (((b4=="X") || (b4=="O")) && ((b4 == b5) && (b5 == b6))){
      popupShow(b4);
    }
    //Central Column
    else if (((b2=="X") || (b2=="O")) && ((b2 == b5) && (b5 == b8))){
      popupShow(b2);
    }
    //1-9 Diagonal
    else if (((b1=="X") || (b1=="O")) && ((b1 == b5) && (b5== b9))){
      popupShow(b1);
    }
    //7-3 Diagonal
    else if (((b7=="X") || (b7=="O")) && ((b7 == b5) && (b5 == b3))){
      popupShow(b7);
    }
    else if(count==9)
    {
      //Replaced Text
      DeactivateButton();
      popuptext = document.getElementById("text");
      popuptext.innerHTML = "Its a tie";
      count=0;
      //Makes Popup Visible
      var pop = document.getElementById("pop");
      var write = document.getElementById("write");
      pop.style.visibility = "visible";
      write.style.visibility ="visible"
    }

    }

  
  
  
//X or Y Inserted
function setzone(x, temp) {
     if (x==1) {
     var button = document.getElementById("1");
     button.value = temp;
     button.disabled=true;
     }
     else if (x==2) {
     var button = document.getElementById("2");
     button.value = temp;
     button.disabled=true;
     }
     else if (x==3) {
     var button = document.getElementById("3");
     button.value = temp;
     button.disabled=true;
     }
     else if (x==4) {
     var button = document.getElementById("4");
     button.value = temp;
     button.disabled=true;
     }
     else if (x==5) {
     var button = document.getElementById("5");
     button.value = temp;
     button.disabled=true;
     }
     else if (x==6) {
     var button = document.getElementById("6");
     button.value = temp;
     button.disabled=true;
     }
     else if (x==7) {
     var button = document.getElementById("7");
     button.value = temp;
     button.disabled=true;
     }
     else if (x==8) {
     var button = document.getElementById("8");
     button.value = temp;
     button.disabled=true;
     }
     else if (x==9) {
     var button = document.getElementById("9");
     button.value = temp;
     button.disabled=true;
     }
     Check();
     }
  
//Specify Character
function fill(button) {
  count++;
    if (temp=="X") {
    temp="O";
    setzone(button, temp);
    }
    else if (temp=="O") {
    temp="X";
    setzone(button, temp);
    }
    }