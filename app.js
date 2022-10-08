Vue.createApp({
    data(){
        return {
           name:'Misha',
           age:37,
           age_5y:this.age+5,
           randomnumber:0,
           img:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/512px-Vue.js_Logo_2.svg.png?20170919082558',
           text:'zxcxzczxc'

        }
    },
    mounted(){
        this.randomnumber = Math.random()<0.5? 0:1;
    }

}).mount("#assignment");
