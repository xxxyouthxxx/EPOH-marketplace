(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0d4bd271"],{"561f":function(e,t,o){"use strict";o.r(t);var a=o("7a23"),l=o("cb98"),n=o.n(l);const c={class:"page-wrap"},r={class:"header-section has-header-main bg-pattern-3"},s={class:"create-section section-space-b pt-4 pt-md-5 mt-md-4"},i={class:"container"},d={class:"row justify-content-center"},m={class:"col-lg-8"},b={class:"section-head-sm"},f=Object(a["createElementVNode"])("em",{class:"ni ni-arrow-left"},null,-1),p=Object(a["createTextVNode"])(" Home "),u={class:"mt-2"},h={class:"col-lg-8"},g={action:"#",class:"form-create mb-5 mb-lg-0"},j={class:"form-item mb-4"},N=Object(a["createElementVNode"])("h5",{class:"mb-3"},"Upload file",-1),O={class:"file-upload-wrap"},v=Object(a["createElementVNode"])("p",{class:"file-name mb-4",id:"file-name"},"PNG, GIF, WEBP, MP4 or MP3. Max 100mb.",-1),E=Object(a["createElementVNode"])("label",{for:"file-upload",class:"input-label btn btn-dark"},"Choose File",-1),V={class:"form-item mb-4"},w={class:"mb-4"},y=Object(a["createElementVNode"])("label",{class:"mb-2 form-label"},"Title",-1),k={class:"mb-4"},T=Object(a["createElementVNode"])("label",{class:"mb-2 form-label"},"Description",-1),P={key:0,class:"modal fade",id:"createNftModal",tabindex:"-1","aria-hidden":"true"},D={class:"modal-dialog modal-dialog-centered"},C={class:"modal-content"},x={class:"modal-header"},S={class:"modal-title"},M=Object(a["createElementVNode"])("button",{type:"button",class:"btn-close icon-btn","data-bs-dismiss":"modal","aria-label":"Close"},[Object(a["createElementVNode"])("em",{class:"ni ni-cross"})],-1),I={class:"modal-body"},A=["innerHTML"],F={class:"mb-3"},H={class:"form-label"},R={key:1,class:"modal fade",id:"createNftModal2",tabindex:"-1","aria-hidden":"true"},U={class:"modal-dialog modal-dialog-centered"},B={class:"modal-content"},K={class:"modal-header d-flex flex-column"},L={class:"modal-title d-flex justify-content-center"},$=Object(a["createElementVNode"])("button",{type:"button",class:"btn-close icon-btn","data-bs-dismiss":"modal","aria-label":"Close"},[Object(a["createElementVNode"])("em",{class:"ni ni-cross"})],-1),_=Object(a["createElementVNode"])("p",{class:"d-flex justify-content-center"},"Wow! You just create your NFT",-1),z=Object(a["createElementVNode"])("div",{class:"modal-body d-flex flex-column"},[Object(a["createElementVNode"])("div",{class:"mb-3 d-flex justify-content-center"},[Object(a["createElementVNode"])("img",{src:n.a,class:"justify-content-center",alt:""})])],-1);function G(e,t,o,l,n,G){const W=Object(a["resolveComponent"])("HeaderMain"),q=Object(a["resolveComponent"])("router-link"),J=Object(a["resolveComponent"])("Footer");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",c,[Object(a["createElementVNode"])("header",r,[Object(a["createVNode"])(W)]),Object(a["createElementVNode"])("section",s,[Object(a["createElementVNode"])("div",i,[Object(a["createElementVNode"])("div",d,[Object(a["createElementVNode"])("div",m,[Object(a["createElementVNode"])("div",b,[Object(a["createVNode"])(q,{to:{name:"Home"},class:"btn-link fw-semibold"},{default:Object(a["withCtx"])(()=>[f,p]),_:1}),Object(a["createElementVNode"])("h1",u,Object(a["toDisplayString"])(n.SectionData.createData.title),1)])]),Object(a["createElementVNode"])("div",h,[Object(a["createElementVNode"])("form",g,[Object(a["createElementVNode"])("div",j,[N,Object(a["createElementVNode"])("div",O,[v,Object(a["createElementVNode"])("input",{id:"file-upload",class:"file-upload-input","data-target":"file-name",type:"file",enctype:"multipart/form-data",onChange:t[0]||(t[0]=(...e)=>G.selectFile&&G.selectFile(...e)),hidden:""},null,32),E])]),Object(a["createElementVNode"])("div",V,[Object(a["createElementVNode"])("div",w,[y,Object(a["withDirectives"])(Object(a["createElementVNode"])("input",{type:"text",class:"form-control form-control-s1","onUpdate:modelValue":t[1]||(t[1]=e=>n.form.nftName=e),placeholder:"e. g. Redeemable T-Shirt with logo"},null,512),[[a["vModelText"],n.form.nftName]])]),Object(a["createElementVNode"])("div",k,[T,Object(a["withDirectives"])(Object(a["createElementVNode"])("textarea",{name:"message",class:"form-control form-control-s1","onUpdate:modelValue":t[2]||(t[2]=e=>n.form.nftDescription=e),placeholder:"e. g. After purchasing you’ll be able to get the real T-Shirt"},null,512),[[a["vModelText"],n.form.nftDescription]])])]),Object(a["createElementVNode"])("button",{type:"button","data-bs-toggle":"modal","data-bs-target":"#createNftModal",class:"btn btn-dark d-block",onClick:t[3]||(t[3]=(...e)=>G.checkInputData&&G.checkInputData(...e))},"Create Item")])])])])]),Object(a["createVNode"])(J,{classname:"bg-black on-dark"}),this.form.nftDescription&&this.form.nftName&&this.form.file?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",P,[Object(a["createElementVNode"])("div",D,[Object(a["createElementVNode"])("div",C,[Object(a["createElementVNode"])("div",x,[Object(a["createElementVNode"])("h4",S,Object(a["toDisplayString"])(n.SectionData.createNftModal.title),1),M]),Object(a["createElementVNode"])("div",I,[Object(a["createElementVNode"])("p",{class:"mb-3",innerHTML:n.SectionData.createNftModal.content},null,8,A),Object(a["createElementVNode"])("div",F,[Object(a["createElementVNode"])("label",H,Object(a["toDisplayString"])(n.SectionData.createNftModal.labelText),1),Object(a["withDirectives"])(Object(a["createElementVNode"])("input",{type:"text",class:"form-control form-control-s1","onUpdate:modelValue":t[4]||(t[4]=e=>n.authorPrivateKey=e),placeholder:"please typing your Private Key"},null,512),[[a["vModelText"],n.authorPrivateKey]])]),Object(a["createElementVNode"])("button",{class:"btn btn-dark d-block",onClick:t[5]||(t[5]=(...e)=>G.submitCreateNFT&&G.submitCreateNFT(...e)),"data-bs-target":"#createNftModal2","data-bs-toggle":"modal"},"Confirm")])])])])):Object(a["createCommentVNode"])("",!0),n.authorPrivateKey&&!0===G.checkInputData?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",R,[Object(a["createElementVNode"])("div",U,[Object(a["createElementVNode"])("div",B,[Object(a["createElementVNode"])("div",K,[Object(a["createElementVNode"])("h4",L,"You created "+Object(a["toDisplayString"])(n.form.nftName),1),$,_]),z])])])):Object(a["createCommentVNode"])("",!0)])}var W=o("bc3a"),q=o.n(W),J=o("99e5"),Y=o.n(J),Q=o("07a4"),X=o("fe42"),Z=o("c5fa"),ee=o("5502");const te="https://j6e205.p.ssafy.io",oe=Z.abi,ae=Z.networks["202112031219"].address,le="http://20.196.209.2:8545";let ne=new Y.a(new Y.a.providers.HttpProvider(le));var ce={name:"Create",data(){return{SectionData:Q["a"],selected:"Select Collection",options:["Select Collection","Abstraction","Patternlicious","Skecthify","Cartoonism","Virtuland","Papercut"],form:{nftWorkUri:null,nftType:null,nftName:null,nftAuthorName:this.username,nftDescription:null,file:null},authorPrivateKey:null,newtokenId:null}},methods:{selectFile(e){this.form.file=e.target.files[0]},checkInputData(){if(this.form.file&&this.form.nftName&&this.form.nftDescription)return console.log("통과"),!0;alert("Please Input information for Create your item")},async submitCreateNFT(){console.log(le,"GANACHE_SERVER_URL"),console.log(te,"SERVER_URL"),console.log(typeof this.authorPrivateKey);const e=await Object(X["a"])(this.authorPrivateKey);console.log(typeof e,"체크퍼브키");const t=await this.myAddress;if(console.log(typeof t,"되나"),e===t){let e=new FormData;e.append("nftAuthorName",this.username),e.append("nftName",this.form.nftName),e.append("nftDescription",this.form.nftDescription),e.append("file",this.form.file);const o=await q()({method:"POST",url:te+"/api/file",data:e,headers:{Authorization:this.$store.state.authToken,"Content-Type":"multipart/form-data"}}),a=o.data.nftMetadataUri,l=await new ne.eth.Contract(oe,ae);console.log(l,"NFTcreateContractInstance");let n=await l.methods.create(t,a),c=ne.setProvider(new Y.a.providers.HttpProvider(le));console.log(ne,"web3"),console.log(c,"web2"),console.log(ne.currentProvider,"?"),console.log(n,"createNFTResponse");const r=n.encodeABI();console.log(r,"contractEncodedMethod");const s={from:t,to:ae,gas:5e5,data:r};c=ne.setProvider(new Y.a.providers.HttpProvider(le)),console.log(ne,"web3"),console.log(c,"web2"),console.log(ne.currentProvider,"?"),console.log(s,"rawTx");const i=await ne.eth.accounts.signTransaction(s,this.authorPrivateKey);if(console.log(i,"signedTx"),null==i)console.log("TransactionSignFailedException");else{let e=await ne.eth.sendSignedTransaction(i.rawTransaction);console.log(e,"tran"),console.log(e,"tran")}console.log("이후 토큰 아이디");let d=await l.methods.current().call();c=ne.setProvider(new Y.a.providers.HttpProvider(le)),console.log(ne,"web3"),console.log(c,"web2"),console.log(ne.currentProvider,"?"),this.newtokenId=d,console.log(d,"이거토큰아이디임"),console.log("1번 아이디입니다 "),console.log("아아");await l.methods.ownerOf(d).call().then(console.log),await l.methods.tokenURI(d).call().then(console.log);console.log(d,"newtokenId"),console.log(n,"createNFTResponse"),console.log("------------------------"),d=await l.methods.current().call(),console.log(d,"newtokenId"),console.log(n,"createNFTResponse");let m=l.methods.getApproved(d).call();console.log(m,"11111111111111111"),console.log(d,t,a,ae,"됩니까");await q()({method:"PUT",url:te+"/api/file/update",data:{tokenId:d,ownerAddress:t,metadataUri:a,contractAddress:ae},headers:{Authorization:this.$store.state.authToken}});await q()({method:"get",url:`${te}/api/nft/items/${t}`,headers:{Authorization:this.$store.state.authToken}}).then(e=>{const t=e.data.nftList[e.data.nftList.length-1].nftSeq;this.$router.push({name:"ProductDetail",params:{id:t}})})}else this.authorPrivateKey=null}},computed:{...Object(ee["d"])(["myAddress","username"]),...Object(ee["d"])(["authToken"])},mounted(){function e(e){let t=document.querySelectorAll(e);t.length>0&&t.forEach(e=>{e.addEventListener("change",(function(){var t=document.getElementById(e.dataset.target),o=["jpg","png","gif","webp","mp4","mp3"],a=this.value.split(".").pop(),l=this.value.lastIndexOf("."),n=this.value.substring(l+1),c=t.value=n;o.includes(a)?t.innerHTML=e.files[0].name:(alert(c+" file type not allowed, Please upload jpg, png, gif, webp, mp4 or mp3 file"),t.innerHTML="Please upload jpg, png, gif, webp, mp4 or mp3 file")}))})}e(".file-upload-input")}},re=o("6b0d"),se=o.n(re);const ie=se()(ce,[["render",G]]);t["default"]=ie},cb98:function(e,t,o){e.exports=o.p+"img/nft-full.15f80265.jpg"}}]);