export default {
    name: 'TheHeroThumb',

    props: {
        hero: Object 
    },

    template: 
    `
            <div class="port_box">
                <img :src='"images/" + hero.port_pic' alt="hero image">
                <div class="port_content">
                    <h3>{{hero.port_name}}</h3>
                    <p>{{hero.port_p}}</p>
                    <div class="nButton" @click="loadLightboxData">read more</div>
                </div>
            </div>
    `,
    methods: {
        loadLightboxData() {
            this.$emit('loadlb', this.hero);
        }
    }
  
}