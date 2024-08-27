let cor;
let circuloX; //horizontal
let circuloY; // vertical

let posicaoHorizontal2; // x
let posicaoVertical2; // y




function setup() {
  createCanvas(600, 400);
background(color(188, 777, 445));
 cor = color(random(0, 255), random(0, 255), random(0, 255));
   circuloX = [0, 0];
   circuloY = [random(height), random(height)];
  }   
 //circuloX = 0,0
 //circuloY = 300, 150


// Código omitido

function draw() {
    fill(cor);
    
   //console.log(circuloX.length);
   for(let contador in circuloX){
     console.log(contador);
  circle(circuloX[contador], circuloY[contador], 50);
  
   circuloX[contador] += random(4, 4);
   circuloY[contador] += random(4, -4);
   
   if(circuloX[contador] >= width){
     circuloX[contador] = 0;
     circuloY[contador] = random(width);
   }
   
   
   
   }
  
  
  
  
 // circuloX[1] += random(4, 4);
  //circuloY[1] += random(4, -4);
 
  //circuloX[2] += random(4, 4);
  //circuloY[2] += random(4, -4);

  if(mouseIsPressed) {
    cor = color(random(0, 255), random(0, 255), random(0, 255), random(0, 100));
  }

}         

