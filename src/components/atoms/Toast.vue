<template>
    <div class="toast">
        <div class="title">
            <span>Não foi possível encontar cidade digitada</span>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.toast{
    margin-bottom: 1rem;
    width: 80%;
    border-radius: var(--b-radius);
    padding: .5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    background: rgb(250, 90, 90);
}

</style>