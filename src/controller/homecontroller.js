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

module.exports = {
    getHomePage,
    getDetailUser,
    createNewUser
}

