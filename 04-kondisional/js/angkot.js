// While 


/*
    let angkot = 1;
    while(angkot <= 10) {
        console.log("Angkot No." + angkot + " " + "beroperasi dengan buruk.");

    angkot++;   // angkot = angkot + 1; 
    }
*/


let jmlAngkot = 10;
let angkotBeroperasi = 6;
let noAngkot = 1;

while(noAngkot <= angkotBeroperasi){
    console.log("Angkot No. " + noAngkot + " beroperasi dengan baik.");
    noAngkot++; // increment gar tidak infinity loop
}


for( noAngkot = angkotBeroperasi + 1; noAngkot <= jmlAngkot; noAngkot++ ){
    console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi.")
}


for( noAngkot; noAngkot <= jmlAngkot; noAngkot++ ){
    if(noAngkot <= angkotBeroperasi){
        console.log("Angkot No. " + noAngkot + " beroperasi dengan baik.")
    } else {
        console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi.")
    }
}

