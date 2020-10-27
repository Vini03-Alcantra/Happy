const Database = require('./db.js');
const saveOrphanage = require('./saveOrphanage.js');

Database.then(async db => {
    //Inserir dados na tabela

    await saveOrphanage(db, {        
        lat:"-3.7121540",
        lng:"-38.5982291",
        name:"Lar da Paz",
        about:"Presta assitência a crianças de 06 a 15 anos que se encontram em situação de risco e/ou vulnerabilidade social",        
        whatsapp: "(89)90943-5695",
        images:[
            "https://images.unsplash.com/photo-1576025773492-cc2eb828c42a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1602958169883-016fdb9458dc?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions:"Venha como se sentir a vontade e traga muito amor e paciência para dar",
        opening_hours:"Horário de visitas das 8h até ás 18h",
        open_on_weekends: "1"     
    });

    //consultar dados na tabela
    const selectedOrphanages = await db.all("select * FROM orphanages")
    console.log(selectedOrphanages)

    //consultar somente um orfanato pelo id  
    const orphanage = await db.all('Select * from orphanages where id = "1"')
    console.log(orphanage)
}
)