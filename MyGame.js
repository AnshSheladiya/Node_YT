let dayses=9;
let nightses=8;
var nighttotal=0;
var daytotal=0;


for(i=0;i<(dayses+1);i++){
    let max=20
    let min=1

    let x=Math.floor(Math.random()*(max-min+1)+min);
    daytotal=daytotal+x;
}console.log(`Day : ${daytotal}`);





for(i=0;i<(nightses+2);i++){
    let max=20
    let min=1

    let y=Math.floor(Math.random()*(max-min+1)+min);
    nighttotal=nighttotal+y;
}console.log(`Night : ${nighttotal}`);


