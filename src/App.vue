<template>
<!--  <login-form></login-form>-->
<!--  <registration-table></registration-table>-->
  <registration-form></registration-form>
</template>

<script>
import { ElButton } from 'element-plus';
import LoginForm from "./components/LoginForm";
import RegistrationTable from "./components/RegistrationTable";
import RegistrationForm from "./components/RegistrationForm";

export default {
  name: 'App',
  components: {
    RegistrationForm,
    RegistrationTable,
    LoginForm,
    ElButton
  }
}
</script>

<style lang="scss">

</style>
