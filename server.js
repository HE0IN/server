const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'))

app.listen(8080, function () {
    console.log('8080 포트에서 서버 실행 중');
});

let text="집에가기 30분전"

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
app.get('/todos', (req, res) => {
    res.send(`${text}`);
});
