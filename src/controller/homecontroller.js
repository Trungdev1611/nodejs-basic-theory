import connection from './../configs/connectDB'

let getHomePage = (req, res) => {
    let resultArray

    //connnect DB
    connection.query(
        'SELECT * FROM `users`',
        function (err, results, fields) {

            console.log(results); // results contains rows returned by server
            resultArray = Object.values(JSON.parse(JSON.stringify(results)))
            console.log(resultArray)
            return res.render("test/index.ejs", { dataUser: resultArray })
        }

    )
}

let getDetailUser = (req, res) => {
    let { userId } = req.params
    connection.query(
        //truy van sql truyen tham so voi nodejs
        'SELECT * FROM `users` WHERE id = ?', [userId],
        function (err, results, fields) {

            console.log(results); // results contains rows returned by server
            return res.render("test/index.ejs", { dataUser: results })
        }

    )
}

let createNewUser = (req, res) => {
    console.log('createnewUser', req.body)
    const { firstName, LastName, Email, Adress } = req.body
    //insert data from form to sql
    connection.query(
        ' INSERT INTO users (firstName, lastName, email,address) VALUES (?,?,?,?)', [firstName, LastName, Email, Adress],
        function (err, results, fields) {
            console.log(results); // results contains rows returned by server
            // return res.render("test/index.ejs", { dataUser11: results })
        }
    )
    return res.redirect('/')  //chuyen huong ve trang home

}
let deleteUser = (req, res) => {
    const { deleteId } = req.params
    //query delete database
    connection.query(
        'DELETE FROM users WHERE id=?', [deleteId],
        function (err, results, fields) {
            console.log(results);

        }
    )
    return res.redirect('/')  //chuyen huong ve trang home
}

let editUser = (req, res) => {
    const { editId } = req.params
    //query delete database
    connection.query(
        'SELECT * FROM users WHERE id=?', [editId],
        function (err, results, fields) {
            console.log('edit', results);

            return res.render('test/edituser.ejs', { useredit: results[0] })  //chuyen huong ve trang home

        }

    )
}
let updateUser = (req, res) => {
    const { firstName, lastName, email, address, id } = req.body
    //insert data from form to sql
    connection.query(
        'UPDATE users SET firstName = ?, lastName = ?,email = ?, address = ? WHERE id =?', [firstName, lastName, email, address, id],
        function (err, results, fields) {
            console.log(results); // results contains rows returned by server
            // return res.render("test/index.ejs", { dataUser11: results })
        }
    )
    return res.redirect('/')  //chuyen huong ve trang home

}

module.exports = {
    getHomePage,
    getDetailUser,
    createNewUser,
    deleteUser,
    editUser,
    updateUser

}

