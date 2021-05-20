<template>
  <el-table
      row-key="id"
      :data="patients"
      @row-click="rowClick"
      min-height="100">
    <el-table-column
        prop="lastname"
        label="Фамилия">
    </el-table-column>
    <el-table-column
        prop="firstname"
        label="Имя">
    </el-table-column>
    <el-table-column
        prop="parentName"
        label="Отчество">
    </el-table-column>
    <el-table-column
        prop="medicalPolicy"
        label="Номер медицинского полиса">
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  props: {
    rowClick: {
      type: Function,
    },
    patients: {
      type: Array,
      default: [
        {
          id: 1,
          lastname: "Жданов",
          firstname: "Максим",
          parentName: "Андреевич",
          medicalPolicy: "228691488"
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>