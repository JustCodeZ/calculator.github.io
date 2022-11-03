let result=document.getElementById("inputext");

let calculate=(number)=>{
    result.value+=number;
}

let Result=()=>{
    try{
        result.val=result.eval(result.value);
    }

    catch(err){
        
    }
}