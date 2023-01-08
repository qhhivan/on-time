const db = require('../db');

// MODEL
// STUNDENPLAN DATEN

// GET
// Stundenplan anhand der klasse
/*
select f.name, f.abkuerzung, p.nachnamen, start, ende , tag, raum from plan_fach
join stundenplan s on plan_fach.stundenplan_id = s.id
join faecher f on plan_fach.fach_id = f.id
join personen p on plan_fach.personen_id = p.id
join klassen k on s.klassen_id = k.id
where k.name = '5BHITM' and schuljahr = '2022/23';
*/
const getStundenplan = async (klasse, sjahr) => {
  const { rows } = await db.query(
    `select f.name, f.abkuerzung, p.nachnamen, start, ende , tag, raum from plan_fach
join stundenplan s on plan_fach.stundenplan_id = s.id
join faecher f on plan_fach.fach_id = f.id
join personen p on plan_fach.personen_id = p.id
join klassen k on s.klassen_id = k.id
where k.name = $1 and schuljahr = $2;`,
    [klasse, sjahr],
  );
  return rows;
};

// Einzelne Fächer
// select name, abkuerzung from faecher;
const getFaecher = async () => {
  const { rows } = await db.query('select name, abkuerzung from faecher;');
  return rows;
};

module.exports = { getStundenplan, getFaecher };
