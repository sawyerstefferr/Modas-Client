const HomePage = Vue.component('HomePage',{
    props:{
        authUser:{
            required:false,
        },
    },
    methods:{
        clearResults(){
            this.items=[];
        },

    },
    template:`
        <v-card-text id="homePage">
            Hi
        </v-card-text>
    `,
});