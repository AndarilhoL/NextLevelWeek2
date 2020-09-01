//Servidor
const express = require('express');
const server = express();

const { pageLanding, pageStudy, pageGiveClasses, saveClasses, pageSucess } = require('./pages');


//Configurar Nunjucks
const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})


//Impedir que fique os dados trafegando pela URL
server.use(express.urlencoded({ extended: true }));

//Configurar Arquivos estáticos (css,scripts,images)
server.use(express.static("public"))

    //Configurar Rotas da aplicação
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)
    .post("/save-classes", saveClasses)
    .get("/sucess", pageSucess)

    .listen(5500);