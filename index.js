const express = require("express");

//crear servidor express:

const app = express();

//rutas:
app.get("/", (req, res) => {

    res.json({
        ok: true
    })
})


//escuchar peticiones: 

app.listen(3003, () => {
    console.log(`Servidor corriendo en puerto ${3003}`);
})