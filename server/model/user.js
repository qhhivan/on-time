const db = require('../db');

// MODEL
// USER DATEN

// GET
// Eigener Benutzer anhand der id/ Login
/*
select vorname, nachnamen, email, geburtsdatum, k.name, r.name from personen p
join klassen k on p.klassen_id = k.id
join rollen r on p.rollen_id = r.id
where p.id = 1;
*/
const getUser = async (id) => {
  const { rows } = await db.query(
    `select vorname, nachnamen, email, geburtsdatum, k.name, r.name from personen p
    join klassen k on p.klassen_id = k.id
    join rollen r on p.rollen_id = r.id
    where p.id = $1;`,
    [id],
  );
  return rows;
};

// POST
// Einen neuen benutzer erstellen

module.exports = { getUser };
