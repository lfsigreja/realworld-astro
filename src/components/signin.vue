<template>
    <div class="auth-page">
        <div class="container page">
            <div class="row">
                <div class="col-md-6 offset-md-3 col-xs-12">
                    <h1 class="text-xs-center">Sign up</h1>
                    <p class="text-xs-center">
                        <a href="">Have an account?</a>
                    </p>

                    <ul class="error-messages">
                        <li>That email is already taken</li>
                    </ul>

                    <form>
                        <fieldset class="form-group">
                            <input v-model='user.username' class="form-control form-control-lg" type="text" placeholder="Your Name" />
                        </fieldset>
                        <fieldset class="form-group">
                            <input v-model='user.email' class="form-control form-control-lg" type="text" placeholder="Email" />
                        </fieldset>
                        <fieldset class="form-group">
                            <input v-model='user.password' class="form-control form-control-lg" type="password" placeholder="Password" />
                        </fieldset>
                        <button @click.prevent="signUp()" class="btn btn-lg btn-primary pull-xs-right">Sign up</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import httpMethod from '../services/httpMethod'


let user = {
    username: '',
    email: '',
    password: ''
}

const signUp = (() => {
    httpMethod.post('/users/login', {
        user: {
            username: user.username,
            email: user.email,
            password: user.password
        }
    }).then((res) => {
        console.log(res)
    })
})
</script>