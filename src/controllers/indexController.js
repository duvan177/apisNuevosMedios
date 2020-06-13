const { Pool } = require("pg");
const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "root",
  database: "apirest",
});
const setTemas = async (req, res) => {
  try {
    const response = await pool.query("SELECT * FROM  temas ");
    console.log(response.rows);
    res.status(200).json(response.rows);
  } catch (e) {
    console.log(e);
  }
};

const getCategorias = async (req , res) =>{
  try { 
      const response = await pool.query('SELECT * FROM categorias')
      console.log(response);
      res.json(response.rows);

  } catch (e) {
    console.log(e)
  }
}


// const getUserById = async (req, res) => {
//   try {
//     const id = req.params.id;
//     const response = await pool.query("SELECT * FROM users WHERE id = $1", [
//       id,
//     ]);
//     console.log(response);
//     res.json(response.rows);
//   } catch (e) {
//     console.log(e);
//   }
// };
// const insertUser = async (req, res) => {
//   try {
//     const { name, apellido, email } = req.body;
//     const response = await pool.query(
//       "INSERT INTO users (name,apellido, email) VALUES ($1,$2,$3)",
//       [name, apellido, email]
//     );
//     res.status(200).json({
//       mesagge: "user added successfully",
//       body: {
//         user: req.body,
//       },
//     });
//   } catch (e) {
//     console.log(e);
//   }
// };

// const updateUser = async (req,res) =>{
//     const id = req.params.id;
//     const { name, apellido , email} = req.body;

//     try{
//         const response = await pool.query('UPDATE users SET name = $1, apellido = $2, email = $3 WHERE id = $4',[name, apellido ,email , id]);
//         console.log(response)
        
//         res.status(200).json({
//             mesagge: response.rowCount > 0 ? 'user update successfully' :'user update fail.' ,
//             body: {
//               user: req.body,
//             },
//           });
//     }catch (e){
//         console.log(e)
//     }
// }
// const deleteUser = async (req, res) => {
//   try {
//     const id = req.params.id;
//     const response = await pool.query("delete from users where id = $1", [id]);
//     res.status(200).json({
//         mesagge: "user deleted successfully",
//         body: {
//           user: req.body,
//         },
//       });
//   } catch (e) {
//       console.log(e);
//   }
// };
module.exports = {
  setTemas,
    getCategorias

};
