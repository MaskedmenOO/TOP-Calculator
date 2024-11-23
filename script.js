let numOne;
let numTwo;
let operator;
let isExcuted=false;
let secondExcute=false;
let thirdExcute=false;
let fourthExcute=false;
let buttonsIDs="";
let answer="";


function buttonClicked(buttonID){
    //console.log("fourthExcute: "+ fourthExcute)
    //console.log("isEx:"+ isExcuted);
    //console.log("is2Ex: "+ secondExcute);
   // console.log("thirdExcute:"+ thirdExcute);
    //console.log("equalRun:"+equalRun);
    if(buttonID==="/"){
        buttonID="÷";
    }else if(buttonID==="*"){
        buttonID="×"
    }
    //console.log("answer at buttonClicked:"+answer)

    if(isExcuted===false && secondExcute===true){
        //alert("notNormal");
       // console.log("notNormal");
        //console.log("isEx:"+ isExcuted);
        //console.log("is2Ex: "+ secondExcute);
        //console.log("thirdExcute: "+thirdExcute);
        
        buttonsIDs=answer;    
        //console.log("NOTNORMALbuttonsIDs: "+buttonsIDs);
        /*if(thirdExcute===true){
            alert("thirdexcute==true");
            console.log("NEWbuttonsIDs: "+buttonsIDs);
            buttonsIDs=buttonsIDs;
        }*/
    }/*else if(isExcuted===false && secondExcute===true){
        console.log("buttonIDS:"+ buttonsIDs);
        console.log("buttonID: "+ buttonID);
        console.log("buttonclickedTwo");
    }*/
    //alert("normal");
    //console.log("normalONE");
    //console.log('buttonIDs@normalOne:'+ buttonsIDs);

    buttonsIDs = buttonsIDs + buttonID 
    //console.log("normal");
    //console.log('buttonIDs@normalTwo:'+ buttonsIDs);
    //console.log("isEx:"+ isExcuted);
    //console.log("is2Ex: "+ secondExcute);
    //console.log("thirdExcute:"+ thirdExcute);
    //console.log("equalRun:"+equalRun);

    document.getElementById("display").innerHTML=buttonsIDs;
    return buttonsIDs;
}

function AC(){
    buttonsIDs="";
    answer="";
    isExcuted=false;
    secondExcute=false;
    thirdExcute=false;
    fourthExcute=false;
    document.getElementById("display").innerHTML="";
}

function operaterPresssed(operatorClass){
    if(isExcuted===false && thirdExcute===false){
        if(isExcuted===false){
        //alert("first");
            //console.log("FIRST");
            isExcuted=true;
            secondExcute=true;
            thirdExcute=true;
            numOne=buttonsIDs.slice(0,-1);
            //console.log("NumOne: "+ numOne);
        }else if(secondExcute===true){
            //alert("second");
            //console.log("SECOND");
            isExcuted=true;
            thirdExcute=true;
            equalPressed();
            buttonClicked(operatorClass);
            secondExcute=false;
        }
    }else if(thirdExcute===true){
        //alert("third");
        isExcuted=true;
        equalPressedOperator();
        buttonClicked(operatorClass);
        thirdExcute=true;
        secondExcute=false;
        fourthExcute=true;
        if(fourthExcute===true){
            //alert("fourth");
            numOne=answer;
            //console.log("NEWNUMONE: "+numOne);
        }
        //alert("third");
        //console.log("SECOND");

    }
    operator=operatorClass;
    console.log("operatorClass: "+ operatorClass);
}

function equalPressed(){
    //alert("equalPressed");
    console.log("FIRSTnumTwo:"+ numTwo);
    console.log("buttonsIDS@equals:" + buttonsIDs);
    console.log("numOne@equals: "+ numOne);
    let NewNumOne=numOne.toString();
        //alert("original");
        numTwo=buttonsIDs.slice(NewNumOne.length+1);
    
    isExcuted=false;
    secondExcute=true;
    thirdExcute=false;
    //console.log("numOne at equals: "+ numOne);
    //console.log("numTwo:"+ numTwo);

    answer=operate(parseFloat(numOne),operator,parseFloat(numTwo));
    console.log("answer:"+answer);
    answer=Math.round(answer*1000)/1000;
    document.getElementById("display").innerHTML=answer;
    return answer;
}

function equalPressedOperator(){
    //alert("secondEqualPressed");
    //console.log("FIRSTnumTwo:"+ numTwo);
    //console.log("buttonsIDS@equals:" + buttonsIDs);
    //console.log("numOne@equals: "+ numOne);

    if(thirdExcute===true && fourthExcute===true){
        //alert("sliceTwo");
        //console.log("numTwoBeforeSliceTwo:"+ numTwo);
        //console.log("numOne:"+numOne);
        //console.log("butoNids@EQUAL:" + buttonsIDs);

        let NewNumOne= numOne.toString();

        numTwo=buttonsIDs.slice(NewNumOne.length+1);
        numTwo=numTwo.slice(0,-1);
        //console.log("Numtwoafterfirstslice: "+ numTwo);
        //numTwo=numTwo.slice(numOne.length+);
        //console.log("NEWnumTwo:"+numTwo);
    }else if(thirdExcute===true && fourthExcute===false){
        //alert("sliceOne");
        numTwo=buttonsIDs.slice(numOne.length+1);
        //console.log("numTwoBeforeSlice:"+numTwo);
        numTwo=numTwo.slice(0,numTwo.length-1);
        //console.log("numtwo@slice:"+ numTwo);
    }else{
        //alert("original");
        numTwo=buttonsIDs.slice(numOne.length+1);
    }
    isExcuted=false;
    secondExcute=true;
    thirdExcute=false;
   // console.log("numOne at equals: "+ numOne);
    //console.log("numTwo:"+ numTwo);

    answer=operate(parseFloat(numOne),operator,parseFloat(numTwo));
    //console.log("answer:"+answer);
    answer=Math.round(answer*1000)/1000;
    document.getElementById("display").innerHTML=answer;
    return answer;
}

function add(numOne, numTwo){
return(numOne+numTwo);
}

function subtract(numOne, numTwo){
return (numOne-numTwo);
}

function multiply(numOne, numTwo){
return (numOne*numTwo);
}

function divide(numOne, numTwo){
return(numOne/numTwo);
}

function operate(numOne, operator, numTwo){
    if (operator==='+'){
       return add(numOne, numTwo);
    }else if(operator==="-"){
        return subtract(numOne,numTwo);
    }else if(operator==="*"){
        return multiply(numOne,numTwo);
    }else if(operator==="/"){
        return divide(numOne,numTwo);
    }
}