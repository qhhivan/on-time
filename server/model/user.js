/* eslint-disable camelcase */
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

// GET KLASSEN_ID für neuen User
const getKlassenID = async (klasse) => {
  const { rows } = await db.query('select id from klassen where name = $1;', [
    klasse,
  ]);
  // console.log(rows[0].id);
  return rows;
};
// POST
// Einen neuen benutzer erstellen
const postUser = async ({
  vorname,
  nachnamen,
  email,
  geburtsdatum,
  klasse,
  rolle,
}) => {
  let klassen_id = '';
  let rollen_id = '';
  if (rolle != null || rolle === undefined) {
    if (rolle.toLowerCase() === 'schüler') rollen_id = 1;
    else rollen_id = 2;
  }
  klassen_id = await getKlassenID(klasse);
  klassen_id = klassen_id[0].id;
  console.log(klassen_id);
  await db.query(
    'INSERT INTO personen (vorname, nachnamen, email, geburtsdatum, klassen_id, rollen_id)  values($1, $2, $3, $4, $5, $6);',
    [vorname, nachnamen, email, geburtsdatum, klassen_id, rollen_id],
  );
  return 'Erfolgreich hinzugefügt';
};
module.exports = { getUser, postUser, getKlassenID };
