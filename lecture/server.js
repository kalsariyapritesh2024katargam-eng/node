const http = require('http')
const fs = require('fs')

const app = http.createServer((req, res) => {

    console.log(req.url);

    const data = fs.readFileSync('demo.txt', 'utf-8')

    if (req.url == '/') {
        res.write(data)
    }
    else if (req.url == '/about') {
        res.write("About")
    }
    else if (req.url == '/Contact') {
        res.write("Contact")
    }
    else if (req.url == '/hello'){
        res.write("hello good morning")
    }
    res.end()
})

app.listen(3000)
