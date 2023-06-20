const express = require("express");
const app = express();

const urlencodedParser = express.urlencoded({extended: false});

app.get("/", function(request, response){
    response.sendFile(__dirname + "/index.html");
});

app.post("/", urlencodedParser, function(request, response){
    let kanswer = request.body.keyword;
    let k = module.exports = require("./keywords.js");

    if (kanswer in k){
        let urlAnsw = JSON.stringify(k[kanswer]);
        let clearUrl = urlAnsw.replaceAll(/[\[\]\"]/g, "");
        
        let urlsArray = [];
        urlsArray = clearUrl.split(",");

        function addUrlToList(){
            let content = "";
            for (let i = 0; i < urlsArray.length; i++){
                content += 
                `<input type="radio" id="url${i}" name="chooseUrl"/>
                <label for="url${i}">${urlsArray[i]}</label><br><br>`;
            }
            return content;
        }

        response.send(` <h1>Список ссылок:</h1>
                            <form method="get">
                                <label>Выберите ссылку ниже:</label><br>
                                    ${addUrlToList()}
                                <button type="submit" id="submit">Отправить</button>
                            </form>
        `);
    }
});

app.listen(3000, () => console.log("Server has been started!"));











// app.post("/", urlencodedParser, function(request, response){
//     if(!request.body) return response.sendStatus(400);
//     console.log(request.body);
//     response.send(`${request.body.keyword}`);
// });

// let kanswer = `${JSON.stringify(request.body.keyword)}`;

// let answer =  fs.readFile("keywords.json", "utf8",
// function(error, data){
//     console.log("Данные из файла keywords.json");
//     if (error) throw error;
//     // console.log(data); // выводим считанные данные
// });
// response.send(`${answer}`);

// for (let key in k){
//     if (JSON.stringify(key) == JSON.stringify(kanswer)){
//         console.log(k[key]);
//     }
// }

// response.send(typeof(kanswer));
// console.log(kanswer);
// let strs = JSON.stringify(k);
// response.send(`${strs})}`);
// response.send(`${k[kanswer]}`);


// works

// const express = require("express");
// const app = express();
// const fs = require("fs");

// // создаём парсер для данных application/x-www-form-urlencoded
// const urlencodedParser = express.urlencoded({extended: false});

// app.get("/", function(request, response){

//     response.sendFile(__dirname + "/index.html");
// });
// app.post("/", urlencodedParser, function(request, response){
//     if(!request.body) return response.sendStatus(400);
//     console.log(request.body);
//     response.send(`${request.body.keyword}`);
// });

// ///////

// const express = require("express");
// const app = express();

// // создаём парсер для данных в формате json
// const jsonParser = express.json();

// app.post("/urls", jsonParser, function (request, response){
//     console.log(request.body);
//     if(!request.body) return response.sendStatus(400);

//     response.json(request.body); // отправляем  пришедший ответ обратно
// });
// app.get("/", function(request, response){
//     response.sendFile(__dirname + "/index.html");
// });

// app.listen(3000, () => console.log("Server has been started!"));






// const url = "wss://localhost:3000/";
// const connection = new WebSocket(url);
// const words = require("/keywords.json");

// connection.onopen = () => {
//     connection.send(words);
// }

// const axios = require('axios');
// const getUrls = async () => {
//     try {
//         return await axios.get('keywords.json');
//     }
//     catch (error) {
//         console.error(error);
//     }
// }
// const showUrls = async () => {
//     const urls = await getUrls();
//     if (urls.data.message) {
//         console.log(Object[1]);
//     }
// }
// showUrls();