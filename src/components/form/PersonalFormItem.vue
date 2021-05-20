<template>
  <el-form-item>
    <el-form-item label="Фамилия">
      <el-input v-model="personal.lastname" :readonly="readonly"></el-input>
    </el-form-item>
    <el-form-item label="Имя">
      <el-input v-model="personal.firstname" :readonly="readonly"></el-input>
    </el-form-item>
    <el-form-item label="Отчество">
      <el-input v-model="personal.parentName" :readonly="readonly"></el-input>
    </el-form-item>
    <el-form-item label="Дата рождения">
      <el-date-picker
          v-model="personal.birthDate"
          type="date"
          placeholder="Выберите дату"
          :disabled="readonly"
      >
      </el-date-picker>
    </el-form-item>
    <el-form-item label="Пол">
      <el-select v-model="personal.gender" placeholder="Выберите" :disabled="readonly">
        <el-option label="Муржской" value="m"></el-option>
        <el-option label="Женский" value="w"></el-option>
      </el-select>
    </el-form-item>
  </el-form-item>
</template>

<script>
export default {
  props: {
    readonly: {
      type: Boolean,
      default: false,
    },
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
  },
}
</script>

<style scoped>

</style>