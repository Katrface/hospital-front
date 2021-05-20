<template>
  <el-form-item>
    <el-form-item label="Рост (см)">
      <el-input v-model="patientMetrics.height"></el-input>
    </el-form-item>
    <el-form-item label="Вес (кг)">
      <el-input v-model="patientMetrics.weight"></el-input>
    </el-form-item>
    <el-form-item label="Статус пациента">
      <el-select v-model="patientMetrics.status" placeholder="Выберите">
        <el-option
            v-for="item in statuses"
            :key="item.value"
            :label="item.label"
            :value="item.value">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="Дата замера">
      <el-date-picker
          v-model="patientMetrics.inspectDate"
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
    patientMetrics: {
      type: Object,
      required: true,
      default: {
        height: "",
        weight: "",
        status: "",
        inspectDate: "",
      },
    }
  },

  data() {
    return {
      statuses: [{
        value: 'DOption1',
        label: 'DOption1'
      }, {
        value: 'DOption2',
        label: 'DOption2'
      }],
    }
  }

}
</script>

<style scoped>

</style>