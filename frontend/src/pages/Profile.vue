<template>
  <div class="page-wrap">
    <!-- header  -->
    <header class="header-section has-header-main bg-gradient-2">
      <!-- <router-link>aaaaa</router-link> -->
      <!-- Header main -->
      <HeaderMain></HeaderMain>
      <!-- hero -->
      <AuthorHero
        avatarSize="avatar-3"
        :isCopyInput="true"
        coverimg2="https://t1.daumcdn.net/cfile/tistory/187E474D4D18B4EF35"
        coverimg="https://cdn.pixabay.com/photo/2015/12/01/15/43/black-1072366__340.jpg"
        :img2="member.fileUrl"
        :profileImageUrl="member.profileImageUrl"
        :title="grade"
        :username="member.memberId"
        :address="member.memberAddress"
        :btntext="SectionData.authorPersonalData.btnText"
        :btnlink="SectionData.authorPersonalData.btnLink"
        :myId="member.memberSeq"
      ></AuthorHero>
    </header>
    <!-- Author section  -->
    <ProfileSection
     :content = member.memberBio
     :datetext = member.regDt
     :collect = collect
     ></ProfileSection>
    <!-- Footer  -->
    <Footer classname="bg-black on-dark"></Footer>
  </div>
  <!-- end page-wrap -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
const SERVER_URL = process.env.VUE_APP_SERVER_URL;
import axios from "axios";
import SectionData from "@/store/store.js";
import { mapState } from "vuex";
export default {
  name: "profile",
  components: {},
  data() {
    return {
      SectionData,
      id: this.$route.params.id,
      collect: null,
      member:{
        memberSeq: 0,
        memberAddress: "",
        memberId: 0,
        memberBio: "",
        regDt: null,
        profileImageUrl: null,
      },
      grade: null,
    };
  },
  methods : {
    async getProfile() {
      axios({
        method: "GET",
        url: `${SERVER_URL}/api/members/profile/${this.$route.params.id}`,
        headers: {
          Authorization: this.authToken,
        },
      })
      .then((res)=> {
        this.member.memberSeq = res.data.user_id
        this.member.memberId = res.data.username
        this.member.memberBio = res.data.bio
        this.member.regDt = res.data.createtime
        this.member.profileImageUrl = res.data.avatar
        if (res.data.authority == 0) {
          this.grade = "Private Artist";
        }
      })
      .then((res) => {
        this.getNft()
      });
    },
    async getNft() {
      const itmes = await axios({
        method: "GET",
        url: `${SERVER_URL}/api/collection/items/${this.member.memberSeq}`,
        headers: {
          Authorization: this.authToken,
        },
      }).then((res) => {
        console.log("collection:",res.data);
        this.collect = res.data ;
      });
      // this.total = this.exhibitionWorkList.length;
    },
  },
  computed: {
    ...mapState(["authToken", "myAddress", "userId"]),
  },
  created() {
    this.getProfile();
  },
};
</script>
