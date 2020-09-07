//Create variables here
var dog;
var dog_img;
var happyDog;
var happyDog_img;
var database;
var foodS;
var foodStock;

var food = 20;

function preload()
{
  dog = loadImage('images/dogImg.png');
  happyDog = loadImage('images/dogImg1.png');

}

function setup() {
  createCanvas(500, 500);
  dog_img = createSprite(200,300);
  dog_img.addImage(dog);
  dog_img.scale = 0.4

  happyDog_img = createSprite(200,300);
  happyDog_img.addImage(happyDog); 
  happyDog_img.visible = false;
  happyDog_img.scale = 0.4;
  
  database = firebase.database();

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    //foodStock(foodS);
    happyDog_img.visible = true;
    dog_img.visible = false;
    food = food-1  
  }
  drawSprites();
  //add styles here
  textSize(20);
  stroke("red");
  strokeWeight(4)
  text("Food remaining : " + food,200,100);
  
}
function readStock(data){
  position = data.val();
  
  x = position.x;
 y = position.y;
}



