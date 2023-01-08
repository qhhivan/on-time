const db = require('../db');

// MODEL
// VERSPÄTUNGEN DATEN

// GET
// Aktueles Fach/ START/ ENDE / LEHRER anhand von Uhrzeit und Tag
/*
select f.name, f.abkuerzung, start, ende , tag, p.nachnamen from plan_fach
join stundenplan s on plan_fach.stundenplan_id = s.id
join faecher f on plan_fach.fach_id = f.id
join personen p on plan_fach.personen_id = p.id
join klassen k on s.klassen_id = k.id
where k.name = $1 and start < '11:40' and '11:40'< ende and tag = 'Montag';
*/

const getAktuellesFach = async (klasse, uhrzeit, tag) => {
  console.log(klasse, uhrzeit, tag);
  const { rows } = await db.query(
    `select f.name, f.abkuerzung, start, ende , tag, p.nachnamen from plan_fach
join stundenplan s on plan_fach.stundenplan_id = s.id
join faecher f on plan_fach.fach_id = f.id
join personen p on plan_fach.personen_id = p.id
join klassen k on s.klassen_id = k.id
where k.name = $1 and start < $2 and $2 < ende and tag = $3;`,
    [klasse, uhrzeit, tag],
  );
  return rows;
};

// Alle verspätungen von einer Person
/*
select p.vorname, p.nachnamen, v.start, v.ende, v.foto, v.begruendung
from personen p
join verspaetungen v on p.id = v.personen_id
where p.id = 1;
*/
const getVerspaetungen = async (id) => {
  const { rows } = await db.query(
    `select p.vorname, p.nachnamen, v.start, v.ende, v.foto, v.begruendung
from personen p
join verspaetungen v on p.id = v.personen_id
where p.id = $1;`,
    [id],
  );
  return rows;
};

// POST
// Verspätung
const postVerspaetung = async ({
  start,
  ende,
  foto,
  person,
  begruendung,
  datum,
}) => {
  await db.query(
    'INSERT INTO verspaetungen (start, ende, foto, personen_id, begruendung, datum) values($1, $2, $3, $4, $5, $6);',
    [start, ende, foto, person, begruendung, datum],
  );
  // values ('11:20', '11:40', 'Foto1', 2, 'Musste lernen', '2022-05-06')
  return 'Erfolgreich hinzugefügt';
};
// Foto
// Standort
// Begründung

module.exports = { getAktuellesFach, getVerspaetungen, postVerspaetung };
