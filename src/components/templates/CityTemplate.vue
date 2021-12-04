<template>
  <div class="city-template">
      <div class="name-city">
          <h1>Petrópolis, RJ</h1>
      </div>
    <div class="wrapper-city">

      <div class="column-left">

        <div class="bloco_1_left">
            <div class="temperature">
                <span class="value">22°c</span>
                <span class="description">Parcialmente nublado</span>
            </div>
            <div class="sun-moon">
                    <div class="sunset">
                        <span><i class="fas fa-sun"></i> 05:00 am</span>
                    </div>
                    <div class="sunrise">
                         <span><i class="fas fa-moon"></i> 06:00 pm</span>
                    </div>
                </div>
        </div>

        <div class="bloco_2_left">
            <div class="bloco_1"></div>
            <div class="bloco_2"></div>
             <div class="bloco_3"></div>
        </div>

      </div>

      <div class="column-right">
          <div class="bloco_right">
              
          </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.city-template {
  width: 100%;
  height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .name-city{
      border: 1px solid red;
      width: 80%;
      padding: .6rem;

      h1{
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
      border: 1px solid red;

      & > div {
        width: 100%;
      }
      .bloco_1_left {
        flex: 2;
        margin-bottom: var(--m-bottom1);
        border-radius:  var(--b-radius);
        padding: var(--p-total2);
        background: linear-gradient(rgba(0, 0, 0, 0.20), rgba(0, 0, 0, 0.20)100%), url('../../assets/img/img_2.jpg') no-repeat;
        background-size: cover;
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

         .temperature{

            .value{
                 font-size: 2.5em;
                 font-weight: 300;
             }
             .description{
                 margin-top: .5rem;
                 font-size: .8em;
                 font-weight: 500;
             }

             span{
                 display: block;
             }
         }
         .sun-moon{
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
        gap: .6rem;

        
        &>div{
            border: 1px solid green;
            flex: 1 1 100px;
             border-radius:  var(--b-radius);
        }
      }
    }
    .column-right{
        border: 1px solid red;
        .bloco_right{
            border: 1px solid yellow;
            height: 97%;
            border-radius: var(--b-radius);
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