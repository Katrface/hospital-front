<template>
  <el-form-item>
    <el-form-item label="Серия">
      <el-input v-model="document.series"></el-input>
    </el-form-item>
    <el-form-item label="Номер">
      <el-input v-model="document.number"></el-input>
    </el-form-item>
    <el-form-item label="Дата выдачи">
      <el-date-picker
          v-model="document.startDate"
          type="date"
          placeholder="Выберите дату"
      >
      </el-date-picker>
    </el-form-item>
    <el-form-item label="Действителен по">
      <el-date-picker
          v-model="document.finishDate"
          type="date"
          placeholder="Выберите дату"
      >
      </el-date-picker>
    </el-form-item>
    <el-form-item label="Кем выдан">
      <el-input v-model="document.issuedBy"></el-input>
    </el-form-item>

  </el-form-item>
</template>

<script>
export default {
  props: {
    document: {
      type: Object,
      required: true,
      default: {
        series: "",
        number: "",
        startDate: "",
        finishDate: "",
        issuedBy: "",
      },
    }
  },
}

</script>

<style scoped>

</style>