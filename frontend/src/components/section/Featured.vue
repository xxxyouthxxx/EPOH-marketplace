<template>
  <section class="section-space-b feature-section">
    <div class="container">
      <!-- section heading -->
      <SectionHeading classname="text-center" :text="title" :content="content" isMargin="mb-3"></SectionHeading>
      <div class="row g-gs">
        <div class="col-sm-6 col-md-6 col-lg-3" v-for="item in featuredList" :key="item.id">
          <router-link :to="`/profile/${item.nftAuthorSeq}`" class="card card-full card-collection">
            <img :src="item.nftImage" class="card-img-top" alt="featured miage" />
            <div class="card-body card-body-s1">
                <div class="avatar avatar-1">
                  <img :src="item.authorImage" class="rounded-circle">
                </div>
                <h4 class="card-title mt-4 mb-2 pt-1">@{{ item.authorName }}</h4>
                <p class="fw-semibold">Artist</p>
              <!-- <p class="small">{{ item.content }}</p> -->
            </div>
            <!-- end card-body --> </router-link
          ><!-- end card -->
        </div>
        <!-- end col -->
      </div>
    </div>
    <!-- .container -->
  </section>
  <!-- end featured-creator-section -->
</template>
<script>
// Import component data. You can change the data in the store to reflect in all component
const SERVER_URL = process.env.VUE_APP_SERVER_URL;
import { mapState } from "vuex";
import SectionData from "@/store/store.js";
import axios from "axios";

export default {
  name: "Featured",
  data() {
    return {
      SectionData,
      title: "他们的代表作",
      content: "这是四位网站中的特殊作品。他们是最受欢迎的艺术家和受到用户好评的艺术家",
      featuredList: [
        {
          nftImage:'https://pic.imgdb.cn/item/640eb292f144a0100710079a.png',
          authorImage:"https://pic.imgdb.cn/item/63faf2daf144a01007c5728a.jpg",
          authorName:'1号',
          nftAuthorSeq:1,
        },
        {
          nftImage:'https://pic.imgdb.cn/item/642533efa682492fccf7412f.jpg',
          authorImage:"https://pic.imgdb.cn/item/642533b2a682492fccf6df9a.jpg",
          authorName:'2号',
          nftAuthorSeq:null,
        },
        {
          nftImage:'https://pic.imgdb.cn/item/6425356da682492fccf92dfe.jpg',
          authorImage:"https://pic.imgdb.cn/item/6425351ba682492fccf8bda3.jpg",
          authorName:'3号',
          nftAuthorSeq:null,
        },
        {
          nftImage:'https://pic.imgdb.cn/item/64253590a682492fccf95f70.jpg',
          authorImage:"https://pic.imgdb.cn/item/64253533a682492fccf8de31.jpg",
          authorName:'4号',
          nftAuthorSeq:null,
        },
      ]
    };
  },
  methods: {
    getFeatured() {
      axios({
        method: "GET",
        url: `${SERVER_URL}/api/members/popular`,
        headers: {
          Authorization: this.authToken,
        },
      })
      .then((res)=> {
        console.log(res.data, "featured")
        for (var i = 0; i < res.data.memberList.length; i++) {
          if (i === 0) {
            this.featuredList[0] = {
              nftImage:`https://j6e205.p.ssafy.io/${res.data.nftList[i].fileUrl}`,
              authorImage:`https://j6e205.p.ssafy.io/${res.data.memberList[i].profileImageUrl}`,
              authorName:res.data.memberList[i].memberId,
              nftAuthorSeq:res.data.memberList[i].memberSeq,
            };
          } else {
            this.featuredList.push({
              nftImage:`https://j6e205.p.ssafy.io/${res.data.nftList[i].fileUrl}`,
              authorImage:`https://j6e205.p.ssafy.io/${res.data.memberList[i].profileImageUrl}`,
              authorName:res.data.memberList[i].memberId,
              nftAuthorSeq:res.data.memberList[i].memberSeq,
              });
            };
          }
      });
    }
  },
  created(){
    this.getFeatured()
  },
  computed: {
    ...mapState([
      "authToken",
      "myAddress",
      "userId"
      ]),
  },

  
};
</script>
