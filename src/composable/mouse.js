import {ref,onMounted,onUnMounted} from 'vue'

export function UseMouse(){
    const x = ref(0)
    const y = ref(0)

    function update(event){
        x.value = event.pageX
        y.value = event.pageY
    }
}

onMounted(()=> window.addEventListener('mousemove',update))
onUnMounted(() => window.addEventListener('mousemove',update))

