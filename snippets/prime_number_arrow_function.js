
let prime=(start,end)=>{
    for(let i=start;i<=end;i++){
        let isP=true;
        for(let j=2;j<=i/2;j++){
            if(i%j==0){
                isP=false;
                break;
            }
        }
        if(isP){
            console.log(i);
        }
    }
}

prime(2,20);

