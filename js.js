let score= document.getElementById("score")
let dice1=document.getElementById("dice1")
let dice2=document.getElementById("dice2")
 
 const  first_randomnumber=Math.floor(Math.random() * 6) + 1;
 const  second_randomnumber=Math.floor(Math.random() * 6) + 1;


let img1_src= "resources/dice"+first_randomnumber+".png"
  
let img2_src= "resources/dice"+second_randomnumber+".png"
  
 dice1.setAttribute("src",img1_src)
 dice2.setAttribute("src",img2_src)

 if(first_randomnumber>second_randomnumber){
    score.innerHTML="Player 1 wins!"
 }
  else if (first_randomnumber<second_randomnumber){
    score.innerHTML="Player 2 wins!"
 }
 else{
    score.innerHTML="Draw!" 
 }