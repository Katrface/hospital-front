<template>
  <el-input type="text" placeholder="Поиск по ФИО"></el-input>
  <el-button @click="createDoctor">Добавить</el-button>
  <DoctorsTable :doctors="doctors" :row-click="onRowClick"/>
</template>

<script>
import DoctorsTable from "@/components/tables/DoctorsTable";
export default {
  data() {
    return {
      doctors: [{
        id: 1,
        lastname: "Жданов",
        firstname: "Максим",
        parentName: "Андреевич",
        specialization: "Прикладная информатика"
      }, {
        id: 2,
        lastname: "Жданов",
        firstname: "Максим",
        parentName: "Андреевич",
        specialization: "Прикладная информатика"
      }]
    }
  },
  methods: {
    onRowClick: (row) => alert(row.id)
  },
  components: {DoctorsTable}
}
</script>

<style scoped>

</style>