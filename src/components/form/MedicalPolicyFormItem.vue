<template>
  <el-form-item>
    <el-form-item label="Номер">
      <el-input v-model="medicalPolicy.number"></el-input>
    </el-form-item>
    <el-form-item label="Название организации">
      <el-input v-model="medicalPolicy.organizationName"></el-input>
    </el-form-item>
    <el-form-item label="Дата регистрации">
      <el-date-picker
          v-model="medicalPolicy.registrationDate"
          type="date"
          placeholder="Выберите дату"
      >
      </el-date-picker>
    </el-form-item>
    <el-form-item label="Действителен с">
      <el-date-picker
          v-model="medicalPolicy.startDate"
          type="date"
          placeholder="Выберите дату"
      >
      </el-date-picker>
    </el-form-item>
    <el-form-item label="Действителен по">
      <el-date-picker
          v-model="medicalPolicy.finishDate"
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
    medicalPolicy: {
      type: Object,
      required: true,
      default: {
        number: "",
        organizationName: "",
        registrationDate: "",
        startDate: "",
        finishDate: "",
      },
    }
  },
}
</script>

<style scoped>

</style>