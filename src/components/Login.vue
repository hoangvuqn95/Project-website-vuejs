<template>
    <div class="m-2">
        <h2>Đăng nhập</h2>
        <b-form>
            <b-form-group
                label="Email:"
                label-for="login-1"
                
            >
                <b-form-input
                    type="email"
                    v-model="login.email"
                    placeholder="Enter Email"
                    required
                ></b-form-input>
            </b-form-group>
            <b-form-group
                label="Password:"
                label-for="login-2"
            >
                <b-form-input
                    v-model="login.password"
                    type="password"
                    placeholder="Password"
                    required
                ></b-form-input>
            </b-form-group>

            <b-form-checkbox class="mb-2"
                v-model="note"
                name="checkbox-1"
                value="Accepted"
            >
                Remember your account?
            </b-form-checkbox>

            <b-button type="button" variant="success" class="mr-2">Login</b-button>
            <b-button type="button" variant="info">Reset</b-button>
        </b-form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                login: {
                    email: '',
                    password: '',
                    checkbox: 'not accepted',
                },
            
            }
        }
    }
</script>

<style scoped>
    h2 {
        text-align: center;
        text-transform: uppercase;
    }
</style>