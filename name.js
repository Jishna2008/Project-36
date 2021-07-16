class Pet{
    constructor(){
     var petName
    }
  
    buttons(){

    var inputName=createInput('Name your Pet');
    inputName.position(1000,100);
    var Pet=createButton('Done');
    Pet.position(1000,150);
    Pet.mousePressed(function (){
        inputName.hide(),
        Pet.hide()
        petName=inputName.value();
        foodObj.updateName(petName);
    })
}
 
}