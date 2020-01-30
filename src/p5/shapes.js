function setup() {

}

function draw() {
    color("#000000");
    var posx = [];
    var posy = [];
    
    posx.push(random(200));
    posy.push(random(200));
    console.log('posy',posy);
    for(var i = 0; i < 99; i++) {
        posx.push(random(200));
        posy.push(random(200));
        line(posx[i],posy[i],posx[i+1].posy[i+1]);
    }
}