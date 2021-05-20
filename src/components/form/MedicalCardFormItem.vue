<template>
  <el-form-item>
    <el-form-item label="Номер">
      <el-input v-model="medicalCard.number"></el-input>
    </el-form-item>
    <el-form-item label="Дата регистрации">
      <el-date-picker
          v-model="medicalCard.registrationDate"
          type="date"
          placeholder="Выберите дату"
      >
      </el-date-picker>
    </el-form-item>
  </el-form-item>
</template>

<script>
export default {
  props: {
    medicalCard: {
      type: Object,
      required: true,
      default: {
        number: "",
        registrationDate: "",
      },
    }
  },
}
</script>

<style scoped>

</style>