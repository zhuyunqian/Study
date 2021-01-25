const path = require ('path');
const fs = require ('fs');

let list  = fs.readdirSync(__dirname)
console.log(list)
list.forEach(function (item,index) {
    if(item.endsWith('.js')){
        fs.renameSync(item,'-'+item);
    }
})

console.log(list)