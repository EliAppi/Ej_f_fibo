let n;
let suma=0;
let j=0;
let k=0;
let secuFibo=[0,1];

function creaFibo(n){
    for (let i=0;i<n+2;i++){
        suma=secuFibo[i]+secuFibo[i+1];
        secuFibo.push(suma);
    }
    for (x of secuFibo){
        if (n==1){
            console.log("Inmediatamente mayor: "+0);
            console.log("Inmediatamente menor: "+2);
            break;
        }
        else if (x==n){
            console.log("Inmediatamente mayor: "+secuFibo[k+1]);
            console.log("Inmediatamente menor: "+secuFibo[k-1]);
            break;
        }
        else if (x>n){
            console.log("Inmediatamente mayor: "+x);
            console.log("Inmediatamente menor: "+secuFibo[k-1]);
            break;
        }    
        else{
            k++;
        }
    }
}
creaFibo(13);
//console.log(secuFibo);

