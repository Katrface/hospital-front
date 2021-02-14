<template>
    <div class="wrapper">
        <el-form label-position="right" :model="form" class="form">
            <el-form-item label="Логин">
                <el-input v-model="form.login"></el-input>
            </el-form-item>
            <el-form-item label="Пароль">
                <el-input type="password" v-model="form.password" autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item class="buttons">
                <el-button type="primary" @click="onSubmit">Войти</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import {ElForm, ElFormItem, ElButton, ElInput} from "element-plus";

    export default {
        name: "LoginForm",

        data() {
            return {
                form: {
                    login: "",
                    password: ""
                }
            }
        },

        components: {
            ElForm,
            ElFormItem,
            ElButton,
            ElInput
        }
    }
</script>

<style scoped>
    .wrapper {
        position: relative;
        height: 100vh;
        width: 100vw;
        display: flex;
        align-items: center;
    }

    .form {
        height: 400px;
        width: 300px;
        margin: 0 auto;
    }

    .buttons {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .buttons button {
        width: 120px;
    }
</style>