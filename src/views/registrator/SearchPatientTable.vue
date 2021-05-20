<template>
  <div>
    <el-input v-model="fioSearch" placeholder="ФИО пациента"></el-input>
    <el-input v-model="medicalPolicySearch" placeholder="Медицинский полис пациента"></el-input>
    <PatientTable :patients="patients" :row-click="openDetailPatient"/>
  </div>
</template>

<script>
import PatientTable from "@/components/tables/PatientTable";

export default {
  data() {
    return {
      fioSearch: "",
      medicalPolicySearch: "",
      patients: [
        {
          id: 1,
          lastname: "Жданов",
          firstname: "Максим",
          parentName: "Андреевич",
          medicalPolicy: "228691488"
        }
      ]
    }
  },
  methods: {
    openDetailPatient(row) {
      this.$router.push({ name: 'RegistrarPatientDetail', params: { id: row.id } });
    }
  },
  components: {PatientTable}
}
</script>

<style scoped>

</style>