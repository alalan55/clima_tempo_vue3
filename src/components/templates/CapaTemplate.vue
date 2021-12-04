<template>
    <div class="capa-template">
        <div class="conteudo-capa">
            <div class="title">
                <span>Pesquise uma cidade:</span>
            </div>
            <div class="input">
                <input type="Ex: Rio de Janeiro">
            </div>
        </div>

        <!-- <small>https://console.hgbrasil.com/keys</small> -->
    </div>
</template>

<script>

    export default {
        
    }
</script>

<style lang="scss" scoped>
.capa-template{
    width: 100%;
    height: calc(100vh - 70px);
    display: flex;
    align-items: center;
    justify-content: center;

    .conteudo-capa{
        border-radius: var(--b-radius);
        width: 80%;
        height: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: url('../../assets/img/home_1.jpg') no-repeat;
        background-size: cover;

        .title{
            margin: var(--m-top-bottom) 0;
    
            span{
                font-weight: 500;
                font-size: 1.2em;
            }
        }

        .input{
            width: 90%;
            input{
                width: 100%;
                padding: .7rem 1rem;
                border-radius: var(--b-radius);
                border: none;

                &:focus{
                    outline: none;
                }
            }
        }
    }

}

@media screen and (max-width: 1000px){
    .conteudo-capa{
         width: 90% !important;
    }
}

</style>