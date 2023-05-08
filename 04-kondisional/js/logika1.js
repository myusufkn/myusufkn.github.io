/*
var s = "";
for( var l = 0; l < 10; l++ ){
    for( var d = 0; d < 10; d++){ //jumlah bintang pada deret sesuai yang diinputkan
        s += "*";
    }
    s += "\n"
}
console.log(s);


var s = "";
for( var l = 0; l < 10; l++ ){
    for( var d = 0; d < l; d++){ //jumlah bintang diganti dengan line
        s += "*";
    }
    s += "\n"
}
console.log(s);
//kekurangan, line pertama kosong karena 0<0 atau l<d fals

var s = "";
for( var l = 0; l < 10; l++ ){
    for( var d = 0; d <= l; d++){ //0<=0 true
        s += "*";
    }
    s += "\n"
}
console.log(s);


var s = "";
for( var l = 10; l > 0; l-- ){
    for( var d = 0; d < l; d++){ 
        s += "*";
    }
    s += "\n"
}
console.log(s);



var s = "";
for( var l = 0; l <= 5; l++ ){
    for( var d = 0; d < l; d++){ 
        s += "#";
    }
    s += "\n"
}
console.log(s);
*/


var s = "";
for( var l = 0; l < 5; l++ ){
    for( var d = 0; d < 1; d++){
        s += "#";
    }
    s += " "
}
s += "\n"
for( var l = 0; l < 5; l++ ){
    for( var d = 0; d < 1; d++){
        s += " ";
    }
    s += "#"
}
console.log(s);