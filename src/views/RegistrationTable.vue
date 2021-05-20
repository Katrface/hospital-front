<template>
  <div class="wrapper">
    <el-input type="text" placeholder="Поиск по ФИО"></el-input>
    <el-date-picker
        type="date"
        placeholder="Дата обращения">
    </el-date-picker>
    <el-button @click="createVisit">Добавить</el-button>
    <el-table
        row-key="id"
        :data="visits"
        @row-click="selectVisit"
        min-height="100">
      <el-table-column
          prop="patient.name"
          label="ФИО">
      </el-table-column>
      <el-table-column
          prop="patient.dateOfBirthday"
          label="Дата рождения">
      </el-table-column>
      <el-table-column
          prop="dateOfRequest"
          label="Дата обращения">
      </el-table-column>
      <el-table-column
          prop="status"
          label="Статус">
      </el-table-column>
      <el-table-column
          prop="doctor"
          label="Лечащий врач">
      </el-table-column>
    </el-table>
  </div>

</template>

<script>
import {ElButton, ElInput, ElTable, ElTableColumn} from "element-plus";

export default {
  organizationName: "RegistrationTable",
  data() {
    return {
      visits: [
        {
          patient: {
            name: "Иванов Иван Иванович",
            dateOfBirthday: "01.01.2020"
          },
          dateOfRequest: "01.01.2020",
          status: "Госпитализирован",
          doctor: "Петров Петор Пертрович"
        },
        {
          patient: {
            name: "Иванов Иван Иванович",
            dateOfBirthday: "01.01.2020"
          },
          dateOfRequest: "01.01.2020",
          status: "Плановое",
          doctor: ""
        },
      ]
    }
  },
  components: {
    ElTable,
    ElTableColumn,
    ElInput,
    ElButton
  }
}
</script>

<style scoped>
.wrapper {
  margin: 0 auto;
  width: 1170px;
}
</style>