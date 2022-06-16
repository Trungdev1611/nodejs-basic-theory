import connection from './../configs/connectDB'

let getAlluserfromApi = (req, res) => {
    connection.query(
        'SELECT * FROM `users`',
        function (err, results, fields) {

            let resultArray = Object.values(JSON.parse(JSON.stringify(results)))
            res.status(200).json({
                message: "ok",
                data: resultArray

            })
        }

    )

}
let getUserByid = (req, res) => {
    const id = req.params.id
    connection.query(
        'SELECT * FROM `users` WHERE id = ?', [id],
        function (err, results, fields) {

            let resultArray = Object.values(JSON.parse(JSON.stringify(results)))
            res.status(200).json({
                message: "ok",
                data: resultArray

            })
        }

    )
}
let postUser = (req, res) => {
    console.log('reqbody', req.body)
    let { firstName, lastName, email, address } = req.body
    console.log(firstName, lastName, email, address)
    if (!(firstName || lastName || email || address)) {
        return res.status(404).send("missing params")
    }

    connection.query(
        ' INSERT INTO users (firstName, lastName, email,address) VALUES (?,?,?,?)', [firstName, lastName, email, address],
        function (err, results, fields) {
            console.log(results);

        }
    )
    return res.status(201).send(req.body)

}
let putUser = (req, res) => {
    const id = req.params.id
    let { firstName, lastName, email, address } = req.body

    connection.query(
        'UPDATE users SET firstName = ?, lastName = ?,email = ?, address = ? WHERE id =?', [firstName, lastName, email, address, id],
        function (err, results, fields) {

        }
    )
    res.status(200).json({
        data: req.body

    })

}

let deletetUser = (req, res) => {
    const id = req.params.id


    connection.query(
        'DELETE FROM users WHERE id=?', [id],
        function (err, results, fields) {

        }
    )
    res.status(200).json({
        data: req.body

    })

}
module.exports = {
    getAlluserfromApi,
    getUserByid,
    postUser,
    putUser,
    deletetUser

}
