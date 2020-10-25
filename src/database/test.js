const Database = require('./db.js');

Database.then(function(db){
    //inserir dados na tabela
    
    db.run(`
    INSERT INTO orphanages (  
            lat,
            lng,
            name,
            whatsapp,
            images,
            instructions,
            opening_hours,
            open_on_weekends
        ) VALUES (  
           "-3.7581102", 
           "-38.5694252",
           "Lar das meninas",
           "Presta assitência a crianças de 06 a 15 anos que se encontram em situação de risco e/ou vulnerabilidade social",
           "https://images.unsplash.com/photo-1576025773492-cc2eb828c42a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9", 
           "Venha como se sentir a vontade e traga muito amor e paciência para dar",
           "Horário de visitas das 8h até ás 18h",
           "1"
        )
    `)
}
)