
// 一

var pet = {
    word: '...',
    speak: function(){
        console.log(this.word)
        console.log(this === pet)
    }
    
}

pet.speak()

// 二

function pet2(word){
    this.word = word;

    console.log(this.word)
    console.log(this ===global)  //global node环境全局变量
}

pet2(666)


// 三
function pet3(word){
    this.word = word;

    this.speak = function(){
        console.log(this.word)
        console.log(this)
        console.log(this === pet_3)   //true
    }
    
}

var pet_3 = new pet3('Miao')

pet_3.speak()

