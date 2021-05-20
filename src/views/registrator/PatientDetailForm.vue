<template>
  <div style="font-size: x-large;">Данные пациента</div>
  <el-button @click="back">Назад</el-button>
  <el-button @click="getPatient">Сохранить</el-button>
  <el-form>
    <el-tabs v-model="activeName">
<!--      TODO v-for-->
      <el-tab-pane label="Персональные данные" name="personalDate">
        <PersonalFormItem :personal="patient.personal"/>
        <AddressFormItem :location-date="patient.locationDate"/>
      </el-tab-pane>
      <el-tab-pane label="Документ удостоверяющий личность" name="documentDate">
        <IdentityDocumentFormItem :document="patient.identityDocument"/>
      </el-tab-pane>
      <el-tab-pane label="Контактные данные" name="contactDate">
        <ContactsFormItem :contact-info="patient.contactInfo"/>
      </el-tab-pane>
      <el-tab-pane label="Медицинский полис и снилс" name="medPolicyAndSnils">
        <MedicalPolicyFormItem :medical-policy="patient.medicalPolicy"/>
        <SnilsFormItem :snils="patient.snils"/>
      </el-tab-pane>
      <el-tab-pane label="Электронная медицинская карта" name="medCard">
        <MedicalCard :medical-card="patient.medicalCard"/>
      </el-tab-pane>
    </el-tabs>
  </el-form>
</template>

<script>
import PatientFormItem from "@/components/form/PatientMetricsFormItem";
import AddressFormItem from "@/components/form/AddressFormItem";
import PersonalFormItem from "@/components/form/PersonalFormItem";
import IdentityDocumentFormItem from "@/components/form/IdentityDocumentFormItem";
import ContactsFormItem from "@/components/form/ContactsFormItem";
import MedicalPolicyFormItem from "@/components/form/MedicalPolicyFormItem";
import SnilsFormItem from "@/components/form/SnilsFormItem";
import MedicalCard from "@/views/registrator/MedicalCard";
export default {
  props: ['id'],
  data() {
    return {
      activeName: "personalDate",
      patient: {
        personal: {
          lastname: "",
          firstname: "",
          parentName: "",
          birthDate: "",
          gender: "",
        },
        locationDate: {
          registrationAddress: "",
          actualAddress: "",
        },
        staff: {
          department: "",
          specialization: "",
        },
        identityDocument: {
          series: "",
          number: "",
          startDate: "",
          finishDate: "",
          issuedBy: "",
        },
        contactInfo: {
          phone: "",
          email: "",
        },
        medicalPolicy: {
          number: "",
          organizationName: "",
          registrationDate: "",
          startDate: "",
          finishDate: "",
        },
        snils: {
          number: "",
          startDate: "",
        },
        medicalCard: {
          id: 1,
          number: "",
          registrationDate: "",
        }
      },
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    // TODO перенести
    getPatient() {
      let url = `/api/patient/${this.id}`;
      url = "https://jsonplaceholder.typicode.com/todos/1";
      console.log(this.patient.personal.birthDate);
      fetch(url).then(response => response.json()).then(patient => {

        this.patient = patient;
      });
    }
  },
  components: {
    MedicalCard,
    SnilsFormItem,
    MedicalPolicyFormItem,
    ContactsFormItem, IdentityDocumentFormItem, PersonalFormItem, AddressFormItem, PatientFormItem},
}
</script>

<style scoped>

</style>