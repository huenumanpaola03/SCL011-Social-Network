//listo no editar

const express = require ("express");
const app = express();
const port = 3000;

app.use(express.static(__dirname+"/src"));

app.get("/", (request, Response) =>{
    Response.sendFile (__dirname + "/index.html");
});

app.listen(port, () => {
    console.log("Server express ready");
});
