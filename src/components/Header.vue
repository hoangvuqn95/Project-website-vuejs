<template>
    <nav>
        <ul>
            <li>
                <b-icon icon="house-door" scale="1.25"></b-icon>
            </li>
            <li>Product</li>
            <li>Contact</li>
            <li>Log In</li>
            <li>
                <b-icon icon="x-diamond"></b-icon>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;900&display=swap');

    nav{
        background: #00887a;
        padding: 14px 0;
        margin-bottom: 30px;
        font-family: 'Poppins', sans-serif;
    }
    ul {
        list-style-type: none;
        margin: 0;
        text-align: center;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    li {
        color: #fff;
        font-size: 18px;
        display: inline-block;
        margin: 0 10px;
    }
    nav li:hover {
        cursor: pointer;
        color: tomato;
        transition: 0.5s;
    }
</style>