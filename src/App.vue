<template>
  <!--
    <registration-table></registration-table>
    <login-form></login-form>
  -->
  <!--  <registration-form></registration-form>-->
  <el-container>
    <el-aside>
      <Menu/>
    </el-aside>
    <el-main>
      <router-view/>
    </el-main>
  </el-container>
</template>

<script>
import {ElButton, ElContainer, ElAside, ElMain} from 'element-plus';
import LoginForm from "./views/LoginForm";
import RegistrationTable from "./views/RegistrationTable";
import RegistrationForm from "./views/RegistrationForm";
import Menu from "./views/menu/Menu";

export default {
  organizationName: 'App',
  components: {
    Menu,
    RegistrationForm,
    RegistrationTable,
    LoginForm,
    ElButton,
    ElContainer,
    ElAside,
    ElMain,
  }
}
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}

.el-container {
  min-height: 100vh;
}

.el-aside {
  background-color: #D3DCE6;
}

.el-main {
  background-color: #E9EEF3;
}
</style>
