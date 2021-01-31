

const router = new VueRouter({
    routes: [
        { path: '/', component: HomePage},
    ],
});
const app = new Vue({

    // vuetify: new Vuetify({
    //     theme: {
    //         dark:true,
    //         themes: {
    //             // modify themes (light or dark) on the fly
    //             dark: {
    //                 primary: '#49476c',
    //                 secondary: '#4B3F72',
    //                 accent: '#1F2041',
    //                 warning: '#FFC857',
    //                 accentD: '#101021',
    //                 success:'#926e01',
    //             }
    //         }
    //     }

    // }),
    
    el: '#app',
    router:router,
    data: {
       page:1,
    },
    methods:{
        getEvents() {
            $.getJSON({
              url: "https://localhost:5001/api/event/pagesize/10/page/" + this.page,
              success: function (response, textStatus, jqXhr) {
                console.log(response);
              },
              error: function (jqXHR, textStatus, errorThrown) {
                // log the error to the console
                console.log("The following error occured: " + textStatus, errorThrown);
              }
            });
        },
    },
    mounted: function(){

    },
});