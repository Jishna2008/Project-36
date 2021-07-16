var dog,sadDog,happyDog;
var button,button2,food,MilkImg,milk;
var foodStock,foodS,database,feedTime,lastFed;
var namePet;
function preload(){
  sadDog=loadImage("Dog.png");
  happyDog=loadImage("happy dog.png");
  MilkImg=loadImage("Milk.png");
}

function setup() {
  createCanvas(1000,400);
  lastFed=13;
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

database= firebase.database();
console.log(database)

foodStock=database.ref('food');
foodStock.on("value",readStock)

  foodObj=new Food();

 feed=createButton("Feed the Dog");
 feed.position(700,95);
 feed.mousePressed(feedDog);

addFood=createButton("Add Food");
addFood.position(800,95);
addFood.mousePressed(addFoods)

feedTime=database.ref('FeedTime');
feedTime.on("value",function (data){
  lastFed=data.val();})
  database.ref('/').update({FeedTime:lastFed})

for ( var i = 60 ; i < 350;i=i+45){
  for(var j=100;j<300;j=j+70){
    milk=createSprite(i,j,150,150);
    milk.addImage("milk",MilkImg);
    milk.scale=0.1
  }
  
 }
  namePet=new Pet();

}

function draw() {
  background(46,139,87);
  //console.log(milk)
namePet.buttons()
foodObj.display();
  drawSprites();
  fill(255,255,245);
  textSize(32);
  if(lastFed>=12){
    text("Last Feed :"+lastFed%12+"PM",100,50)
  }else if(lastFed===0){
    text("Last Feed:12 AM",100,30)
  
  }else{
    text("Last Feed:"+lastFed+"AM",100,50)
  }
}

//function to read food Stock
function feedDog(){
  lastFed=lastFed+1
  dog.addImage(happyDog);
dog.x=dog.x-30
database.ref('/').update({
  food:foodS,
  FeedTime:hour()
})
foodS=foodS-1;
}

function addFoods(){
  foodS++
  dog.x=dog.x+30
  database.ref('/').update({
    food:foodS   
  }  )

}

function readStock(data){
  foodS=data.val();
}



function writeStock(x){
database.ref('/').update({'food':x})
}
