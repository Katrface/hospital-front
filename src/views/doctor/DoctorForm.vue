<template>
  <el-form>
    <el-button>Отмена</el-button>
    <el-button :onclick="save">Сохранить</el-button>
    <el-tabs v-model="activeName">
      <el-tab-pane label="Персональные данные" name="personalDate">
        <PersonalFormItem :personal="doctor.personal"/>
        <AddressFormItem :location-date="doctor.locationDate"/>
        <StaffFormItem :staff="doctor.staff"/>
      </el-tab-pane>
      <el-tab-pane label="Документ удостоверяющий личность" name="documentDate">
        <IdentityDocumentFormItem :document="doctor.identityDocument"/>
      </el-tab-pane>
      <el-tab-pane label="Контактные данные" name="contactDate">
        <ContactsFormItem :contact-info="doctor.contactInfo"/>
      </el-tab-pane>
      <el-tab-pane label="Test" name="test">
        <MedPolicyFormItem :medical-policy="doctor.medicalPolicy"/>
        <SnilsFormItem :snils="doctor.snils"/>
      </el-tab-pane>
    </el-tabs>
  </el-form>
</template>

<script>
import PersonalFormItem from "@/components/form/PersonalFormItem";
import AddressFormItem from "@/components/form/AddressFormItem";
import StaffFormItem from "@/components/form/StaffFormItem";
import IdentityDocumentFormItem from "@/components/form/IdentityDocumentFormItem";
import ContactsFormItem from "@/components/form/ContactsFormItem";
import MedPolicyFormItem from "@/components/form/MedicalPolicyFormItem";
import SnilsFormItem from "@/components/form/SnilsFormItem";
export default {
  data() {
    return {
      activeName: 'personalDate',
      doctor: {
        personal: {
          lastname: "",
          firstname: "",
          parentName: "",
          birthDate: "",
          gender: "m",
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
        }
      },
    };
  },

  methods: {
    save() {
      console.log(this.doctor);
    }
  },
  components: {
    SnilsFormItem,
    MedPolicyFormItem,
    ContactsFormItem, IdentityDocumentFormItem, StaffFormItem, AddressFormItem, PersonalFormItem},
}
</script>

<style scoped>

</style>