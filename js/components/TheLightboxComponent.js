export default {
    name: 'TheLightboxComponent',

    props:['hero'],

    template:
    `
    <section ref="lbWrapper" class="lightbox">
    <p ref ="closeBut" @click="closeLB" class="lightbox_close" width="20px">CLOSE</p>

        <article>
            <h3 class="lb_heading">{{hero.port_name}}</h3>
            <p class="lb_text1">
            {{hero.port_group}}
            </p>
            <p class="lb_text">
                {{hero.detail_p}}
            </p>
            <p class="lb_text2">{{hero.port_note}}</p>

           <img class="lb_img" :src='"images/" + hero.port_pic2' alt="hero image">
        </article>
    </section>
    
    `,
//<section class="lightbox"><img @click="closeLB" src="images/closeIcon.png" class="lightbox_close">

    methods: {
        closeLB() {
            //debugger;
            this.$emit('closelb');
        }
    }
   
    }
