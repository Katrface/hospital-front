import DoctorsFunctionTable from "@/views/doctor/DoctorsFunctionTable";
import DoctorForm from "@/views/doctor/DoctorForm";

const ROOT = "/doctor";

const router = [
    {
        path: '/',
        component: DoctorsFunctionTable
    },
    {
        path: '/form',
        component: DoctorForm
    }
]

router.forEach((rout) => rout.path = ROOT + rout.path);

export default router;