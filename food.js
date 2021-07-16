class Food{
    constructor(){
        this.image=loadImage("Milk.png");
      
    }
    getFood(){
        var foodRef=database.ref('food');
        foodRef.on("value",function (data){foodS=data.val();})
    }
    updateFood(foodS){
        database.ref('/').update({'food':foodS})
    }
    display(){
        var x=80,y=100;
        imageMode(CENTER)
        image(this.image,720,220,70,70);
     for(var i;i<=200;i=i+20)
     {
         x=x+20;
         y=y;
         image(this.image,x,y,70,70);
     }
  
   
    }
    updateName(petName){
        database.ref('Pet/name').update({name:petName })
    }
}
