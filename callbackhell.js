let balajiBath = function(){
    console.log(`\n Balaji Woke Up`)
    console.log(`\n Balaji is Bathing`)
    console.log(`\n Balaji is Ready`)
}
let kishanBath = function(){
    console.log(`\n kishan Woke Up`)
    console.log(`\n kishan is Bathing`)
    console.log(`\n kishan is Ready`)
}

balajiBath();
kishanBath();

setTimeout(balajiBath, 4000);

function A(){
    console.log(`Inside Function A`);
    
}
function B(){
    console.log(`Inside Function B`);
    
}
function C(){
    console.log(`Inside Function C`);
    
}
function D(){
    console.log(`Inside Function D`);
    
}

A();

setTimeout(B, 2000);

setTimeout(C, 3000);

D();

