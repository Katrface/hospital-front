<template>
  <el-form-item>
    <el-form-item label="Номер телефона" aria-readonly="true">
      <el-input v-model="contactInfo.phone"></el-input>
    </el-form-item>
    <el-form-item label="Email">
      <el-input v-model="contactInfo.email"></el-input>
    </el-form-item>
  </el-form-item>
</template>

<script>
export default {
  props: {
    contactInfo: {
      type: Object,
      required: true,
      default: {
        phone: "",
        email: "",
      },
    }
  },
}
</script>

<style scoped>

</style>