//Create variables here
var dog,happyDog,database,foodStock,foodS,dogImg,dogHappy
var position
var x = 20
var position

function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png")
  dogHappy = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500,500);
  dog = createSprite(250,300,5,5)
  dog.addImage(dogImg)
  database = firebase.database();
  foodStock = database.ref('Food')
  foodStock.on("value",readStock)
 // dogImg.scale(5,5)

  
}


function draw() {  
background(46,139,87)
//if(position !== undefined){
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogHappy)
  x = x-1
}
//}

button = createButton('reset');
button.position(200,300);
button.mousePressed(()=>{
dog.addImage(dogImg)

})

textSize(20)
fill("white")
text("FoodStock:"+x,350,200)

  drawSprites();
  //add styles here

}

function readStock(data){
  foodS = data.val();

}

function writeStock(x){
  if(x<=0){
    x=0
  }else{
    x=x-1
  }
   database.ref('/').update({
     Food:x
   })
}



/*
function update(){
  database.ref('/').update();
}*/