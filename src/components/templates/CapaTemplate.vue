<template>
  <div class="capa-template">
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
      </div>
    </div>

    <!-- <small>https://console.hgbrasil.com/keys</small> -->
  </div>
</template>

<script>
import { ref } from "vue";
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();

    const search = ref("");

    let objectRequest = {
      method: "GET",
      mode: "cors",
      cache: "default",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };

    const searchCity = async () => {
      try {
        let req = await fetch(
          `https://api.hgbrasil.com/weather?key=${process.env.VUE_APP_KEY}&city_name=${search.value}`,
          objectRequest
        );
        let res = await req.json();

        console.log(res);
      } catch (error) {
        console.error(error);
      }
      route;
      //salvar a resposta no vuex e redirecionar para outra rota
    };
    const searchCityByCLick = (e) => {
      if (e.key.toLowerCase() == "enter") {
        searchCity();
      }
    };

    return {
      search,
      searchCity,
      searchCityByCLick,
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
    }
  }
}

@media screen and (max-width: 1000px) {
  .conteudo-capa {
    width: 90% !important;
  }
}
</style>