// file nay viet nhung router
import express from 'express';
import homecontroller from './../controller/homecontroller'
let router = express.Router()
// noi chi ding cac router tuong ung 
const initwebRoute = (app) => {
    router.get('/', homecontroller.getHomePage)
    router.get('/about', (req, res) => {
        res.send('Im Trung')
    })
    router.get('/userdetails/:userId', homecontroller.getDetailUser)

    return app.use('/', router)
}

export default initwebRoute