const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'));
 
app.get('/search', function (req, res) {
    const obj = [
        {
            "name": "柴犬",
            "img": "pd_1.jpg",
            "link": "https://zh.wikipedia.org/zh-tw/%E6%9F%B4%E7%8A%AC",
            "price": 2800,
            "discound": 2400
        },
        {
            "name": "一隻貓咪",
            "img": "pd_2.jpg",
            "link": "https://zh.wikipedia.org/wiki/%E7%8C%AB",
            "price": 2500,
            "discound": 2300
        },
        {
            "name": "很多貓咪",
            "img": "pd_3.jpg",
            "link": "http://www.omgnews.cc/post04254111016439",
            "price": 10000,
            "discound": 9999
        },
        {
            "name": "水獺跟p助",
            "img": "pd_4.jpg",
            "link": "https://www.facebook.com/kanahei.tw/posts/2287736971438256/",
            "price": 5600,
            "discound": 4900
        }
        
    ]
    res.send(obj)
  
})
 
app.listen(3000)