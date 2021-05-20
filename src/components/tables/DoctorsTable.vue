<template>
  <el-table
      row-key="id"
      :data="doctors"
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
        prop="specialization"
        label="Специальность">
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  props: {
    doctors: {
      type: Array,
      required: true,
    },
    rowClick: {
      type: Function,
    }
  },
}
</script>

<style scoped>

</style>