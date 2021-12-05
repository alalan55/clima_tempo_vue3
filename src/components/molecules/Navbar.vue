<template>
   <nav>
       <div class="logo" @click="goHome">
           <span>Temp.</span>
       </div>
   </nav>
</template>
<script>
import {useRouter} from 'vue-router'
export default {
    setup(){
        const router = useRouter()
        const goHome = () =>{
            router.push({name: 'Home'})
        }

        return{
            goHome
        }
    }
}
</script>

<style lang="scss" scoped>
nav{
    height: 70px;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 var(--p-lados);

    .logo{
        cursor: pointer;
        span{
            font-weight: 700;
            font-size: 1.2em;
        }
    }
}
</style>