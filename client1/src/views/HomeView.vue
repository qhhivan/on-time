<script setup>
import { onTimeStore } from '@/stores/ontime.js';
const store = onTimeStore();

// STORE TEST
// vlt musst du await einbauen/ es wegeben
console.log('stundenplan');
await store.getStundenplan('5BHITM', '2022/23');

console.log('alle fächer');
await store.getAlleFaecher();

console.log('user');
await store.getUser(1);

console.log('aktuelles fach');
await store.getAktuellesFach('11:35', 'Montag');

console.log('Versp');
await store.getUserVerspaetungen(1);

// POST
store.postVerspaetung({
  start: '9:30',
  ende: '9:50',
  foto: 'HTLWW',
  person: 1,
  begruendung: '123',
  datum: '2022-10-23',
});

store.postUser({
  vorname: 'Max',
  nachnamen: 'Mustermann',
  email: 'mustermail@gmail.com',
  geburtsdatum: '2004-06-05',
  klasse: '7A',
  rolle: 'Schüler',
});

// Fall Beispiel Psik
const columns = [
  {
    name: 'image',
    field: 'filename',
    align: 'center',
    label: 'Bild',
    sortable: false,
    format: (filename) => `/pictures/${filename}`,
  },
  {
    name: 'title',
    field: 'title',
    align: 'center',
    label: 'Bildname',
    sortable: true,
  },
  {
    name: 'color',
    field: 'color',
    align: 'center',
    label: 'Farbe',
    sortable: true,
  },
  {
    name: 'likes',
    field: 'likes',
    align: 'right',
    label: 'Likes',
    sortable: true,
  },
  {
    name: 'tags',
    field: 'tags',
    align: 'left',
    label: 'Tags',
    sortable: false,
    // format: (t) => t.join(", ")
  },
  {
    name: 'actions',
    align: 'center',
    label: 'Aktionen',
    sortable: false,
  },
];

const addLikes = (item) => {
  item.likes += 1;
  store.updateLikes(item);
};
</script>

<template>
  <div class="row justify-center">
    <p class="text-h5 fit text-center">Home</p>
    <q-table :rows="store.fallimages" :columns="columns" row-key="id">
      <template v-slot:body-cell-image="props">
        <q-td :props="props">
          <!-- {{props.row.filename}}
        {{props.value}} -->
          <img :src="`/pictures/${props.row.filename}`" />
        </q-td>
      </template>

      <template v-slot:body-cell-tags="props">
        <q-td :props="props">
          <ul>
            <li v-for="tag of props.value" :key="tag">{{}}</li>
          </ul>
        </q-td>
      </template>

      <template #body-cell-actions="props">
        <q-td :props="props">
          <q-btn :disabled="props.row.likes >= 15" @click="addLikes(props.row)"
            >Likes +1</q-btn
          >
        </q-td>
      </template>
    </q-table>
  </div>
</template>
