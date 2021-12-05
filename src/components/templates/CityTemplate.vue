<template>
  <div class="city-template">
    <div class="name-city">
      <h1>{{ data.results.city_name }}</h1>
    </div>
    <div class="wrapper-city">
      <div class="column-left">
        <div class="bloco_1_left">
          <div class="temperature">
            <span class="value">{{ data.results.temp }}°c</span>
            <span class="description">Parcialmente nublado</span>
          </div>
          <div class="sun-moon">
            <div class="sunset">
              <span><i class="fas fa-sun"></i>{{ data.results.sunrise }}</span>
            </div>
            <div class="sunrise">
              <span><i class="fas fa-moon"></i>{{ data.results.sunset }}</span>
            </div>
          </div>
        </div>

        <div class="bloco_2_left">
          <div class="bloco_1">
            <span class="title">Humidade</span>
            <span class="value">{{ data.results.humidity }}%</span>
          </div>
          <div class="bloco_2">
            <span class="title">Ventos</span>
            <span class="value">{{ data.results.wind_speedy }}</span>
          </div>
        </div>
      </div>

      <div class="column-right">
        <div class="bloco_right">
          <ul>
            <li
              class="item"
              v-for="forecast of data.results.forecast"
              :key="forecast.id"
            >
              <div class="bloco_1_item">
                <div class="date">
                  <span>{{ forecast.weekday }}</span>
                  <span>{{ forecast.date }}</span>
                </div>
                <div class="description-time">
                  <span>{{ forecast.description }}</span>
                </div>
              </div>
              <div class="bloco_2_item">
                <div class="min">
                  <span>Mínima de {{ forecast.min }}°c</span>
                </div>
                <div class="max">
                  <span>Máxima de {{ forecast.max }}°c</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import {useStore} from 'vuex'
export default {
  setup() {
    const store = useStore();
    const data = ref({});
    const state = ref(0);

    const initData = () => {
      let res = store.getters.$city
      addId(res);
    };
    const addId = (value) => {
      let arrForecast = [];
      value.results.forecast.map((d) => {arrForecast.push({ ...d, id: state.value++ }) });
      value.forecast = arrForecast;
      data.value = value;
    };
    initData();

    return {
      data,
      state,
    };
  },
};
</script>

<style lang="scss" scoped>
.city-template {
  width: 100%;
  height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .name-city {
    width: 80%;
    padding: 0.6rem;

    h1 {
      font-weight: 500;
    }
  }

  .wrapper-city {
    width: 80%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    & > div {
      flex: 1 1 400px;
      height: 100%;
      padding: var(--p-total);
    }

    .column-left {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      // border: 1px solid red;

      & > div {
        width: 100%;
      }
      .bloco_1_left {
        flex: 2;
        margin-bottom: var(--m-bottom1);
        border-radius: var(--b-radius);
        padding: var(--p-total2);
        background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) 100%),
          url("../../assets/img/img_2.jpg") no-repeat;
        background-size: cover;
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .temperature {
          .value {
            font-size: 2.5em;
            font-weight: 300;
          }
          .description {
            margin-top: 0.5rem;
            font-size: 0.8em;
            font-weight: 500;
          }

          span {
            display: block;
          }
        }
        .sun-moon {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
        }
      }
      .bloco_2_left {
        flex: 1;
        margin-bottom: var(--m-bottom1);
        display: flex;
        flex-wrap: wrap;
        gap: 0.6rem;
        color: white;

        .bloco_1 {
          background: #1b2741;
        }
        .bloco_2 {
          background: #cbe16a;
          color: #1b2741;
        }
        .bloco_3 {
          background: #ffd2bd;
        }

        & > div {
          flex: 1 1 100px;
          border-radius: var(--b-radius);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          span {
            display: block;
            margin: var(--m-top-bottom3) 0;
          }
          .title {
            font-size: 0.8em;
          }
          .value {
            font-size: 1.2em;
            font-weight: 500;
          }
        }
      }
    }
    .column-right {
      .bloco_right {
        height: 97%;
        border-radius: var(--b-radius);
        padding: var(--p-total2);
        background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) 100%),
          url("../../assets/img/img_4.jpg") no-repeat;
        background-size: cover;

        ul {
          height: 100%;
          overflow-y: auto;
          color: white;

          &::-webkit-scrollbar {
            width: 8px;
          }

          /* Track */
          &::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 15px;
          }

          /* Handle */
          &::-webkit-scrollbar-thumb {
            background: #888;
            border-radius: 15px;
          }

          .item {
            margin: var(--m-top-bottom3) 0;
            list-style: none;
            padding: var(--p-total3);
            border-radius: var(--b-radius2);
            background: linear-gradient(
              rgba(0, 0, 0, 0.7),
              rgba(0, 0, 0, 0.7) 100%
            );
            .bloco_1_item {
              display: flex;
              align-items: center;
              justify-content: space-between;
              flex-wrap: wrap;

              .date {
                span {
                  display: block;
                }
              }

              & > div {
                margin: var(--m-top-bottom3);
              }
            }
            .bloco_2_item {
              display: flex;
              align-items: center;
              justify-content: space-between;
              flex-wrap: wrap;

              & > div {
                margin: var(--m-top-bottom3);
              }

              .min {
                font-size: 1.3em;
              }
              .max {
                font-size: 1.3em;
              }
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 1005px) {
  .wrapper-city {
    // background: red;
    height: calc(100vh - 70px) !important;
  }
}
</style>