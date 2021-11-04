const a=require(`lodash`);

const items=[1,[2],[3,4],[[4]]];
const newitems=a.floor(items);
console.log(newitems);