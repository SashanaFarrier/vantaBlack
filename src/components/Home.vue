<script setup>
    import logo from '@/assets/logo.png'
    import { onMounted } from "vue"
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";
    import Footer from './Footer.vue';
    gsap.registerPlugin(ScrollTrigger);
    
    onMounted(() => {
        const textContents = gsap.utils.toArray(".text-content text")
        const imgEls = gsap.utils.toArray(".img")
        const colors = ["red", "grey", "pink"]
       

        imgEls.forEach((el, index) => el.style.zIndex = imgEls.length - index)

        gsap.set(".img", {
            clipPath: () => "inset(0px 0px 0px 0px)"
        })

        const animation = gsap.to(".img:not(:last-child)", {
            clipPath: () => "inset(100% 0px 0px 0px)",
            stagger: 0.5,
            ease: "none"
        })

        ScrollTrigger.create({
            trigger: ".grid-container",
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            animation: animation
        })

    // imgEls.forEach((el, index) => {
    //     gsap.set(el, {
    //             backgroundColor: colors[index],
    //         })
    // })
        
    /*
    imgEls.forEach((el, index) => {
    ScrollTrigger.create({
        trigger: el,
        pin: true,         // Pin the element
        start: "top top",  // When the top of the element reaches the top of the viewport
        end: "bottom top", // When the bottom of the element reaches the top of the viewport
        scrub: true,          // Smooth animation
        markers: true,     // Optional, shows scroll markers for debugging
        //pinSpacing: false, // Prevent additional spacing when pinning
        
        onUpdate: (self) => {
            // Animating height or scale as the scroll position changes
            const progress = self.progress; // Progress of the scroll between 0 and 1

            gsap.to(el, {
                clipPath: `inset(${progress * 100}% 0% 0% 0%)`, // Clip top progressively
                ease: "none" // Linear animation
            });
            // Optional: You can also animate scale if you want a smoother effect
            // gsap.to(el, {
            //     scale: 1 - progress,
            //     ease: "none"
            // });

            if (progress === 1 && index < imgEls.length - 1) {
                const nextItem = imgEls[index + 1];
                gsap.to(nextItem, {
                clipPath: "inset(0 0 0% 0)", // Reveal the next item when the current one is fully revealed
                duration: 0.5
                });
            }

        },
        
    });

    */
});



   
        /*
        imgEls.forEach((el, index) => {
           // let height = window.getComputedStyle(el).height.slice(0, window.getComputedStyle(el).height.length - 2);
            

         
                // let height = window.getComputedStyle(el).height.slice(0, window.getComputedStyle(el).height.length - 2);
                // window.addEventListener("scroll", () => {
                //     scrollPos = window.scrollY / 2;
                //     //console.log(scrollPos)
                //     if(el.classList.contains("active"))
                //     {
                //         height -= scrollPos;
                        
                //         // el.style.top = height + "px"

                //     }
                   
                //     return scrollPos
                // });
            
        
            ScrollTrigger.create({
                trigger: el,
                pin: true,
                start: "top top",
                end: "bottom top",
                scrub: 4,
                markers: true,
                pinSpacing: false
            }),

            gsap.set(el, {
                backgroundColor: colors[index],
                
                // height: () => {
                //     window.addEventListener("scroll", () => {
                //     scrollPos = window.scrollY;
                //     //console.log(scrollPos); // Logs scroll position as you scroll
                //     return scrollPos
                // });
                
                //}
            });
            
           
        }) */

        // const tl = gsap.timeline({
        //     scrollTrigger: {
        //         trigger: "grid",
        //         pin: true,
        //         scrub: 4
        //     }
        // })


        // const tl = gsap.timeline({
        //     scrollTrigger: {
        //         trigger: ".img-content",
        //         pin: ".text-content",
        //         start: "top top",
        //         end: "bottom center",
        //         scrub: 4,
        //         markers: true
        //     }
        // })

       
        /*
        let tl = gsap.timeline({
    // yes, we can add it to an entire timeline!
        scrollTrigger: {
            trigger: '.right-col',
            pin: true, // pin the trigger element while active
            start: 'top top', // when the top of the trigger hits the top of the viewport
            end: '+=2000', // end after scrolling 500px beyond the start
            scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
            // snap: {
            //     snapTo: 'labels', // snap to the closest label in the timeline
            //     duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
            //     delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
            //     ease: 'power1.inOut' // the ease of the snap animation ("power3" by default)
            // }
        }
    }); */

    
</script>

<template>
    <main>
        <!-- <div class="spacer"></div> -->
      <div class="grid-container">
        <section class="left-col">
            <div class="left-col-wrapper">
                <div class="text-content">
                <div class="text">
                    <h2>Launch Your Website Today!</h2>
                    <a href="">Order Now</a>
                </div>
            </div>
            </div>
            <div class="left-col-wrapper">
                <div class="text-content">
                <div class="text">
                    <h2>Prism 2.0</h2>
                    <a href="">Order Now</a>
                </div>
            </div>
            </div>
           <div class="left-col-wrapper">
            <div class="text-content">
                <div class="text">
                    <h2>Darkplates 2.0</h2>
                    <a href="">Order Now</a>
                </div>
            </div>
           </div>
        </section>
        <section class="right-col">
            <div class="right-col-wrapper">
                <div class="images-container">
                    <div class="img">
                        <!-- <img :src="logo" alt=""> -->
                        <img src="https://picsum.photos/id/1/200/300" />
                    </div>
                    <div class="img">
                        <!-- <img :src="logo" alt=""> -->
                        <img src="https://picsum.photos/id/2/200/300" />
                    </div>
                    <div class="img">
                        <!-- <img :src="logo" alt=""> -->
                        <img src="https://picsum.photos/id/3/200/300" />
                    </div>
                </div>
            </div>
        </section>
      </div>  
    </main>
    <!-- <section class="grid-container">
        <div class="grid">
            <div class="left-col">
                <div class="text-content">
                    <div class="text">
                        <h2>Need a webiste?</h2>
                        <a href="">Order Now</a>
                    </div>
                </div>
                <div class="text-content">
                    <div class="text">
                        <h2>Need a webiste?</h2>
                        <a href="">Order Now</a>
                    </div>
                </div>
                <div class="text-content">
                    <div class="text">
                        <h2>Need a webiste?</h2>
                        <a href="">Order Now</a>
                    </div>
                </div>
            </div>
            <div class="right-col">
                <div class="img-content">
                    <img :src="logo" alt="">
                </div>
                <div class="img-content">
                    <img :src="logo" alt="">
                </div>
                <div class="img-content">
                    <img :src="logo" alt="">
                </div>
            </div>
        </div>
    </section> -->
    <Footer />
</template>

<style scoped>
   
    .grid-container {
        display: grid;
        grid-template-columns: 1fr 2fr;
    }

    .left-col-wrapper {
        height: 100vh;
    }

    .text-content {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        color: black;
        background-color: white;
        height: 100%;
    }

    .text-content .text {
        max-width: 20ch;
    }
    

    .right-col-wrapper {
        display: flex;
        flex-direction: column;
        position: sticky;
        top: 0;
        width: 100%;
        height: 100vh;
    }

    
.images-container .img {
    position: absolute;
    width: 100%;
    height: 100%;
}

.img-content img {
    display: block;
    width: 100%;
    object-fit: cover; /* Make sure images cover the entire area */
}

</style>