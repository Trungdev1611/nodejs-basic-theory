
import express from 'express';
import configViewEngine from './configs/viewEngine';
require('dotenv').config()
import initwebRoute from './route/web';
const app = express();
const port = process.env.PORT || 8080
console.log(port)

//cau hinh View
configViewEngine(app);

//Cau hinh Router
initwebRoute(app)
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

