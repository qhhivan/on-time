import { ref } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

export const onTimeStore = defineStore('ontimestore', () => {
  // Einen Stundenplan (Anhand der klasse und Schuljahr)
  const stundenplan = ref([]);
  const getStundenplan = async (klasse, sjahr) => {
    const rows = await axios.get(
      `http://localhost:3000/stundenplan/${klasse}/${sjahr}`,
    );
    stundenplan.value = rows.data;
    console.log(stundenplan.value);
  };

  // Die einzelnen Fächer (Name, Abkürzung)
  const alleFaecher = ref([]);
  const getAlleFaecher = async () => {
    const rows = await axios.get(`http://localhost:3000/stundenplan/faecher`);
    alleFaecher.value = rows.data;
    console.log(alleFaecher.value);
  };

  // Eigenen User anhand der id
  const user = ref([]);
  const getUser = async (id) => {
    const rows = await axios.get(`http://localhost:3000/user/${id}`);
    user.value = rows.data;
    console.log(user.value);
  };

  // User erstellen
  // Aktuelles Fach
  const aktuellesFach = ref([]);
  const getAktuellesFach = async (time, tag) => {
    const rows = await axios.get(
      `http://localhost:3000/verspaetungen/5BHITM?uhrzeit=${time}&tag=${tag}`,
    );
    // Uhrzeit format: 11:30
    aktuellesFach.value = rows.data;
    console.log(aktuellesFach.value);
  };

  // Alle verspätungen von unserem User
  const userVerspaetungen = ref([]);
  const getUserVerspaetungen = async (id) => {
    const rows = await axios.get(`http://localhost:3000/verspaetungen/${id}`);
    userVerspaetungen.value = rows.data;
    console.log(userVerspaetungen.value);
  }; // Fehler am Server

  // Verspätung erstellen

  // const fallimages = ref([]);

  // const getAll = async () => {
  //   const res = await axios.get('/fall');
  //   fallimages.value = res.data;
  // };

  // const updateLikes = async (item) => {
  //   await axios.patch(`/fall/${item.id}`, item);
  // };

  return {
    stundenplan,
    alleFaecher,
    user,
    aktuellesFach,
    userVerspaetungen,
    getStundenplan,
    getAlleFaecher,
    getUser,
    getAktuellesFach,
    getUserVerspaetungen,
  };
});
