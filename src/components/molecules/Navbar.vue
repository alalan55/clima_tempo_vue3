<template>
   <nav>
       <div class="logo">
           <span>Temp.</span>
       </div>
   </nav>
</template>

<style lang="scss" scoped>
nav{
    height: 70px;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 var(--p-lados);

    .logo{
        span{
            font-weight: 700;
            font-size: 1.2em;
        }
    }
}
</style>