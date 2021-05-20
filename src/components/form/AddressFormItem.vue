<template>
  <el-form-item>
    <el-form-item label="Адрес регистрации">
      <el-input v-model="locationDate.registrationAddress"></el-input>
    </el-form-item>
    <el-form-item label="Фактический адрес проживания">
      <el-input v-model="locationDate.actualAddress"></el-input>
    </el-form-item>
  </el-form-item>
</template>

<script>
export default {
  props: {
    locationDate: {
      type: Object,
      required: true,
      default: {
        registrationAddress: "",
        actualAddress: "",
      }
    }
  }
}
</script>

<style scoped>

</style>