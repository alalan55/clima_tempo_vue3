<template>

  <div class="capa-template">
    <Toast v-if="notFound"/>
    <div class="conteudo-capa">
      <div class="title">
        <span>Pesquise uma cidade:</span>
      </div>
      <div class="input">
        <input
          type="text"
          placeholder="Ex: Rio de Janeiro"
          v-model="search"
          @keypress="searchCityByCLick"
        />
        <i class="fas fa-search" @click="searchCity"></i>
        <img src="../../assets/img/load.gif" alt="" class="load" v-if="load">
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import {useStore} from 'vuex'
import {Toast} from '@/components/atoms'

export default {
  components:{
    Toast
  },
  setup() {
    const route = useRouter();
    const store = useStore();

    const search = ref("");
    const proxy = 'https://cors-anywhere.herokuapp.com/' //only to development and run locally
    const load = ref(false)
    const notFound = ref(false)

    let objectRequest = {
      method: "GET",
      mode: "cors",
      cache: "default",
      headers: {
       Accept: "application/json",
       "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
       "Access-Control-Allow-Headers":
         "Content-Type, Access-Control-Allow-Headers, Origin, X-Requested-With, Content-Type, Accept, Authorization",
      },
    };

    const searchCity = async () => {
      try {
        load.value = true
       let req = await fetch(proxy + `https://api.hgbrasil.com/weather?format=json-cors&key=${process.env.VUE_APP_KEY}&city_name=${search.value}`, objectRequest);
       let res = await req.json();


       if(normalizarString(search.value).includes(normalizarString(res.results.city_name))){
         store.dispatch('PUT_ATUAL_CITY', res)
   
          setTimeout(() => {
            load.value = false
            route.push({name: 'City'})
            
          }, 2000);
         
       }else{
         notFound.value = true
         load.value = false

         setTimeout(() => {
           notFound.value = false
         }, 3500);
       }
       
      } catch (error) {
       console.error(error);
       load.value = false
   
      }
    };
    const searchCityByCLick = (e) => {
      if (e.key.toLowerCase() == "enter") {
        searchCity();
      }
    };

    const normalizarString = (e) =>{
      return e.normalize("NFD").replace(/[^a-zA-Zs]/g, "").toLowerCase()
    }

    return {
      search,
      searchCity,
      searchCityByCLick,
      load,
      notFound
    };
  },
};
</script>

<style lang="scss" scoped>
.capa-template {
  width: 100%;
  height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .conteudo-capa {
    border-radius: var(--b-radius);
    width: 80%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: url("../../assets/img/home_1.jpg") no-repeat;
    background-size: cover;

    .title {
      margin: var(--m-top-bottom) 0;

      span {
        font-weight: 500;
        font-size: 1.2em;
      }
    }

    .input {
      width: 90%;
      position: relative;
      input {
        width: 100%;
        padding: 0.7rem 1rem;
        border-radius: var(--b-radius);
        border: none;

        &:focus {
          outline: none;
        }
      }
      i {
        position: absolute;
        right: 15px;
        top: 11px;
        cursor: pointer;
      }
      .load{
        position: absolute;
        right: 15px;
        top: 11px;
        width: 20px;
      }
    }
  }
}


@media screen and (max-width: 1000px) {
  .conteudo-capa {
    width: 90% !important;
  }
}
</style>