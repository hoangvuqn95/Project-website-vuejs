<template>
    <div>
        <div id="footer" class="mt-3">
            <div class="ball">
                <b-icon
                    icon="chevron-double-up" 
                    animation="cylon-vertical"
                    style="cursor: pointer;"
                ></b-icon>
            </div>
            <h3>My website 2020. All Rights Reserved.</h3>
            <div class="three">
                <a>Privacy</a>
                <a>Terms</a>
                <a>FAQ</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;900&display=swap');

    .ball {
        position: absolute;
        top: -1rem;
        left: 50%;
        transform: translateX(-50%);
        background: #333;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        text-align: center;
    }
    .ball a {
        color: #fff;
        display: block;
        font-size: 1rem;
        padding: 1rem;
        margin-bottom: 10px;
        text-decoration: none;
    }

    #footer {
        background: #333;
        width: 100%;
        height: 100px;
        color: #fff;
        margin-bottom: 0;
        font-family: 'Poppins', sans-serif;
        letter-spacing: 1px;
        padding-right: 20px;
        padding-left: 20px;
        padding-top: 30px;
        padding-bottom: 20px;
        position: relative;
    }
    h3 {
        font-size: 16px;
        text-align: center;
    }
    h3:hover {
        cursor: pointer;
        color: #43b3c5;
    }
    .three {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .three a {
        margin-right: 10px;
    }
    .three > a:hover {
        cursor: pointer;
        color: #43b3c5;
    }
</style>