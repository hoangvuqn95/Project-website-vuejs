<template>
    <div>
            <b-form class="m-2">
                <h2>Điền vào mẫu đăng ký:</h2>
                <!-- Nhóm 1 -->
                <b-form-group
                    id='input-group-1'
                    label="Email address:"
                    label-for="input-1"
                    description="We'll never share your email with anyone else."
                >
                    <b-form-input
                        id="input-1"
                        v-model="form.email"
                        type="email"
                        placeholder="Enter email"
                        required
                    ></b-form-input>
                </b-form-group>

                <!-- Nhóm 2 điền tên -->
                <b-form-group
                    id="input-group-2"
                    label="Your name:"
                    label-for="input-2"
                >
                    <b-form-input
                        id="input 2"
                        v-model="form.name"
                        type="text"
                        placeholder="Enter name"
                        required
                    ></b-form-input>
                </b-form-group>

                <!-- Nhom 3 tuổi -->
                <b-form-group
                    id="input-group-3"
                    label="How old are you?"
                    label-for="input-3"
                >
                    <b-form-select
                        v-model="selected"
                        :options="options"
                        
                    ></b-form-select>
                </b-form-group>
                
                <!-- Nhóm 4 loại trái cây thích -->
                <b-form-group label="What kind of fruits do you like?">
                    <b-form-checkbox-group class="mb-2"
                        id="checked-group-1"
                        label-for="checked-1"
                        v-model="fruits.selected"
                        :options="fruits.options"
                    ></b-form-checkbox-group>

                    <b-button type="button" variant="primary" class="mr-2">Submit</b-button>
                    <b-button type="button" variant="warning">Submit</b-button>

                    <div class="m-4">
                        <h5>Thông tin bạn đăng ký xem trước:</h5>
                        <p>{{ form.email }}</p>
                        <p>{{ form.name }}</p>
                        <p>Selected : {{ fruits.selected }}</p>
                        <p>Years old: {{ selected }}</p>
                    </div>
                </b-form-group>
            </b-form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    name: '',
                    email: '',
                    checked: []
                },
                show: true,
                selected: null,
                options: [{text: '--Selected--', value: null},1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
                fruits: {
                    selected: [],
                    options: [
                        {value: 'Orange', text: 'Orange'},
                        {value: 'Watermelon', text: 'Watermelon'},
                        {value: 'Apple', text: 'Apple'},
                        {value: 'Grape', text: 'Grape'},
                        {value: 'StrawBerry', text: 'StrawBerry'}
                    ]
                },
            }
        },
        methods: {
            onSubmit(event) {
                event.preventDefault();
                alert(JSON.stringify(this.form))
            },
            onReset(event) {
                event.preventDefault();

                this.form.email = '';
                this.form.name = '';
                this.form.food = null;
                this.form.checked = [];
                this.show = false;
                this.$nextTick(() => {
                    this.show = true
                })
            },
        }
    }
</script>

<style scoped>
    h2 {
        text-align: center;
        text-transform: uppercase;
    }
</style>