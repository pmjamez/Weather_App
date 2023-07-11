<template>
    <div class = "grid"></div>
    
</template>

<script>

export default{
    name: "AddCity",
    props: ['cities'],
    created(){
        console.log(this.cities);

    },
    components: {},
};

</script>

<style lang="scss" scoped>
.grid{
    display: grid;
    padding-top: 81px;
    background-color: #31363d;
    width: 100%;
    min-height: 100vh;
}
</style>