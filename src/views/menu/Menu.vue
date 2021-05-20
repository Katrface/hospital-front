<template>
  <el-menu @select="onSelectItem">
    <el-submenu index="1">
      <template #title><i class="el-icon-user"></i>Регистратор</template>
      <el-menu-item-group title="Главное меню">
        <el-menu-item index="1-1">Таблица пациентов</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Формы">
        <el-menu-item index="1-2">Форма регистрации нового пациента</el-menu-item>
        <el-menu-item index="1-3">Форма изменения данных пациента</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="2">
      <template #title><i class="el-icon-notebook-2"></i>Доктор</template>
      <el-menu-item-group title="Главное меню">
        <el-menu-item index="2-1">Таблица пациентов доктора</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Формы">
        <el-menu-item index="2-2">Компонент просмотра данных о пациенте</el-menu-item>
        <el-menu-item index="2-3">Компонент модифицирования данных о пациенте</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="3">
      <template #title><i class="el-icon-school"></i>Главврач</template>
      <el-menu-item-group title="Основное">
        <el-menu-item index="3-1">Таблица докторов</el-menu-item>
        <el-menu-item index="3-2">Таблица пациентов</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Формы">
        <el-menu-item index="3-3">Компонент просмотра данных о пациенте</el-menu-item>
        <el-menu-item index="3-4">Компонент просмотра данных о доктарах</el-menu-item>
        <el-menu-item index="3-5">Компонент модифицирования данных о пациенте</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {

  methods: {
    onSelectItem(index){
      const router = Object.assign(Object.create(null), {
        "1-1": "/registrar/",
        "3-1": "/doctor/",

      });
      const path = router[index] ? router[index] : index;
      this.$router.push(path);
    }
  }
}
</script>

<style scoped>

</style>