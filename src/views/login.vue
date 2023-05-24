<template>
    <div>
            <section class="hero" style="margin-top: 11rem;">
            <div class="container" >
                <!-- Breadcrumbs -->
                <!-- <ol class="breadcrumb justify-content-center">
                <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                <li class="breadcrumb-item active" >Customer zone  </li>
                </ol> -->
                <!-- Hero Content-->
                <div class="hero-content pb-5 text-center">
                <h1 class="hero-heading mb-0">Login</h1>
                </div>
            </div>
            </section>
            <!-- customer login-->
            <section>
            <div class="container">
                <div class="row justify-content-center">
                <div class="col-lg-5">
                    <div class="block">
                    <div class="block-header">
                        <h6 class="text-uppercase mb-0">Iniciar sesión</h6>
                    </div>
                    <div class="block-body">
                        <p class="lead">Already our customer?</p>
                        <p class="text-muted">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                        <hr>
                        <form action="customer-orders.html" method="get">
                        <div class="mb-4">
                            <label class="form-label" for="email1">Correo electrónico</label>
                            <input class="form-control" id="email1" type="text" placeholder="Ejemplo@gmail.com" v-model="email">
                        </div>
                        <div class="mb-4">
                            <label class="form-label" for="password1">Contraseña</label>
                            <input class="form-control" id="password1" type="password" placeholder="Contraseña" v-model="password">
                        </div>
                        <div class="mb-4">
                            <small class="text-danger" v-if="msjErrorLogin"> {{msjErrorLogin}}</small>
                        </div>
                        <div class="mb-4 text-center">
                            <button class="btn btn-outline-dark" type="button" v-on:click="loginCLiente()"><i class="fa fa-sign-in-alt me-2"></i> Ingresar</button>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="block">
                    <div class="block-header">
                        <h6 class="text-uppercase mb-0">Registrate</h6>
                    </div>
                    <div class="block-body"> 
                        <p class="text-muted">With registration with us new world of fashion, fantastic discounts and much more opens to you! The whole process will not take you more than a minute!</p>
                        <hr>
                        <form action="customer-orders.html" method="get">
                        <div class="mb-4">
                            <label class="form-label" for="name">Nombres y apellidos</label>
                            <input class="form-control" id="name" type="text" placeholder="Nombres y apellidos" v-model="cliente.nomres">
                        </div>
                        <div class="mb-4">
                            <label class="form-label" for="email">Correo electrónico</label>
                            <input class="form-control" id="email" type="text" placeholder="Ejemplo@gmail.com" v-model="cliente.email">
                        </div>
                        <div class="mb-4">
                            <label class="form-label" for="password">Contraseña</label>
                            <input class="form-control" id="password" type="password" placeholder="Contraseña" v-model="cliente.password">
                        </div>
                        <div class="mb-4">
                            <small class="text-danger" v-if="mensajeError"> {{mensajeError}}</small>
                        </div>
                        <div class="mb-4 text-center">
                            <button class="btn btn-outline-dark" type="button" v-on:click="validar()"><i class="far fa-user me-2"></i>Registrar                                </button>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    name:'login',
    
    data(){
        return {
            cliente:{},
            mensajeError: '',
            email:'',
            password:'',
            msjErrorLogin:''
        }
    },
    methods:{
        validar(){
            if(!this.cliente.nomres){
                this.mensajeError= 'Ingrese los nombres por favor';
            }
            else if(!this.cliente.email){
                this.mensajeError= 'Ingrese el correo electrónico';
            }
            else if(!this.cliente.password){
                this.mensajeError= 'Ingrese una contraseña';
            }
            else{
                this.mensajeError='';
                axios.post(this.$url+'/registrarCliente',this.cliente,{
                    headers:{
                        'Content-Type': 'application/json'
                    }
                }).then((result)=>{
                    if(result.data.message){
                        this.mensajeError=result.data.message
                    }
                    else{
                        console.log(result)
                    }
                })
            }
        },
        loginCLiente(){
            if(!this.email){
                this.msjErrorLogin= 'Ingrese el correo electrónico';
            }
            else if(!this.password){
                this.msjErrorLogin= 'Ingrese una contraseña';
            }
            else{
                this.msjErrorLogin='';
                let data={
                    email: this.email,
                    password: this.password
                }
                axios.post(this.$url+'/loginCliente',data,{
                    headers:{
                        'Content-Type': 'application/json'
                    }
                }).then((result)=>{
                    console.log(result)
                    if(result.data.message){
                        this.msjErrorLogin=result.data.message
                    }
                    else{
                        this.$store.dispatch('saveToken',result.data.token)
                        this.$router.push({name:'home'})
                    }
                })
            }
        }
    }
}
</script>