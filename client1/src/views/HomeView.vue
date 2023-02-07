<script setup>
import { onTimeStore } from '@/stores/ontime.js';
const store = onTimeStore();

onTimeStore().getStundenplan('5BHITM', '2022/23');
store.getAlleFaecher();
store.getUser(1);
store.getAktuellesFach('11:35', 'Montag');
store.getUserVerspaetungen(1);
// const t = {
//   "id": 19,
//   "filename": "fall-03.jpg",
//   "title": "Berries",
//   "color": "green",
//   "likes": 1,
//   "tags": ["branch", "fruit", "needles"]
// }
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
