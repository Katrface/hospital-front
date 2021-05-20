<template>
  <el-descriptions border direction="vertical">
    <el-descriptions-item label="Фамилия">{{ personal.lastname }}</el-descriptions-item>
    <el-descriptions-item label="Имя">{{ personal.firstname }}</el-descriptions-item>
    <el-descriptions-item label="Отчество">{{ personal.parentName }}</el-descriptions-item>
    <el-descriptions-item label="Дата рождения">{{ personal.birthDate }}</el-descriptions-item>
    <el-descriptions-item label="Пол">{{ personal.gender }}</el-descriptions-item>
  </el-descriptions>
</template>

<script>
export default {
  props: {
    personal: {
      type: Object,
      required: true,
      default: {
        lastname: "",
        firstname: "",
        parentName: "",
        birthDate: "",
        gender: "",
      }
    }
  }
}
</script>

<style scoped>

</style>