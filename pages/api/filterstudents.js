import con from "../Components/dbcon"

export default function handler(req, res) {
    const { mincgpa, branch, studentsnumber } = req.query
    con.query('select * from students where cgpa >= ' + mincgpa + ' and branch = "' + branch + '"')
}
