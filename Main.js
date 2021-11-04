const {readFileSync ,writeFileSync}=require("fs");
console.log("start");

const first=readFileSync(`./content/first.text`,`utf8`);
const second=readFileSync(`./content/second.txt`,`utf8`);

console.log(first,second);

writeFileSync(`./content/result-sync.txt`,`here is the result:${first},${second}`,{flag:`a`}
)

console.log("starting ");
console.log("ending");