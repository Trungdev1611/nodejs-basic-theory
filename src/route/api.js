import express from 'express'
import APIcontroller from './../controller/APIcontroller'
// noi chi ding cac router tuong ung voi api
let router = express.Router()

const createApi = (app) => {
    router.get('/users', APIcontroller.getAlluserfromApi)
    router.get('/users/:id', APIcontroller.getUserByid)
    router.post('/users', APIcontroller.postUser)
    router.put('/users/:id', APIcontroller.putUser)
    router.delete('/users/:id', APIcontroller.deletetUser)

    return app.use('/example/api', router)
}
export default createApi