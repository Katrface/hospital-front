<template>
  <MedicalCardFormItem :medical-card="medicalCard"/>
  <el-button :onclick="pushToMedData">Текущие медицинские данные</el-button>
  <el-button :onclick="pushToMedServices">Оказанные медицинские услуги</el-button>
  <el-button :onclick="pushToHospitalizeData">Данные о лечениях и госпитализации</el-button>

</template>

<script>
import MedicalCardFormItem from "@/components/form/MedicalCardFormItem";
export default {
  props: {
    medicalCard: {
      type: Object,
      required: true,
      default: {
        id: "",
        number: "",
        registrationDate: "",
      },
    }
  },
  methods: {
    pushToMedData() {
      this.pushTo("PatientMetrics");
    },
    pushToMedServices() {
      this.pushTo("");
    },
    pushToHospitalizeData() {
      this.pushTo("");
    },
    pushTo(name){
      this.$router.push({name, params: {id: this.medicalCard.id}})
    }
  },
  components: {MedicalCardFormItem}
}
</script>

<style scoped>

</style>