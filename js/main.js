import HeroThumb from './components/TheHeroThumbnail.js';
import Lightbox from './components/TheLightboxComponent.js';

(() => {
    // create vue instance here
    const { createApp } = Vue

    createApp({
        created() {
            //fetch calls always go here --- retrieve any data you need
            fetch('./data.json') //go get data
            .then(res => res.json()) //convert the json objects to plain JS object
            .then(data => this.heroData = data) //store the data 
            .catch(error => console.error(error)); // report any errors 
        },

        data() {
            return {
                heroData: {},
                lightboxData: {},
                showLightBox: false
            } 
        },

        methods: {
            loadLightBox(item) {
                //debugger;
                this.lightboxData = item;
                this.showLightBox = true;
            }
        },

        components: {
            herothumbnail: HeroThumb, 
            lightbox: Lightbox
        }
    }).mount('#app')

    
})()