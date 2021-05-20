<template>
  <el-form>
    <div style="font-size: x-large;">Медицинские данные</div>
    <el-button @click="back">Назад</el-button>
    <el-button>Изменить текущую запись</el-button>
    <el-button>Сохранить как новую запись</el-button>
    <PersonalDescription :personal="patient.personal"/>
    <PatientMetricsFormItem :patient-metrics="patient.metrics"/>
  </el-form>
</template>

<script>
import PatientMetricsFormItem from "@/components/form/PatientMetricsFormItem";
import PersonalFormItem from "@/components/form/PersonalFormItem";
import PersonalDescription from "@/components/description/PersonalDescription";

export default {
  props: ['id'],
  data() {
    return {
      patient: {
        personal: {
          lastname: "",
          firstname: "",
          parentName: "",
          birthDate: "",
          gender: "",
        },
        metrics: {
          height: "",
          weight: "",
          status: "",
          inspectDate: "",
        }
      }
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    }
  },
  components: {PersonalDescription, PersonalFormItem, PatientMetricsFormItem}
}
</script>

<style scoped>

</style>