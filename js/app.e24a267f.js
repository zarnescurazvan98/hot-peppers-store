(function(){"use strict";var e={1993:function(e,t,r){var a=r(5130),i=r(6768);const o={id:"app",class:"flex flex-col min-h-screen bg-gray-50"},s={class:"flex-grow overflow-y-auto pt-16 pb-16"};function n(e,t,r,a,n,l){const c=(0,i.g2)("Header"),p=(0,i.g2)("router-view"),d=(0,i.g2)("Footer"),u=(0,i.g2)("ToastNotification");return(0,i.uX)(),(0,i.CE)("div",o,[(0,i.bF)(c),(0,i.Lk)("main",s,[(0,i.bF)(p,{onShowToast:l.showToast},null,8,["onShowToast"])]),(0,i.bF)(d),n.toastVisible?((0,i.uX)(),(0,i.Wv)(u,{key:0,product:n.toastProduct,quantity:n.toastQuantity},null,8,["product","quantity"])):(0,i.Q3)("",!0)])}var l=r(4232);const c=["src"],p={class:"font-semibold"};function d(e,t,r,a,o,s){return o.visible?((0,i.uX)(),(0,i.CE)("div",{key:0,class:(0,l.C4)(["fixed top-20 right-10 bg-green-600 text-white p-4 rounded-lg shadow-lg transition-opacity duration-300 flex items-center space-x-4",{"opacity-0":!o.visible}])},[(0,i.Lk)("img",{src:r.product.image,alt:"Product Image",class:"w-12 h-12 object-cover rounded-md"},null,8,c),(0,i.Lk)("div",null,[(0,i.Lk)("p",p,(0,l.v_)(r.product.name),1),(0,i.Lk)("p",null,(0,l.v_)(r.quantity)+" x added to the cart",1)])],2)):(0,i.Q3)("",!0)}var u={props:{product:{type:Object,required:!0},quantity:{type:Number,required:!0}},data(){return{visible:!1}},mounted(){this.visible=!0,setTimeout((()=>{this.visible=!1}),1e3)}},g=r(1241);const m=(0,g.A)(u,[["render",d]]);var h=m;const f={class:"bg-green-600 text-white fixed top-0 left-0 right-0 z-10 h-16 flex items-center"},v={class:"container mx-auto px-4 flex justify-between items-center"},y={class:"flex space-x-4 items-center"},b={key:0,class:"absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center"};function x(e,t,r,a,o,s){const n=(0,i.g2)("router-link");return(0,i.uX)(),(0,i.CE)("header",f,[(0,i.Lk)("div",v,[(0,i.bF)(n,{to:"/",class:"text-2xl font-bold hover:text-green-300 transition"},{default:(0,i.k6)((()=>t[0]||(t[0]=[(0,i.eW)(" Hot Peppers Store ")]))),_:1}),(0,i.Lk)("nav",y,[(0,i.bF)(n,{to:"/",class:"px-4 py-2 hover:bg-green-500 rounded-md transition flex items-center space-x-1"},{default:(0,i.k6)((()=>t[1]||(t[1]=[(0,i.Lk)("i",{class:"fas fa-home"},null,-1),(0,i.Lk)("span",null,"Home",-1)]))),_:1}),(0,i.bF)(n,{to:"/products",class:"px-4 py-2 hover:bg-green-500 rounded-md transition flex items-center space-x-1"},{default:(0,i.k6)((()=>t[2]||(t[2]=[(0,i.Lk)("i",{class:"fas fa-pepper-hot"},null,-1),(0,i.Lk)("span",null,"Products",-1)]))),_:1}),(0,i.bF)(n,{to:"/cart",class:"relative px-4 py-2 hover:bg-green-500 rounded-md transition flex items-center space-x-1"},{default:(0,i.k6)((()=>[t[3]||(t[3]=(0,i.Lk)("i",{class:"fas fa-shopping-cart"},null,-1)),t[4]||(t[4]=(0,i.Lk)("span",null,"Cart",-1)),e.cartCount>0?((0,i.uX)(),(0,i.CE)("span",b,(0,l.v_)(e.cartCount),1)):(0,i.Q3)("",!0)])),_:1})])])])}var w=r(782),k={name:"HeaderComponent",computed:{...(0,w.L8)(["cartCount"])}};const P=(0,g.A)(k,[["render",x]]);var L=P;const S={class:"bg-gray-800 text-white py-4"};function C(e,t,r,a,o,s){return(0,i.uX)(),(0,i.CE)("footer",S,t[0]||(t[0]=[(0,i.Lk)("div",{class:"container mx-auto text-center"},[(0,i.Lk)("p",null,"© 2024 Hot Peppers Store. All rights reserved.")],-1)]))}var _={name:"FooterComponent"};const j=(0,g.A)(_,[["render",C]]);var A=j,O={name:"App",components:{ToastNotification:h,Header:L,Footer:A},data(){return{toastVisible:!1,toastProduct:null,toastQuantity:null}},methods:{showToast(e,t){this.toastProduct=e,this.toastQuantity=t,this.toastVisible=!0,setTimeout((()=>{this.toastVisible=!1}),1e3)}}};const q=(0,g.A)(O,[["render",n],["__scopeId","data-v-7f39e15d"]]);var T=q,F=r(1387);const D={class:"homepage"},H={class:"relative h-[70vh] bg-cover bg-center",style:{"background-image":"url('./images/banner_hot_peppers.jpeg')"}},E={class:"relative z-5 text-center text-white p-10"},Q={class:"py-10 bg-gray-100"},I={class:"container mx-auto text-center"},U={class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10"},X={class:"py-10 bg-gray-100"},N={class:"container mx-auto text-center"},V={class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10"};function W(e,t,r,a,o,s){const n=(0,i.g2)("router-link"),l=(0,i.g2)("ProductCard");return(0,i.uX)(),(0,i.CE)("div",D,[(0,i.Lk)("section",H,[t[3]||(t[3]=(0,i.Lk)("div",{class:"absolute inset-0 bg-black opacity-50"},null,-1)),(0,i.Lk)("div",E,[t[1]||(t[1]=(0,i.Lk)("h1",{class:"text-5xl font-bold mb-4"},"Spice Up Your Life with Our Hottest Peppers!",-1)),t[2]||(t[2]=(0,i.Lk)("p",{class:"text-xl mb-6"},"Discover the hottest and rarest peppers from around the world.",-1)),(0,i.bF)(n,{to:"/products",class:"bg-green-600 text-white py-3 px-8 rounded-full hover:bg-green-700 transition duration-200"},{default:(0,i.k6)((()=>t[0]||(t[0]=[(0,i.eW)(" Shop Now ")]))),_:1})])]),(0,i.Lk)("section",Q,[(0,i.Lk)("div",I,[t[4]||(t[4]=(0,i.Lk)("h2",{class:"text-4xl font-bold mb-6"},"Best Sellers",-1)),(0,i.Lk)("div",U,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(o.featuredProducts,(e=>((0,i.uX)(),(0,i.Wv)(l,{key:e.id,product:e,onShowToast:s.forwardToast},null,8,["product","onShowToast"])))),128))])])]),t[6]||(t[6]=(0,i.Fv)('<section class="py-10 bg-white"><div class="container mx-auto text-center"><h2 class="text-4xl font-bold mb-6">Pepper Heat Levels</h2><p class="text-lg text-gray-600 mb-6">Not all peppers are created equal! Here&#39;s a breakdown of the heat levels of the peppers we offer, based on the Scoville Heat Units (SHU).</p><ul class="text-lg text-gray-600 space-y-4"><li><strong>Mild Peppers:</strong> 100 - 2,500 SHU (e.g., Bell Peppers, Hatch Green Chiles)</li><li><strong>Medium Heat Peppers:</strong> 2,500 - 25,000 SHU (e.g., Jalapeños, Poblano Peppers)</li><li><strong>Hot Peppers:</strong> 25,000 - 100,000 SHU (e.g., Cayenne, Serrano Peppers)</li><li><strong>Very Hot Peppers:</strong> 100,000 - 350,000 SHU (e.g., Habanero, Scotch Bonnet)</li><li><strong>Super Hot Peppers:</strong> 350,000 - 2,200,000 SHU (e.g., Carolina Reaper, Ghost Pepper)</li></ul></div></section>',1)),(0,i.Lk)("section",X,[(0,i.Lk)("div",N,[t[5]||(t[5]=(0,i.Lk)("h2",{class:"text-4xl font-bold mb-6"},"New Arrivals",-1)),(0,i.Lk)("div",V,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(o.newArrivals,(e=>((0,i.uX)(),(0,i.Wv)(l,{key:e.id,product:e},null,8,["product"])))),128))])])]),t[7]||(t[7]=(0,i.Fv)('<section class="py-10 bg-white"><div class="container mx-auto text-center"><h2 class="text-4xl font-bold mb-6">About Us</h2><p class="text-lg text-gray-600 max-w-3xl mx-auto"> Welcome to Hot Peppers Store! We are passionate about bringing the best and hottest peppers from around the globe to spice up your dishes. Our commitment to quality ensures that every pepper you purchase is fresh and full of flavor. </p></div></section><section class="py-10 bg-gray-100"><div class="container mx-auto text-center"><h2 class="text-4xl font-bold mb-6">What Our Customers Are Saying</h2><div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"><div class="bg-white p-6 rounded-lg shadow-md"><p class="text-gray-600">&quot;Absolutely love the variety! The Death Spiral pepper is now a staple in my kitchen!&quot;</p><p class="mt-4 font-semibold">- John D.</p></div><div class="bg-white p-6 rounded-lg shadow-md"><p class="text-gray-600">&quot;Fast shipping and the quality of the peppers is top-notch.&quot;</p><p class="mt-4 font-semibold">- Sarah M.</p></div><div class="bg-white p-6 rounded-lg shadow-md"><p class="text-gray-600">&quot;The super-hot collection is incredible! Perfect for my spicy recipes!&quot;</p><p class="mt-4 font-semibold">- Alex P.</p></div></div></div></section><section class="py-10 bg-white"><div class="container mx-auto text-center"><h2 class="text-4xl font-bold mb-6">Subscribe for Updates</h2><p class="text-lg text-gray-600 mb-4">Get the latest on new arrivals, promotions, and spicy recipes!</p><form class="flex justify-center"><input type="email" placeholder="Enter your email" class="p-3 rounded-l-lg border border-gray-300"><button type="submit" class="bg-green-600 text-white py-3 px-6 rounded-r-lg hover:bg-green-700 transition">Subscribe</button></form></div></section>',3))])}const $={class:"bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-200 flex flex-col h-full transform hover:scale-105 transition-transform"},B={class:"relative"},M=["src"],R={class:"p-4 flex flex-col flex-grow"},J={class:"flex-1"},G={class:"text-xl font-bold text-gray-800 mb-2 truncate"},K={class:"text-gray-600 text-sm mb-4 line-clamp-3"},Y={class:"mt-2 flex justify-between items-center"},z={class:"text-lg font-semibold text-green-600"},Z={class:"text-sm text-gray-500"},ee={class:"mt-4"};function te(e,t,r,a,o,s){const n=(0,i.g2)("QuantitySelector");return(0,i.uX)(),(0,i.CE)("div",$,[(0,i.Lk)("div",B,[(0,i.Lk)("img",{src:r.product.image,alt:"Product Image",class:"w-full h-56 object-cover rounded-t-lg"},null,8,M)]),(0,i.Lk)("div",R,[(0,i.Lk)("div",J,[(0,i.Lk)("h2",G,(0,l.v_)(r.product.name),1),(0,i.Lk)("p",K,(0,l.v_)(r.product.description),1)]),(0,i.Lk)("div",Y,[(0,i.Lk)("p",z,"$"+(0,l.v_)(r.product.price.toFixed(2)),1),(0,i.Lk)("span",Z,[t[2]||(t[2]=(0,i.Lk)("i",{class:"fas fa-fire text-red-500"},null,-1)),(0,i.eW)(" "+(0,l.v_)(r.product.scovilleScale.toLocaleString())+" SHU",1)])]),(0,i.Lk)("div",ee,[t[3]||(t[3]=(0,i.Lk)("label",{for:"quantity",class:"block text-sm font-medium text-gray-700"},"Quantity:",-1)),(0,i.bF)(n,{modelValue:o.selectedQuantity,"onUpdate:modelValue":t[0]||(t[0]=e=>o.selectedQuantity=e)},null,8,["modelValue"])]),(0,i.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>s.addToCart&&s.addToCart(...e)),class:"mt-4 w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-200 flex items-center justify-center"},t[4]||(t[4]=[(0,i.Lk)("i",{class:"fas fa-shopping-cart mr-2"},null,-1),(0,i.eW)(" Add to Cart ")]))])])}const re={class:"flex items-center space-x-2"},ae={class:"text-lg"};function ie(e,t,r,a,o,s){return(0,i.uX)(),(0,i.CE)("div",re,[(0,i.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>s.decreaseQuantity&&s.decreaseQuantity(...e)),class:"bg-gray-200 text-gray-700 px-3 py-1 rounded-md hover:bg-gray-300 transition"},"-"),(0,i.Lk)("span",ae,(0,l.v_)(s.quantity),1),(0,i.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>s.increaseQuantity&&s.increaseQuantity(...e)),class:"bg-gray-200 text-gray-700 px-3 py-1 rounded-md hover:bg-gray-300 transition"},"+")])}var oe={name:"QuantitySelector",props:{modelValue:{type:Number,required:!0},max:{type:Number,default:10},min:{type:Number,default:1}},computed:{quantity:{get(){return this.modelValue},set(e){this.$emit("update:modelValue",e)}}},methods:{increaseQuantity(){this.quantity<this.max&&(this.quantity+=1)},decreaseQuantity(){this.quantity>this.min&&(this.quantity-=1)}}};const se=(0,g.A)(oe,[["render",ie]]);var ne=se,le={name:"ProductCard",components:{QuantitySelector:ne},props:{product:{type:Object,required:!0}},data(){return{selectedQuantity:1}},methods:{addToCart(){const e={...this.product,quantity:this.selectedQuantity};this.$store.dispatch("addProduct",e),this.$emit("show-toast",this.product,this.selectedQuantity)}}};const ce=(0,g.A)(le,[["render",te]]);var pe=ce,de=JSON.parse('[{"id":1,"name":"Aji Charapita Pepper","description":"A tiny, fiery pepper known as the \'mother of all peppers\' in Peru, used for its intense heat and citrusy flavor.","price":12.99,"scovilleScale":30000,"image":"./images/peppers/aji_charapita.jpg"},{"id":2,"name":"Aji Fantasy Pepper","description":"A mild, fruity pepper with a sweet and citrusy flavor, commonly grown in Finland.","price":9.99,"scovilleScale":5000,"image":"./images/peppers/aji_fantasy.jpg"},{"id":3,"name":"Black Panther Orange Pepper","description":"A rare, visually striking pepper with a sweet, fruity flavor and medium heat.","price":14.99,"scovilleScale":50000,"image":"./images/peppers/black_panther_orange.jpg"},{"id":4,"name":"Buena Mulata Pepper","description":"A beautiful, vibrant purple cayenne-type pepper that turns red when mature, with a medium heat.","price":8.99,"scovilleScale":30000,"image":"./images/peppers/buena_mulata.jpg"},{"id":5,"name":"Candy Cane Pepper","description":"A variegated sweet pepper with stripes, providing a crunchy, sweet taste.","price":7.99,"scovilleScale":5000,"image":"./images/peppers/candy_cane.jpg"},{"id":6,"name":"Death Spiral Pepper","description":"A wickedly hot pepper with a bumpy texture and extreme heat, originating from the UK.","price":15.99,"scovilleScale":1500000,"image":"./images/peppers/death_spiral.jpg"},{"id":7,"name":"Fish Pepper","description":"An heirloom pepper with striking variegated foliage and a moderate heat level, historically used in seafood dishes.","price":6.99,"scovilleScale":5000,"image":"./images/peppers/fish.jpg"},{"id":8,"name":"Habanero Mustard Pepper","description":"A mustard-colored habanero pepper with a fruity, tropical flavor and intense heat.","price":9.49,"scovilleScale":325000,"image":"./images/peppers/habanero_mustard.jpg"},{"id":9,"name":"Hatch Green Chile Pepper","description":"A popular New Mexican pepper known for its mild heat and earthy flavor.","price":6.49,"scovilleScale":5000,"image":"./images/peppers/hatch_green_chile.jpg"},{"id":10,"name":"Jay\'s Peach Ghost Scorpion Pepper","description":"A super-hot pepper with a unique peach color and an extreme fiery heat level.","price":13.99,"scovilleScale":1200000,"image":"./images/peppers/jay\'s_peach_ghost_scorpion.jpg"},{"id":11,"name":"Jimmy Nardello Pepper","description":"A sweet, thin-skinned pepper often used for frying, with a mild, sweet taste.","price":5.99,"scovilleScale":100,"image":"./images/peppers/jimmy_nardello.jpg"},{"id":12,"name":"Lesya Pepper","description":"A Ukrainian heirloom sweet pepper with a robust, rich flavor and no heat.","price":6.49,"scovilleScale":0,"image":"./images/peppers/lesya.jpg"},{"id":13,"name":"MOA Scotch Bonnet Pepper","description":"A Caribbean hot pepper with a fruity flavor and intense heat, perfect for jerk seasoning.","price":10.99,"scovilleScale":350000,"image":"./images/peppers/moa_scotch_bonnet.jpg"},{"id":14,"name":"Olive Nagabrains Pepper","description":"A super-hot pepper with an olive-green hue and a fruity flavor, extremely rare.","price":14.49,"scovilleScale":1000000,"image":"./images/peppers/olive_nagabrains.jpg"},{"id":15,"name":"Paradeisfruchtiger Pepper","description":"A sweet and tangy pepper from Austria, often used in salads and fresh dishes.","price":7.99,"scovilleScale":0,"image":"./images/peppers/paradeisfruchtiger.jpg"},{"id":16,"name":"Pimenta Da Neyde Pepper","description":"A striking, dark purple pepper with a smoky, fruity flavor and high heat.","price":12.99,"scovilleScale":400000,"image":"./images/peppers/pimenta_da_neyde.jpg"},{"id":17,"name":"Purple Beauty Bell Pepper","description":"A stunning, deep purple bell pepper with a sweet, mild flavor and no heat.","price":5.49,"scovilleScale":0,"image":"./images/peppers/purple_beauty_bell.jpg"},{"id":18,"name":"Purple Reaper Pepper","description":"A purple variant of the Carolina Reaper, known for its intense heat and unique color.","price":15.99,"scovilleScale":2000000,"image":"./images/peppers/purple_reaper.jpg"},{"id":19,"name":"Snow White SLP Pepper","description":"A creamy, white pepper with a mild heat and a sweet, fruity flavor.","price":7.49,"scovilleScale":10000,"image":"./images/peppers/snow_white_slp.jpg"},{"id":20,"name":"Sugar Rush Stripey Pepper","description":"A sweet and fruity pepper with unique yellow and red striping and moderate heat.","price":9.99,"scovilleScale":50000,"image":"./images/peppers/sugar_rush_stripey.jpg"},{"id":21,"name":"Trinidad Moruga Scorpion Pepper","description":"One of the hottest peppers in the world, with a fruity flavor and intense heat.","price":15.49,"scovilleScale":2000000,"image":"./images/peppers/trinidad_moruga_scorpion.jpg"}]'),ue={name:"HomePage",components:{ProductCard:pe},data(){return{featuredProducts:de.slice(0,4),newArrivals:de.slice(4,8)}},methods:{forwardToast(e,t){this.$emit("show-toast",e,t)}}};const ge=(0,g.A)(ue,[["render",W]]);var me=ge;const he={class:"p-6 bg-gray-50 min-h-screen"},fe={class:"container mx-auto"},ve={class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10"};function ye(e,t,r,a,o,s){const n=(0,i.g2)("FiltersBar"),l=(0,i.g2)("ProductCard");return(0,i.uX)(),(0,i.CE)("div",he,[(0,i.Lk)("div",fe,[t[0]||(t[0]=(0,i.Lk)("h1",{class:"text-4xl font-bold text-gray-800 mb-6"},"Explore Our Hot Peppers",-1)),(0,i.bF)(n,{products:o.products,onFilteredProducts:s.updateFilteredProducts},null,8,["products","onFilteredProducts"]),(0,i.Lk)("div",ve,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(o.filteredProducts,(e=>((0,i.uX)(),(0,i.Wv)(l,{key:e.id,product:e,onShowToast:s.forwardToast},null,8,["product","onShowToast"])))),128))])])])}const be={class:"p-4 bg-white shadow-md rounded-md mb-6 flex gap-6 justify-between items-center"},xe={class:"relative inline-block text-left"},we={key:0,class:"absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"},ke={class:"py-1"},Pe={class:"relative inline-block text-left"},Le={key:0,class:"absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"},Se={class:"py-1"};function Ce(e,t,r,a,o,s){return(0,i.uX)(),(0,i.CE)("div",be,[(0,i.Lk)("div",xe,[(0,i.Lk)("div",null,[(0,i.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>s.togglePriceDropdown&&s.togglePriceDropdown(...e)),type:"button",class:"inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"},t[6]||(t[6]=[(0,i.eW)(" Sort by Price "),(0,i.Lk)("svg",{class:"-mr-1 h-5 w-5 text-gray-400",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[(0,i.Lk)("path",{"fill-rule":"evenodd",d:"M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z","clip-rule":"evenodd"})],-1)]))]),o.priceDropdownOpen?((0,i.uX)(),(0,i.CE)("div",we,[(0,i.Lk)("div",ke,[(0,i.Lk)("button",{onClick:t[1]||(t[1]=e=>s.sortPrice("asc")),class:"block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"},"Price: Low to High"),(0,i.Lk)("button",{onClick:t[2]||(t[2]=e=>s.sortPrice("desc")),class:"block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"},"Price: High to Low")])])):(0,i.Q3)("",!0)]),(0,i.Lk)("div",Pe,[(0,i.Lk)("div",null,[(0,i.Lk)("button",{onClick:t[3]||(t[3]=(...e)=>s.toggleScovilleDropdown&&s.toggleScovilleDropdown(...e)),type:"button",class:"inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"},t[7]||(t[7]=[(0,i.eW)(" Sort by Scoville Rating "),(0,i.Lk)("svg",{class:"-mr-1 h-5 w-5 text-gray-400",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[(0,i.Lk)("path",{"fill-rule":"evenodd",d:"M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z","clip-rule":"evenodd"})],-1)]))]),o.scovilleDropdownOpen?((0,i.uX)(),(0,i.CE)("div",Le,[(0,i.Lk)("div",Se,[(0,i.Lk)("button",{onClick:t[4]||(t[4]=e=>s.sortScoville("asc")),class:"block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"},"Scoville: Low to High"),(0,i.Lk)("button",{onClick:t[5]||(t[5]=e=>s.sortScoville("desc")),class:"block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"},"Scoville: High to Low")])])):(0,i.Q3)("",!0)])])}var _e={props:{products:{type:Array,required:!0}},data(){return{priceDropdownOpen:!1,scovilleDropdownOpen:!1,filteredProducts:this.products}},methods:{togglePriceDropdown(){this.priceDropdownOpen=!this.priceDropdownOpen,this.priceDropdownOpen&&(this.scovilleDropdownOpen=!1)},toggleScovilleDropdown(){this.scovilleDropdownOpen=!this.scovilleDropdownOpen,this.scovilleDropdownOpen&&(this.priceDropdownOpen=!1)},sortPrice(e){this.filteredProducts.sort(((t,r)=>"asc"===e?t.price-r.price:r.price-t.price)),this.$emit("updateFilteredProducts",this.filteredProducts),this.priceDropdownOpen=!1},sortScoville(e){this.filteredProducts.sort(((t,r)=>"asc"===e?t.scovilleScale-r.scovilleScale:r.scovilleScale-t.scovilleScale)),this.$emit("updateFilteredProducts",this.filteredProducts),this.scovilleDropdownOpen=!1}}};const je=(0,g.A)(_e,[["render",Ce]]);var Ae=je,Oe={name:"ProductList",components:{ProductCard:pe,FiltersBar:Ae},data(){return{products:de,filteredProducts:de}},methods:{updateFilteredProducts(e){console.log("updateFilteredProducts - received filteredProducts:",JSON.stringify(e)),this.filteredProducts=e},forwardToast(e,t){this.$emit("show-toast",e,t)}}};const qe=(0,g.A)(Oe,[["render",ye]]);var Te=qe;const Fe={class:"cart-page p-6 bg-gray-50 min-h-screen"},De={class:"container mx-auto"},He={key:0},Ee=["src"],Qe={class:"flex-1 px-4"},Ie={class:"text-xl font-semibold text-gray-800"},Ue={class:"text-sm text-gray-600"},Xe={class:"text-sm text-gray-600"},Ne=["onClick"],Ve={class:"mt-6 text-right"},We={class:"text-2xl font-bold text-gray-800"},$e={key:1,class:"text-lg text-gray-600 mt-10 flex items-center justify-center"};function Be(e,t,r,a,o,s){const n=(0,i.g2)("QuantitySelector");return(0,i.uX)(),(0,i.CE)("div",Fe,[(0,i.Lk)("div",De,[t[3]||(t[3]=(0,i.Lk)("h1",{class:"text-4xl font-bold text-gray-800 mb-6"},"Your Cart",-1)),s.cartItems.length>0?((0,i.uX)(),(0,i.CE)("div",He,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(s.cartItems,(e=>((0,i.uX)(),(0,i.CE)("div",{key:e.id,class:"flex items-center justify-between border-b py-6"},[(0,i.Lk)("img",{src:e.image,alt:"Product Image",class:"w-20 h-20 object-cover rounded-lg shadow-md"},null,8,Ee),(0,i.Lk)("div",Qe,[(0,i.Lk)("h2",Ie,(0,l.v_)(e.name),1),(0,i.Lk)("p",Ue,"Price: $"+(0,l.v_)(e.price.toFixed(2))+" each",1),(0,i.Lk)("p",Xe,"Subtotal: $"+(0,l.v_)((e.price*e.quantity).toFixed(2)),1)]),(0,i.bF)(n,{modelValue:e.quantity,"onUpdate:modelValue":[t=>e.quantity=t,t=>s.updateQuantity(e.id,t)]},null,8,["modelValue","onUpdate:modelValue"]),(0,i.Lk)("button",{onClick:t=>s.removeFromCart(e.id),class:"flex items-center justify-center bg-red-500 text-white p-3 rounded-lg hover:bg-red-600 transition"},t[0]||(t[0]=[(0,i.Lk)("i",{class:"fas fa-trash-alt"},null,-1)]),8,Ne)])))),128)),(0,i.Lk)("div",Ve,[(0,i.Lk)("h3",We,"Total: $"+(0,l.v_)(s.cartTotal.toFixed(2)),1),t[1]||(t[1]=(0,i.Lk)("button",{class:"mt-4 w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition flex items-center justify-center"},[(0,i.Lk)("i",{class:"fas fa-credit-card mr-2"}),(0,i.eW)(" Proceed to Checkout ")],-1))])])):((0,i.uX)(),(0,i.CE)("p",$e,t[2]||(t[2]=[(0,i.Lk)("i",{class:"fas fa-shopping-cart text-4xl text-gray-300 mr-4"},null,-1),(0,i.eW)(" Your cart is empty ")])))])])}var Me={name:"ShoppingCart",components:{QuantitySelector:ne},computed:{cartItems(){return this.$store.getters.cartItems},cartTotal(){return this.$store.getters.cartTotal}},methods:{removeFromCart(e){this.$store.dispatch("removeProduct",e)},updateQuantity(e,t){this.$store.dispatch("updateProductQuantity",{productId:e,quantity:t})}}};const Re=(0,g.A)(Me,[["render",Be]]);var Je=Re;const Ge=[{path:"/",component:me},{path:"/products",component:Te},{path:"/cart",component:Je}],Ke=(0,F.aE)({history:(0,F.Bt)(),routes:Ge});var Ye=Ke;r(4114);const ze={cartItems:[]},Ze={cartItems:e=>e.cartItems,cartTotal:e=>e.cartItems.reduce(((e,t)=>e+t.price*t.quantity),0),cartCount:e=>e.cartItems.reduce(((e,t)=>e+t.quantity),0)},et={ADD_PRODUCT(e,t){const r=e.cartItems.find((e=>e.id===t.id));r?r.quantity+=t.quantity:e.cartItems.push(t)},REMOVE_PRODUCT(e,t){e.cartItems=e.cartItems.filter((e=>e.id!==t))},UPDATE_PRODUCT_QUANTITY(e,{productId:t,quantity:r}){const a=e.cartItems.find((e=>e.id===t));a&&(a.quantity=r)}},tt={addProduct({commit:e},t){e("ADD_PRODUCT",t)},removeProduct({commit:e},t){e("REMOVE_PRODUCT",t)},updateProductQuantity({commit:e},{productId:t,quantity:r}){e("UPDATE_PRODUCT_QUANTITY",{productId:t,quantity:r})}};var rt={state:ze,getters:Ze,actions:tt,mutations:et},at=(0,w.y$)({modules:{cart:rt}});(0,a.Ef)(T).use(Ye).use(at).mount("#app")}},t={};function r(a){var i=t[a];if(void 0!==i)return i.exports;var o=t[a]={exports:{}};return e[a].call(o.exports,o,o.exports,r),o.exports}r.m=e,function(){var e=[];r.O=function(t,a,i,o){if(!a){var s=1/0;for(p=0;p<e.length;p++){a=e[p][0],i=e[p][1],o=e[p][2];for(var n=!0,l=0;l<a.length;l++)(!1&o||s>=o)&&Object.keys(r.O).every((function(e){return r.O[e](a[l])}))?a.splice(l--,1):(n=!1,o<s&&(s=o));if(n){e.splice(p--,1);var c=i();void 0!==c&&(t=c)}}return t}o=o||0;for(var p=e.length;p>0&&e[p-1][2]>o;p--)e[p]=e[p-1];e[p]=[a,i,o]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};r.O.j=function(t){return 0===e[t]};var t=function(t,a){var i,o,s=a[0],n=a[1],l=a[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(i in n)r.o(n,i)&&(r.m[i]=n[i]);if(l)var p=l(r)}for(t&&t(a);c<s.length;c++)o=s[c],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(p)},a=self["webpackChunkhot_peppers_store"]=self["webpackChunkhot_peppers_store"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=r.O(void 0,[504],(function(){return r(1993)}));a=r.O(a)})();
//# sourceMappingURL=app.e24a267f.js.map