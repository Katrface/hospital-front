<template>
  <el-form-item>
    <el-form-item label="Отделение">
      <el-select v-model="staff.department" placeholder="Выберите">
        <el-option
            v-for="item in departments"
            :key="item.value"
            :label="item.label"
            :value="item.value">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="Специальность">
      <el-select v-model="staff.specialization" placeholder="Выберите">
        <el-option
            v-for="item in specializations"
            :key="item.value"
            :label="item.label"
            :value="item.value">
        </el-option>
      </el-select>
    </el-form-item>
  </el-form-item>
</template>

<script>
export default {
  props: {
    staff: {
      type: Object,
      required: true,
      default: {
        department: "",
        specialization: "",
      }
    }
  },
  data() {
    return {
      departments: [{
        value: 'DOption1',
        label: 'DOption1'
      }, {
        value: 'DOption2',
        label: 'DOption2'
      }],
      specializations: [{
        value: 'Option1',
        label: 'Option1'
      }, {
        value: 'Option2',
        label: 'Option2'
      }],
    }
  }
}
</script>

<style scoped>

</style>