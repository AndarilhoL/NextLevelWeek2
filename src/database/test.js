const Database = require('./db.js');
const createProffy = require('./createProffy')

Database.then(async(db) => {
    //Inserir Dados

    proffyValue = {
        name: 'Léozin',
        avatar: 'https://avatars0.githubusercontent.com/u/43413333?s=460&u=06692cc67bcfe6ba8a8df39380e8caef455d865d&v=4',
        whatsapp: '22997420969',
        bio: 'Eu sou o Léo. Blah Blah blah',

    }

    classValue = {
        subject: 5,
        cost: "20",
    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

    //await createProffy(db, {proffyValue,classValue,classScheduleValues})

    //Consultar Dados

    //Todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys");
    //console.log(selectedProffys);

    //Classes de um determindo Proffy
    //Trazer também os dados do proffy
    const seletClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    //console.log(seletClassesAndProffys)

    const selectClassesSchedules = await db.all(`
        SELECT classes_schedule.*
        FROM classes_schedule

        WHERE classes_schedule.class_id  = 1
        AND classes_schedule.weekday = "0"
        AND classes_schedule.time_from <= "520"
        AND classes_schedule.time_to >= 520
    `)

    console.log(selectClassesSchedules);
})