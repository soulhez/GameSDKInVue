webpackJsonp([1],{"2/YV":function(e,t){},"6fQ1":function(e,t,a){"use strict";var n=a("K3kf"),i=a.n(n),o=a("i83z");var s=function(e){a("OY/p")},l=a("VU/8")(i.a,o.a,!1,s,"data-v-fbe3c510",null);t.default=l.exports},DuU9:function(e,t){},EpXO:function(e,t){},K3kf:function(e,t){},MmJe:function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("7+uW"),i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var o=a("VU/8")({name:"App"},i,!1,function(e){a("DuU9")},null,null).exports,s=a("/ocq"),l={data:function(){return{tableData:[],isLoading:!1,dialogVisible:!1,modifyDialogVisible:!1,deleteId:0,modifyId:0,gameName:"",userToken:window.localStorage.getItem("userToken"),currentPage:1,allPage:1}},created:function(){},mounted:function(){this.getInfo()},methods:{addGame:function(){var e=this;this.$prompt("请输入游戏名","提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then(function(t){var a=t.value;console.log(a),null===a?e.$message.error("请输入正确的游戏名"):e.axios.post("/game/add",{game_name:a,user_token:e.userToken}).then(function(t){200===t.data.code&&(e.$message({message:"新增成功",type:"success"}),e.getInfo())}).catch(function(e){})}).catch(function(){})},handleCurrentChange:function(e){this.currentPage=e,this.getInfo()},getInfo:function(){var e=this;this.isLoading=!0,console.log(this.userToken);this.axios.post("/game/page",{user_token:this.userToken,page:this.currentPage}).then(function(t){e.isLoading=!1,200===t.data.code?(console.log(t.data),e.tableData=t.data.data.list,e.allPage=10*t.data.data.page):console.log(t.data.msg)})},modifyGame:function(e){this.modifyDialogVisible=!0,this.modifyId=e},deleteGame:function(e){this.dialogVisible=!0,this.deleteId=e},innerDeleteGame:function(){var e=this;this.dialogVisible=!1,this.axios.post("/game/delete",{id:this.deleteId,user_token:this.userToken}).then(function(t){200===t.data.code&&(e.$message({message:"删除成功",type:"success"}),e.getInfo())}).catch(function(e){})},innerModifyGame:function(){var e=this;this.modifyDialogVisible=!1,this.axios.post("/game/modify",{id:this.modifyId,game_name:this.gameName,user_token:this.userToken}).then(function(t){200===t.data.code&&(e.$message({message:"修改成功",type:"success"}),e.getInfo())}).catch(function(e){})}}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"body"},[a("el-button",{attrs:{type:"primary"},on:{click:e.addGame}},[e._v("创建游戏")]),e._v(" "),a("el-dialog",{attrs:{title:"提示",visible:e.modifyDialogVisible,width:"30%"},on:{"update:visible":function(t){e.modifyDialogVisible=t}}},[a("span",[e._v("游戏名")]),e._v(" "),a("el-input",{staticClass:"name-input",attrs:{"prefix-icon":"el-icon-tickets",placeholder:"请输入游戏名",type:"text",clearable:""},model:{value:e.gameName,callback:function(t){e.gameName=t},expression:"gameName"}}),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.modifyDialogVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.innerModifyGame}},[e._v("确 定")])],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.isLoading,expression:"isLoading"}],staticClass:"table",attrs:{border:"",data:e.tableData,height:"700"}},[a("el-table-column",{attrs:{prop:"gid",label:"id",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"gameName",label:"游戏名称",width:"200"}}),e._v(" "),a("el-table-column",{attrs:{prop:"appId",label:"appId",width:"350"}}),e._v(" "),a("el-table-column",{attrs:{prop:"appKey",label:"appKey",width:"350"}}),e._v(" "),a("el-table-column",{attrs:{prop:"gameTime",label:"创建（修改）时间",width:"250"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",fixed:"right",width:"250"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary"},nativeOn:{click:function(a){a.preventDefault(),e.modifyGame(t.row.gid)}}},[e._v("修改")]),e._v(" "),a("el-button",{attrs:{type:"danger"},nativeOn:{click:function(a){a.preventDefault(),e.deleteGame(t.row.gid)}}},[e._v("删除")])]}}])})],1),e._v(" "),a("el-pagination",{staticClass:"pagination",attrs:{background:"",layout:"prev, pager, next","page-size":10,"current-page":e.currentPage,total:e.allPage},on:{"current-change":e.handleCurrentChange}}),e._v(" "),a("el-dialog",{attrs:{title:"提示",visible:e.dialogVisible,width:"30%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("span",[e._v("确定删除该游戏？")]),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.innerDeleteGame}},[e._v("确 定")])],1)])],1)},staticRenderFns:[]};var d=a("VU/8")(l,r,!1,function(e){a("vo1m")},"data-v-b251e248",null).exports,c={data:function(){return{gameName:"全部游戏",items:[],isLoading:!1,tableData:[],gameId:0,userToken:window.localStorage.getItem("userToken"),currentPage:1,allPage:1}},mounted:function(){this.getGameName()},methods:{handleCurrentChange:function(e){this.currentPage=e,this.getGameById()},setColumnGameName:function(e,t){if(void 0===e[t.property])return this.gameName},setGameName:function(e,t){console.log(e),this.gameName=e,this.gameId=t,this.getGameById()},getGameName:function(){var e=this;this.isLoading=!0,console.log(this.$route.params.userToken);this.axios.post("/game/all",{user_token:window.localStorage.getItem("userToken")}).then(function(t){e.isLoading=!1,200===t.data.code?(console.log(t.data),e.items=t.data.data,t.data.data.length>0&&e.setGameName(t.data.data[0].gameName,t.data.data[0].gid)):console.log(t.data.msg)})},getGameById:function(){var e=this;this.isLoading=!0;this.axios.post("/device/page",{user_token:this.userToken,game_id:this.gameId,page:this.currentPage}).then(function(t){e.isLoading=!1,200===t.data.code?(console.log(t.data),e.tableData=t.data.data.list,e.allPage=10*t.data.data.page):console.log(t.data.msg)})}}},u={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-dropdown",[a("el-button",{attrs:{type:"primary"}},[e._v("\n            "+e._s(e.gameName)+"\n            "),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},e._l(e.items,function(t,n){return a("el-dropdown-item",{key:n,nativeOn:{click:function(a){e.setGameName(t.gameName,t.gid)}}},[e._v(e._s(t.gameName))])}))],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.isLoading,expression:"isLoading"}],staticClass:"table",attrs:{border:"",data:e.tableData,height:"530"}},[a("el-table-column",{attrs:{prop:"did",label:"id",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"gameName",formatter:e.setColumnGameName,label:"游戏名称",width:"250"}}),e._v(" "),a("el-table-column",{attrs:{prop:"platform",label:"平台",width:"300"}}),e._v(" "),a("el-table-column",{attrs:{prop:"brand",label:"品牌",width:"300"}}),e._v(" "),a("el-table-column",{attrs:{prop:"model",label:"型号",width:"250"}}),e._v(" "),a("el-table-column",{attrs:{prop:"createTime",label:"创建时间",width:"250"}})],1),e._v(" "),a("el-pagination",{staticClass:"pagination",attrs:{background:"",layout:"prev, pager, next","page-size":10,"current-page":e.currentPage,total:e.allPage},on:{"current-change":e.handleCurrentChange}})],1)},staticRenderFns:[]};var m=a("VU/8")(c,u,!1,function(e){a("U6MZ")},"data-v-3a7abfd2",null).exports,g={data:function(){return{tableData:[],gameName:"全部游戏",gameId:0,isLoading:!1,items:[],userToken:window.localStorage.getItem("userToken"),currentPage:1,allPage:1}},mounted:function(){this.getGameName()},methods:{handleCurrentChange:function(e){this.currentPage=e,this.getGameById()},getGameName:function(){var e=this;this.isLoading=!0,console.log(this.$route.params.userToken);this.axios.post("/game/all",{user_token:window.localStorage.getItem("userToken")}).then(function(t){e.isLoading=!1,200===t.data.code?(console.log(t.data),e.items=t.data.data,t.data.data.length>0&&e.setGameName(t.data.data[0].gameName,t.data.data[0].gid)):console.log(t.data.msg)})},setGameName:function(e,t){console.log(e),this.gameName=e,this.gameId=t,this.getGameById()},getGameById:function(){var e=this;this.isLoading=!0;this.axios.post("/user/page",{user_token:this.userToken,game_id:this.gameId,page:this.currentPage}).then(function(t){e.isLoading=!1,200===t.data.code?(console.log(t.data),e.tableData=t.data.data.list,e.allPage=10*t.data.data.page):console.log(t.data.msg)})}}},p={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-dropdown",[a("el-button",{attrs:{type:"primary"}},[e._v("\n            "+e._s(e.gameName)+"\n            "),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},e._l(e.items,function(t,n){return a("el-dropdown-item",{key:n,nativeOn:{click:function(a){e.setGameName(t.gameName,t.gid)}}},[e._v(e._s(t.gameName))])}))],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.isLoading,expression:"isLoading"}],staticClass:"table",attrs:{border:"",data:e.tableData,height:"770"}},[a("el-table-column",{attrs:{prop:"uid",label:"id",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"userName",label:"用户名",width:"150"}}),e._v(" "),a("el-table-column",{attrs:{prop:"userImg",label:"头像",align:"center",width:"75"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("img",{staticClass:"user-img",attrs:{src:e.row.userImg}})]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"userToken",label:"token",width:"300"}}),e._v(" "),a("el-table-column",{attrs:{prop:"userLevel",label:"等级",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"userSex",label:"性别",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"userOpenId",label:"openId",width:"300"}}),e._v(" "),a("el-table-column",{attrs:{prop:"platform",label:"平台",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"createTime",label:"创建时间",width:"250"}})],1),e._v(" "),a("el-pagination",{staticClass:"pagination",attrs:{background:"",layout:"prev, pager, next","page-size":10,"current-page":e.currentPage,total:e.allPage},on:{"current-change":e.handleCurrentChange}})],1)},staticRenderFns:[]};var h=a("VU/8")(g,p,!1,function(e){a("XztD")},"data-v-4473e79d",null).exports,v={data:function(){return{tableData:[],gameName:"全部游戏",gameId:0,isLoading:!1,items:[],userToken:window.localStorage.getItem("userToken"),currentPage:1,allPage:1}},mounted:function(){this.getGameName()},methods:{setColumnPayStatus:function(e,t){return console.log(e[t.property]),"0"===e[t.property]?"未支付":"已支付"},handleCurrentChange:function(e){this.currentPage=e,this.getPayById()},getGameName:function(){var e=this;this.isLoading=!0,console.log(this.$route.params.userToken);this.axios.post("/game/all",{user_token:window.localStorage.getItem("userToken")}).then(function(t){e.isLoading=!1,200===t.data.code?(console.log(t.data),e.items=t.data.data,t.data.data.length>0&&e.setGameName(t.data.data[0].gameName,t.data.data[0].gid)):console.log(t.data.msg)})},setGameName:function(e,t){console.log(e),this.gameName=e,this.gameId=t,this.getPayById()},getPayById:function(){var e=this;this.isLoading=!0;this.axios.post("/pay/page",{user_token:this.userToken,game_id:this.gameId,page:this.currentPage}).then(function(t){e.isLoading=!1,200===t.data.code?(console.log(t.data),e.tableData=t.data.data.list,e.allPage=10*t.data.data.page):console.log(t.data.msg)})}}},f={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-dropdown",[a("el-button",{attrs:{type:"primary"}},[e._v("\n            "+e._s(e.gameName)+"\n            "),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},e._l(e.items,function(t,n){return a("el-dropdown-item",{key:n,nativeOn:{click:function(a){e.setGameName(t.gameName,t.gid)}}},[e._v(e._s(t.gameName))])}))],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.isLoading,expression:"isLoading"}],staticClass:"table",attrs:{border:"",data:e.tableData,height:"980"}},[a("el-table-column",{attrs:{prop:"pid",label:"id",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"productName",label:"商品名",width:"150"}}),e._v(" "),a("el-table-column",{attrs:{prop:"productPrice",label:"商品价格（元）",width:"150"}}),e._v(" "),a("el-table-column",{attrs:{prop:"gameOrderNo",label:"游戏内订单号",width:"150"}}),e._v(" "),a("el-table-column",{attrs:{prop:"payStatus",label:"支付状态",formatter:e.setColumnPayStatus,align:"center",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"payWay",label:"支付方式 ",align:"center",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"payTime",label:"支付时间 ",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"userId",label:"用户id ",width:"100 "}}),e._v(" "),a("el-table-column",{attrs:{prop:"payTradeNo",label:"预订单 ",width:"300 "}}),e._v(" "),a("el-table-column",{attrs:{prop:"createTime",label:"创建时间 ",width:"250 "}})],1),e._v(" "),a("el-pagination",{staticClass:"pagination ",attrs:{background:"",layout:"prev, pager, next ","page-size":10,"current-page":e.currentPage,total:e.allPage},on:{"current-change":e.handleCurrentChange}})],1)},staticRenderFns:[]};var _=a("VU/8")(v,f,!1,function(e){a("dwac")},null,null).exports,b={data:function(){return{inputUsername:"",inputPwd:"",isLoading:!1}},methods:{login:function(e){var t=this;if(""===this.inputUsername||this.inputUsername.length<=5)this.$message.error("用户名格式不正确");else if(""===this.inputPwd||this.inputPwd.length<=5)this.$message.error("密码格式不正确");else{this.isLoading=!0;this.axios.post("admin/login",{user_name:this.inputUsername,user_pwd:this.inputPwd}).then(function(e){t.isLoading=!1,console.log(e.data),200===e.data.code?(t.$router.push({name:"game",params:{userToken:e.data.data.userToken}}),window.localStorage.setItem("userToken",e.data.data.userToken),t.$message({message:e.data.msg,type:"success"})):t.$message.error(e.data.msg)}).catch(function(e){t.isLoading=!1,t.$message.error("网络错误")})}}}},w={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"login-container"},[a("div",{staticClass:"login-div"},[a("h3",[e._v(" SDK 后台登录")]),e._v(" "),a("p",{staticClass:"login-text"},[e._v(" 用户名：")]),e._v(" "),a("el-input",{attrs:{"prefix-icon":"el-icon-tickets",placeholder:"请输入用户名",type:"text",clearable:""},model:{value:e.inputUsername,callback:function(t){e.inputUsername=t},expression:"inputUsername"}}),e._v(" "),a("p",{staticClass:"login-text"},[e._v("密码：")]),e._v(" "),a("el-input",{attrs:{"prefix-icon":"el-icon-view",placeholder:"请输入密码",type:"password",clearable:""},model:{value:e.inputPwd,callback:function(t){e.inputPwd=t},expression:"inputPwd"}}),e._v(" "),a("el-button",{staticClass:"login-btn",attrs:{type:"primary",loading:e.isLoading},on:{click:e.login}},[e._v("登录")])],1)])},staticRenderFns:[]};var y=a("VU/8")(b,w,!1,function(e){a("MmJe")},"data-v-ddc1c98c",null).exports,k=a("jHag"),C=a("6fQ1"),N={components:{vHead:k.default,vSideBar:C.default}},x={render:function(){var e=this.$createElement,t=this._self._c||e;return t("el-container",{staticStyle:{height:"100%",width:"100%"}},[t("el-header",[t("v-head")],1),this._v(" "),t("el-container",[t("v-side-bar"),this._v(" "),t("el-main",[t("router-view")],1)],1)],1)},staticRenderFns:[]};var I=a("VU/8")(N,x,!1,function(e){a("lr2e")},"data-v-4cb21322",null).exports,P={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"error-page"},[a("div",{staticClass:"error-code"},[e._v("404")]),e._v(" "),a("div",{staticClass:"error-desc"},[e._v("啊哦~ 你所访问的页面不存在")]),e._v(" "),a("div",{staticClass:"error-handle"},[a("router-link",{attrs:{to:"/login"}},[a("el-button",{attrs:{type:"primary",size:"large"}},[e._v("返回首页")])],1),e._v(" "),a("el-button",{staticClass:"error-btn",attrs:{type:"primary",size:"large"},on:{click:e.goBack}},[e._v("返回上一页")])],1)])},staticRenderFns:[]};var T=a("VU/8")({methods:{goBack:function(){this.$router.go(-1)}}},P,!1,function(e){a("EpXO")},"data-v-457d9022",null).exports;n.default.use(s.a);var L=new s.a({mode:"history",base:"/sdk/",routes:[{path:"/home",name:"home",component:I,children:[{path:"/device",name:"device",component:m},{path:"/game",name:"game",component:d},{path:"/pay",name:"pay",component:_},{path:"/user",name:"user",component:h}]},{path:"/login",name:"login",component:y},{path:"/404",name:"NotFound",component:T},{path:"*",name:"NotFound",component:T}]}),G=a("zL8q"),D=a.n(G),$=(a("tvR6"),a("mtWM")),V=a.n($),U=a("Rf8U"),S=a.n(U),R=a("mw3O"),B=a.n(R),O=V.a.create({baseURL:location.protocol+"//119.29.233.121:8080/game-0.0.1-SNAPSHOT/",transformRequest:function(e){return B.a.stringify(e)},headers:{"Content-Type":"application/x-www-form-urlencoded"}});n.default.config.productionTip=!1,n.default.use(D.a),n.default.use(S.a,O),new n.default({el:"#app",router:L,components:{App:o},template:"<App/>"})},"OY/p":function(e,t){},U6MZ:function(e,t){},XztD:function(e,t){},bLiq:function(e,t,a){"use strict";var n={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"header"},[t("div",{staticClass:"title"},[this._v("SDK 后台管理系统")])])}]};t.a=n},dwac:function(e,t){},i83z:function(e,t,a){"use strict";var n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-aside",{staticClass:"main-side",attrs:{width:"200px",height:"100%"}},[a("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{router:"","default-active":e.$route.path,collapse:!1,"background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"}},[a("el-menu-item",{attrs:{index:"/game"}},[a("i",{staticClass:"el-icon-location"}),e._v(" "),a("span",{staticClass:"main-title",attrs:{slot:"title"},slot:"title"},[e._v("游戏管理")])]),e._v(" "),a("el-menu-item",{attrs:{index:"/user"}},[a("i",{staticClass:"el-icon-document"}),e._v(" "),a("span",{staticClass:"main-title",attrs:{slot:"title"},slot:"title"},[e._v("用户管理")])]),e._v(" "),a("el-menu-item",{attrs:{index:"/pay"}},[a("i",{staticClass:"el-icon-setting"}),e._v(" "),a("span",{staticClass:"main-title",attrs:{slot:"title"},slot:"title"},[e._v("支付管理")])]),e._v(" "),a("el-menu-item",{attrs:{index:"/device"}},[a("i",{staticClass:"el-icon-mobile-phone"}),e._v(" "),a("span",{staticClass:"main-title",attrs:{slot:"title"},slot:"title"},[e._v("设备管理")])])],1)],1)},staticRenderFns:[]};t.a=n},jHag:function(e,t,a){"use strict";var n=a("yMHH"),i=a.n(n),o=a("bLiq");var s=function(e){a("2/YV")},l=a("VU/8")(i.a,o.a,!1,s,"data-v-af60e53a",null);t.default=l.exports},lr2e:function(e,t){},tvR6:function(e,t){},vo1m:function(e,t){},yMHH:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.f0739964a0ebdff32519.js.map