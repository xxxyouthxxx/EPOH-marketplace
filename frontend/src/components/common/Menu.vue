<template>
  <nav class="header-menu menu nav">
    <!-- menu list -->
    <MenuList></MenuList>
    <!-- header btn -->
    <ul class="menu-btns menu-btns-2">
      <!-- <li><ButtonLink :text="SectionData.headerData.btnText" :link="`/profile/${userId}`" classname="btn" :class="classname"></ButtonLink></li> -->
      <li class="d-none d-lg-inline-block dropdown">
        <button type="button" class="icon-btn icon-btn-s1" data-bs-toggle="dropdown"><em class="ni ni-user"></em></button>
        <ul class="dropdown-menu card-generic card-generic-s3 dropdown-menu-end mt-2">
          <li>
            <h6 class="dropdown-header">你好 {{ username }}!</h6>
          </li>
          <!-- <li v-for="list in SectionData.authorNav" :key="list.id"><router-link class="dropdown-item card-generic-item" :to="list.path"><em class="ni me-2" :class="list.icon"></em>{{ list.title }}</router-link></li> -->
          <li>
            <p class="dropdown-item card-generic-item" @click="moveToProfile()"><em class="ni me-2 ni-user"></em>个人信息</p>
          </li>
          <!-- <li><router-link class="dropdown-item card-generic-item" :to="`/account/${userId}`"><em class="ni me-2 ni-setting"></em>Account Settings</router-link></li> -->
          <li>
            <a href="#" class="dropdown-item card-generic-item theme-toggler" title="Toggle Dark/Light mode"><em class="ni ni-moon me-2"></em> 夜间模式</a>
          </li>
          <li><hr class="dropdown-divider" /></li>
          <li v-if="isLogin">
            <router-link class="dropdown-item card-generic-item" @click="logout" to="/"><em class="ni ni-power me-2"></em>退出账号</router-link>
          </li>
          <li v-else>
            <router-link class="dropdown-item card-generic-item" to="/login"><em class="ni ni-power me-2"></em>登录</router-link>
          </li>
        </ul>
      </li>
      <li>
        <!-- 登录部分解决后使用 end -->
        <ThemeSwitcher></ThemeSwitcher>
      </li>
    </ul>
  </nav>
  <!-- .header-menu -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from "@/store/store.js";
import { mapState } from "vuex";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

// @ is an alias to /src
import MenuList from "@/components/common/MenuList.vue";

export default {
  name: "Menu",
  props: ["classname"],
  components: {
    MenuList,
  },
  data() {
    return {
      SectionData,
    };
  },
  computed: {
    ...mapState(["authToken", "userId", "username"]),
    ...mapGetters(["isLogin"]),
  },
  mounted() {
    /*  ==========================================
      Dark/Light mode configaration
    ========================================== */
    function themeSwitcher(selector) {
      let themeToggler = document.querySelectorAll(selector);
      if (themeToggler.length > 0) {
        themeToggler.forEach((item) => {
          item.addEventListener("click", function (e) {
            e.preventDefault();
            document.body.classList.toggle("dark-mode");
            if (document.body.classList.contains("dark-mode")) {
              localStorage.setItem("website_theme", "dark-mode");
            } else {
              localStorage.setItem("website_theme", "white-mode");
            }
          });
        });
      }

      function retrieveTheme() {
        var theme = localStorage.getItem("website_theme");
        if (theme != null) {
          document.body.classList.remove("white-mode", "dark-mode");
          document.body.classList.add(theme);
        }
      }

      retrieveTheme();

      if (window) {
        window.addEventListener(
          "storage",
          function () {
            retrieveTheme();
          },
          false
        );
      }
    }

    themeSwitcher(".theme-toggler");
  },
  methods: {
    ...mapActions(["logout", "wallet"]),
    moveToProfile() {
      console.log('this.isLogin', this.isLogin);
      console.log('this.userId', this.userId);
      if (this.isLogin) {
        this.$router.push({
          name: "profile",
          params: {
          id: this.userId,
          }
        })
      }else {
        alert('请登录');
        this.$router.push({
          name: "login",
        })
      }
    },
    moveToWallet() {
      if (this.isLogin) {
        this.$router.push({
          name: "Wallet",
          // params: {
          // id: this.userId,
          // },
        });
      } else {
        alert("请登录");
        this.$router.push({
          name: "login",
        });
      }
    },
  },
};
</script>
<style scoped>
.icon-btn-s1 {
  cursor: pointer;
  /* cursor: auto; */
}
.card-generic-item {
  cursor: pointer;
}
</style>
