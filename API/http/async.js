

var c = 0;

function printIt(){
    console.log(c)
}

// function plus(){
//     c += 1;
// }

function plus(){
    setTimeout(function() {
      c += 1;
    }, 1000);
}   
//定时器是典型的异步回调

plus();
printIt();