const express = require('express');
const app = express();

let result = []
app.get('/numbers', async (req, res) => {
    const urls = req.query.url
    if(Array.isArray(urls)){
        urls.map(value => {
            fetch (value)
                .then(res => res.json())
                .then(jsonData => {
                    result = result.concat(jsonData.numbers)
                })
        })
    } else {
        fetch(urls)
            .then(res => res.json())
            .then(jsonData => {
                result = result.concat(jsonData.numbers)
            })
    }
    setTimeout(()=> {
        result = [...new Set(result)]
        result.sort(function (a,b) {
            return a - b
        })
        res.send({
            "numbers" : result
        })
    },1000)
})

app.listen(8008, () => console.log("Server started at port: 8008"))
