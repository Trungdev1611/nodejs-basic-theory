// file nay viet nhung router
import express from 'express';
import homecontroller from './../controller/homecontroller'
let router = express.Router()

const initwebRoute = (app) => {
    router.get('/', homecontroller.getHomePage)
    router.get('/about', (req, res) => {
        res.send('Im Trung')
    })
    return app.use('/', router)
}

export default initwebRoute