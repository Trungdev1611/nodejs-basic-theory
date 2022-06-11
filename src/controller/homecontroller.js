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

    );


}

module.exports = {
    getHomePage
}

