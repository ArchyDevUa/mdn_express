let express = require('express')
let router = express.Router();

//Home page route.
router.get('/',(req,res)=>{
    res.send("Wiki home page")
})

//About page route.
router.get('/about',(req,res)=>{
    res.send('About this wiki')
})

// router.post("/",(req,res)=>{
//     res.send("You try to put something on server")
// })

//Route paths
//Набиваю руку

//? : Конечная точка должна иметь 0 или 
//1 предыдущий символ. Так, путь маршрута 
//'/ab?cd' соответствует конечным точкам 
//acd или abcd (т.е. b может присутствовать или нет).

// router.get('/ab?cd',(req,res) => {
//     res.send(req.originalUrl)
// })

// + : Конечная точка должна иметь 1 или более предыдущих символов.
// Так, путь маршрута '/ab+cd' будет соответствовать конечным точкам abcd, abbcd, abbbcd, и так далее.

// router.get("/a?b+cd",(req,res)=>{
//     res.send(req.originalUrl)
// })

// * : Конечная точка может содержать произвольную строку там, где находится символ '*'.
// Так, путь маршрута '/ab*cd' будет соответствовать конечным точкам abcd, abXcd, abSOMErandomTEXTcd, и так далее.

// router.get('/ab*cd',(req,res)=>{
//     res.send(req.originalUrl)
// })

// () : Группировка символов для выполнения другой операции.
//  Так, '/ab(cd)?e' выполнит ?-проверку (0 или 1 появление) для группы (cd) — соответствия таковы: abe и abcde.

// router.get('/ab(cd)?e',(req,res)=>{
//     res.send(req.originalUrl)
// })

// Route parameters

// router.get("/users/:user/books/:book", (req, res) => {
//     // Access userId via: req.params.userId
//     // Access bookId via: req.params.bookId
//     res.send(req.params);
//   });




module.exports = router;