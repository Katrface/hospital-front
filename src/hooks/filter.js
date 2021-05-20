import {ref} from "@vue/reactivity";
import {watch} from "@vue/runtime-core";

// const fioPredicate = (item, str) => {
//   return (item.lastname + item.firstname + item.parentName).includes(str);
// };
// const medicalPolicyPredicate = (item, str) => {
//   return item.medicalPolicy.startsWith(str);
// };
//
// const {fioString, filteredPatients} = filterHook(patients, fioPredicate);
// // const {medicalPolicy, filteredPatients} = filterHook(patients, medicalPolicyPredicate);

export default function filterHook(arrayProxy, predicateItem){
    const searchString = ref("");
    const result = ref(arrayProxy.value);

    watch(searchString, (newValue) => {
        if (newValue) {
            result.value = arrayProxy.value.filter(item => predicateItem(item, newValue));
        } else {
            result.value = arrayProxy.value;
        }
    });

    return {
        searchString,
        result
    }
}