const {readFile,writeFile} =require("fs");

readFile("./content/first.text","utf8",(err,result) =>{
    if(err)
    {
        console.log(err);
        return;
    }
    const first=result;
    readFile("./content/secondtxt","utf8",(err,result)=>{
        if(err)
        {
            console.log(error);
            return;
        }
        const second=result;
        writeFile("./content/result-async.txt",`here is the result ${first}, ${second}`,(err,result)=>{
            if(err)
            {
                console.log(error);
                return;
            }
            console.log(result);
        });
    })
})