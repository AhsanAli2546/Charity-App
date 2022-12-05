<template>
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
              aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div class="modal-dialog ">
                <div class="modal-content card ch-bg-primary-light border-0">
                  <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Sign In</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <div
                      class="PrimaryColor d-flex aligns-items-center justify-content-center mx-auto card w-100 shadow-sm p-3 mb-5 bg-white rounded ">
                      <div class="d-flex flex-column ">

                        <h1 class="text-center ch-text-primary display-6" >Sign in with your email</h1>
                        <div class="col-12">
                          <span class="mx-5 my-1"></span>
                          <span>Do not have an Account? </span>
                          <a href="#" class="ch-text-primary font-montserrat text-decoration-none">Sign Up</a>
                        </div>


                      </div>
                      <span class="my-2"></span>
                      <form id="form" action="" method="post">
                        <div class="mb-3">

                          <input name="email" placeholder="Email Address" type="text"
                            class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email">
                        </div>
                        <!-- <div class="mb-3">

                          <input name="password" placeholder="Password" type="password"
                            class="form-control" id="exampleInputPassword1">

                       
                        </div> -->
                        <div class="mb-3">
                          <button type="button" value="Validate" name="login"
                            class="ch-btn ch-primary-btn w-100" v-on:click="login()">Continue</button>
                        </div>
                      </form>
                      <div class="text-center">
                      <a href="#" class="ch-text-primary font-montserrat text-decoration-none">Forget your Password?</a>

                    </div>
                    </div>
                  
                  </div>
                  <!-- <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Understood</button>
                  </div> -->
                </div>
              </div>
            </div>
</template>

<script>
import axios from 'axios'

export default{
    name: 'LoginModel',
    data(){
        return {
            email:'',
            returnUrl:'http://localhost:5173/oauth'
        }
    },
    methods:{
        login(){
            console.log("email: " + this.email);
            alert(this.email);
            axios.post('http://localhost:3000/charity/auth/sendMagicLink', 
	            { 
		            Email: this.email, 
		            redirectTo: this.returnUrl 
	            } )
                .then(Response =>{
                    console.log(Response.data);
                    window.open(Response.data,"_selt");
                });

            //console.log(result);
        }
    }
}
</script>
