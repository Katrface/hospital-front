import SearchPatientTable from "@/views/registrator/SearchPatientTable";
import PatientDetailForm from "@/views/registrator/PatientDetailForm";
import PatientMetrics from "@/views/registrator/PatientMetrics";

const ROOT = "/registrar";

const router = [
    {
        path: '/',
        name: 'RegistrarPatientTable',
        component: SearchPatientTable
    },
    {
        path: '/patientDetail/:id',
        name: 'RegistrarPatientDetail',
        component: PatientDetailForm,
        props: true
    },
    {
        path: '/patientMetrics/:id',
        name: 'PatientMetrics',
        component: PatientMetrics,
        props: true
    },
]

router.forEach((rout) => rout.path = ROOT + rout.path);

export default router;