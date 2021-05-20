<template>
  <el-form-item>
    <el-form-item label="Номер СНИЛСа">
      <el-input v-model="snils.number"></el-input>
    </el-form-item>
    <el-form-item label="СНИЛС действителен с">
      <el-date-picker
          v-model="snils.startDate"
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
    snils: {
      type: Object,
      required: true,
      default: {
        number: "",
        startDate: "",
      },
    }
  },
}
</script>

<style scoped>

</style>