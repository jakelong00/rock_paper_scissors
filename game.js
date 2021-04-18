console.log("hello");

// 0- rock
// 1- paper
// 2 scissors

let winMatrix = [

    [0,-1,1],
    [1,0,-1],
    [-1,1,0],

];

function computerPlay(){
    let c = Math.floor(Math.random()* (3-1))+1;
    console.log("c = "+c);
    return c;
}

function playerSelection(){
    let p = parseInt(prompt("Select your move -> \n 0 - Rock \n 1 - Paper \n 2 - Scissors"));
    console.log("p= "+p);
    return p;
}


function play(p,c){
    
    
    let pchoice = '';
    
    if(p===0){
        pchoice += "Rock";
    }else if(p===1){
        pchoice += "Paper";
    }else if(p===2){
        pchoice += "Scissors";
    }

    
    let cchoice = '';

    if(c===0){
        cchoice += "Rock";
    }else if(c===1){
        cchoice += "Paper";
    }else if(c===2){
        cchoice += "Scissors";
    }
    
    let r = winMatrix[p][c];
    console.log("r= "+r);
    if(r===0){
        console.log("Draw! "+pchoice+" "+cchoice);
    }else if(r===1){
        console.log("You win! "+pchoice+" > "+cchoice);
    }else if(r===-1){
        console.log("You lose! "+pchoice+" < "+cchoice);
    }

}

play(playerSelection(),computerPlay());


