
import express from 'express';
import configViewEngine from './configs/viewEngine';
require('dotenv').config()
import initwebRoute from './route/web';
const app = express();
const port = process.env.PORT || 8080
console.log(port)

//cau hinh View
configViewEngine(app);

// nhan du lieu tu form su dung bodyparser co san trong nodejs tu phien ban 4.16
app.use(express.urlencoded({ extended: true }));
app.use(express.json()) // To parse the incoming requests with JSON payloads





//Cau hinh Router
initwebRoute(app)
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

