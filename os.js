const os= require("os");

const user=os.userInfo();
console.log(user);

console.log(`the time since i was working on the computer is ${os.uptime()} seconds`);


const currentos={
    name:os.type(),
    release:os.release(),
    totalmemory:os.totalmem(),
    freememory:os.freemem(),
    
}
console.log(currentos);

const path=require("path");

console.log(path.sep);
const filePath=path.join(`./content`,`subfolder`,`test.txt`);
console.log(filePath);

const base=path.basename(filepath);
console.log(base);