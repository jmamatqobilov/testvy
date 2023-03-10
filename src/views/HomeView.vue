<template>
  <div class="home">
    <div class="container">
      <div class="logo">
        <img :src="require('../assets/wdwd.png')" width="100"/>
        <img :src="require('../assets/kubok.png')" height="30" width="90"/>
        <img :src="require('../assets/elek.png')" height="30"/>
        <img :src="require('../assets/liga.png')" height="70"/>
      </div>
      <div class="row p-2">
        <div class="col-6">
          <img :src="require('../assets/top22.png')" />
        </div>
        <div class="col-6">
          <img :src="require('../assets/ksold.png')" />
        </div>
      </div>

      <div class="jang-container">

        <div class="jang-container-bac">
          <img :src="require('../assets/jang3.png')" />


          <div class="user-bloc1-bac">
            <div class="user-bloc1">
              <img :src="require('../assets/user1.jpg')" />
            </div>
            <div class="bugun-contents">
              <img :src="require('../assets/bugun.png')" />
            </div>
          </div>

          <div class="user-bloc2-bac">
            <div class="user-bloc2">
              <img :src="require('../assets/user1.jpg')" />
            </div>
            <div class="bugun-contentd">
              <img :src="require('../assets/bugun.png')" />
            </div>
          </div>
          <!-- Button trigger modal -->
          <button type="button" class="natija btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="dataFetch">
            <img :src="require('../assets/natija.png')" />
          </button>

        </div>
        <div class="jang-reyting">
          <img :src="require('../assets/reyting.png')" />
        </div>
        <div class="jang-viloyat">
          <img :src="require('../assets/viloyatim.png')" />
        </div>

      </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header pt-0 px-0 position-relative">
            <h5 class="modal-title w-100" id="exampleModalLabel">
              <img class="w-100" :src="require('../assets/jr.png')"/>
            </h5>
            <button type="button" class="position-absolute xclose" data-bs-dismiss="modal" aria-label="Close">
              <img :src="require('../assets/xclose.png')" width="30" alt="">
            </button>
          </div>
          <div class="modal-body">
            <div class="mb-3" v-for="jangUser in JANGLIST" :key="jangUser">
              <div class="card rounded rounded-5 shadow shadow-5" style="border: 5px solid #000000;">
                <div class="card-header bg-warning d-flex justify-content-between"
                  style="border-top-left-radius: 30px;border-top-right-radius: 30px;">
                  <div>
                    G'olib
                  </div>
                  <div>
                    2023-03-08
                  </div>
                </div>
                <div class="card-body">
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="left-image">
                      <div class="image">
                        <img width="100" height="100" class="rounded rounded-circle" :src="jangUser.u1ids.image_url"/>
                      </div>
                    </div>
                    <div class="middle">
                      <img :src="require('../assets/vs.png')" width="50"/>
                    </div>
                    <div class="right-image">
                      <div class="image">
                        <img width="100" height="100" class="rounded rounded-circle" :src="jangUser.u2ids.image_url"
                          alt="">
                      </div>
                    </div>
                  </div>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="left">
                      <div class="name">
                        <h1>
                          {{ jangUser.u1ids.first_name}}
                        </h1>
                      </div>
                      <div class="sum">
                        1 232 212
                      </div>
                      <div class="cup d-flex align-items-center">
                        <img :src="require('../assets/kb.png')" alt="image" width="30">
                        <span>+23</span>
                      </div>
                    </div>
                    <div class="right">
                      <div class="name">
                        <h1>
                          {{ jangUser.u2ids.first_name}}
                        </h1>
                      </div>
                      <div class="sum">
                        1 232 212
                      </div>
                      <div class=" d-flex align-items-center">
                        <span>+23</span>
                        <img :src="require('../assets/kb.png')" alt="image" width="30">
                      </div>
                    </div>
                  </div>
                  <a href="#" class="w-100 btn" style="background-color: #04dccada;color: #fff;">Kunlik janglar</a>
                </div>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {

  },

  data() {
    return {
      
    }
  },
  computed:{
    ...mapGetters(['JANGLIST'])
  },

  methods: {
    dataFetch(){
      this.$store.dispatch('jangList')
      console.log('bosildi')
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
h1{
  font-size: 16px;
}

.cards{
  border: solid 1px #04dccada;
}
.xclose {
  top: 12%;
  right: 10%;
}
.sum {
  background: #000;
  padding: 7px;
  color: #fff;
  font-weight: 700;
  border-radius: 20px;
  font-size: 16px;
}

.logo{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.home {
  background-image: url('../assets/1.jpg');
  height: 100vh;
}

.jang-container {
  border-radius: 20px;
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  position: relative;

}

.jang-reyting {
  position: absolute;
  bottom: -34px;
  left: 6%;
}


.jang-reyting img {
  width: 100% !important;
  height: 44px !important;
}
.modal-header {
  background: rgba(1, 1, 1, .5) !important;
}
.jang-viloyat {
  position: absolute;
  bottom: -34px;
  right: 6%;
}

.jang-viloyat img {
  width: 100% !important;
  height: 44px !important;
}

.jang-container-bac img {
  position: absolute;
  right: 0;
  top: 0;
}

.jang-container-bac img {
  width: 100% !important;
  height: 540px !important;
}

.user-bloc1-bac {
  position: absolute;
  display: flex;
  left: 8%;
  top: 23%;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background-color: rgb(211, 208, 21);
  display: flex;
  align-items: center;
  justify-content: center;
}

.user-bloc1 {
  position: absolute;
  display: flex;
  left: 8;
  top: 8;
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background-color: blueviolet;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bugun-contents {
  position: absolute;
  right: 0;
  bottom: -10%;
}

.bugun-contentd {
  position: absolute;
  right: 0;
  bottom: -10%;
}

.bugun-contents img {
  width: 140px !important;
  height: 60px !important;
}

.bugun-contentd img {
  width: 140px !important;
  height: 60px !important;
}



.user-bloc1 img {
  width: 200px !important;
  height: 200px !important;
}

.user-bloc2-bac {
  position: absolute;
  display: flex;
  right: 8%;
  top: 23%;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background-color: rgb(255, 42, 4);
  display: flex;
  align-items: center;
  justify-content: center;
}

.user-bloc2 {
  position: absolute;
  display: flex;
  left: 8;
  top: 8;
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background-color: blueviolet;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.user-bloc2 img {

  width: 200px !important;
  height: 200px !important;
}


.user-block {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background-color: blueviolet;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.col-6 img {
  height: 34px;
}

.user-block img {
  width: 200px !important;
  height: 200px !important;
}





.jang-container-box-bloc {
  display: flex;
  justify-content: space-between;
  padding: 30px;
}

.jang-container img {
  width: 90px;
  height: 90px;
  align-items: center;
}

.natija {
  position: absolute;
  bottom: 26%;
  right: 26%;
}

.natija img {
  width: 200px !important;
  height: 100px !important;
}




.jang-container-title {}
</style>
