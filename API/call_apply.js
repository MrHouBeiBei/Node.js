var pet = {
    word: '...',
    speak: function(say){
        console.log(say + ' '+ this.word)   //this指向掉该方法的对象
    }
}

pet.speak('Speak')


var dog = {
    word: 'Wang'
}

pet.speak.call(dog,'Speak')  //call使pet中speak的this指向dog对象为其上下文