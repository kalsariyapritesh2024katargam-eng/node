const fs = require('fs')

console.log("pritesh");
console.log("pritesh1");

fs.readFile('demo.text', 'utf-8', (error, data) => {
    if(error) throw error
    console.log(data);
})

const data = fs.readFileSync('demo.txt', 'utf-8')
console.log(data);


// fs.writeFile('hello.text', " Add new DAta", (error) => {
//     if (error) throw error
//     console.log("Data write success");
// })


// fs.writeFileSync('demo.txt' , ' Create new file and write datas')

// fs.appendFileSync('demo.txt', 'create new file and append data')

// fs.unlinkSync('demo.txt')

console.log("pritesh2");
console.log("pritesh3");
