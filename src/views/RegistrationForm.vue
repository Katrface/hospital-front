<template>
    <div class="wrapper">
        <el-form>
            <el-form-item>
                <el-date-picker
                        type="date"
                        placeholder="Дата прибытия">
                </el-date-picker>

                <el-time-picker
                        v-model="value1"
                        :disabled-hours="disabledHours"
                        :disabled-minutes="disabledMinutes"
                        :disabled-seconds="disabledSeconds"
                        placeholder="Время прибытия">
                </el-time-picker>

                <el-button>Добавить</el-button>
            </el-form-item>

            <el-form-item label="Персональные данные">
                <el-input placeholder="ФИО"></el-input>
                <el-input placeholder="Дата рождения"></el-input>
                <el-input placeholder="Пол"></el-input>
                <el-input placeholder="Постоянное место жительства"></el-input>
                <el-input placeholder="Место работы"></el-input>
            </el-form-item>

            <el-form-item>
                <el-input placeholder="Кем доставлен"></el-input>
            </el-form-item>

            <el-form-item>
                <el-input placeholder="Предварительный диагноз"></el-input>
            </el-form-item>

            <el-form-item>
                <el-input disabled placeholder="Клинический диагноз"></el-input>
            </el-form-item>

            <el-form-item>
                <el-select v-model="status" placeholder="Статус">
                    <el-option
                            key="1"
                            label="Плановый осмотр"
                            value="1">
                    </el-option>
                    <el-option
                            key="2"
                            label="Госпитализация"
                            value="2">
                    </el-option>
                    <el-option
                            key="3"
                            label="Перевод"
                            value="3">
                    </el-option>
                </el-select>
            </el-form-item>

            <el-form-item v-if="+status===2">
                <el-input placeholder="Отделение"></el-input>
                <el-input placeholder="Врач"></el-input>
            </el-form-item>

        </el-form>
    </div>
</template>

<script>
    import {ElOption, ElSelect, ElInput, ElButton, ElDatePicker, ElForm, ElFormItem, ElTimePicker} from "element-plus";

    export default {
        organizationName: "RegistrationForm",
        data() {
            return {
                status: ""
            }
        },

        components: {
            ElButton,
            ElInput,
            ElSelect,
            ElOption,
            ElForm,
            ElFormItem,
            ElDatePicker,
            ElTimePicker
        }
    }
</script>

<style scoped>
    .wrapper {
        margin: 0 auto;
        width: 1170px;
    }
</style>