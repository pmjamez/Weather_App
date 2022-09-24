<template>
    <header class = "container add-city">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"/>
        <nav>
            <span>Add City</span>
            <div class = "right">
                <i class = "far fa-edit"></i>
                <i class = "fas fa-sync"></i>
                <i class = "fas fa-plus"></i>

            </div>
        </nav>

    </header>
  
</template>

<script>
export default {
    name: "Navigation",

};
</script>

<style lang="scss" scoped>
.add-city{
    background: #313640;
}

header{
    nav {
        display: flex;
        color: #fff;
        padding: 30px 0;
        justify-content: space-between;
    }
    .right{
        i:nth-child(2),
        i:nth-child(3) {
            margin-left: 16px;
        }
    }
    span{
        font-weight: 600;
    }
}



</style>