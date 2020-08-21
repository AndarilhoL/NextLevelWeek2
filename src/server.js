const proffys = [
    {
        name: "Yanka Martins",
        avatar: "images/photos/yanka.jpg",
        whatsapp: "22981715067",
        bio: "Fã de Koselleck, Gardner e Poe.Wicca, Mitologia Nórdica, povos antigos ou Builds pra Sonna. Estes são alguns dos vários estudos de domínio da nossa Proffy, Mais de 2000 alunos já descobriram que O Livro das Sombras está bem iluminado e ouviram falar sobre História dos Conceitos",
        subject: "História e Antigas Religiões",
        cost: "20",
        weekday: [5],
        time_from: [64800],
        time_to: [68400]
    },
    {
        name: "Nycholas Trento",
        avatar: "images/photos/nycks.jpg",
        whatsapp: "22998246072",
        bio: "Léo pegou essa imagem sem me pedir... será processado. Rei dos processos, torna tudo processo. Pelo Artigo 666-21 O Itachi solaria o Madara",
        subject: "Direito",
        cost: "27",
        weekday: [2],
        time_from: [64800],
        time_to: [68400]
    },
    {
        name: "Daniel Cunha",
        avatar: "images/photos/daniconha.jpg",
        whatsapp: "22988014119",
        bio: "Lhe ensinarei a técnica sagrade de fumar um cigarrinho pelo dente que seus amigos zoam por ser separado, comigo você vai entender que Bruno e Marrone é o Pearl Jam do Sertanejo",
        subject: "Fumar Cigarro",
        cost: "15",
        weekday: [2],
        time_from: [64800],
        time_to: [68400]
    },
    {
        name: "Edi (Zédi)",
        avatar: "images/photos/zediboy.jpg",
        whatsapp: "22988014119",
        bio: "Vou te mostrar como encontrar os melhores locais pra um banho de rio e ficar suavão com uma breja e um cigarrinho no campo semente",
        subject: "King of Banho de Rio",
        cost: "18",
        weekday: [2],
        time_from: [64800],
        time_to: [68400]
    }
];

const subjects = [
    "Artes",
    "Biologia",
    "Ciência",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
];

const weekdays = [
    "Domingo",
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sábado",
];

function getSubject(subjectNumber) {
    const arrayPosition = +subjectNumber -1
    return subjects[arrayPosition]
}

function pageLanding(req, res) {
    return res.render("index.html");
}

function pageStudy(req, res) {
    const filters = req.query;
    return res.render("study.html",{ proffys , filters, subjects, weekdays });
}

function pageGiveClasses(req, res) {
    const data = req.query;
    
    //Se houver Dados
    const isNotEmpty = Object.keys(data).length != 0;
    if (isNotEmpty) {

        console.log(getSubject(data.subject))
        data.subject = getSubject(data.subject);

        //Adicionard Dados ao Objeto Proffys
        proffys.push(data);

        return res.redirect("/study")
    }

    return res.render("give-classes.html", {subjects, weekdays});
}


const express = require('express');
const server = express();


//Configurar Nunjucks
const nunjucks = require('nunjucks');
nunjucks.configure('src/views',{
    express: server,
    noCache: true, 
})


//Configurar Arquivos estáticos (css,scripts,images)
server.use(express.static("public"))

//Configurar Rotas da aplicação
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)
    .listen(5500);