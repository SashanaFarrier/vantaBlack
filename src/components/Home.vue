<script setup>
    // import logo from '@/assets/logo.png'
    import webDevImg from '@/assets/website.png'
    import socialMediaImg from '@/assets/social-media.png'
    import computerRepairsImg from '@/assets/computer-repairs.png'
    import { onMounted } from "vue"
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";
    import Footer from './Footer.vue';

    gsap.registerPlugin(ScrollTrigger);

    onMounted(() => {
        let screenSize = gsap.matchMedia();
        const textContents = gsap.utils.toArray(".text-content text")
        const imgEls = gsap.utils.toArray(".img")
        const colors = ["red", "grey", "pink"]

        screenSize.add("(min-width: 900px)", () => {
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
              <div class="left-col-wrapper__body">
                    <h2>Website Design & Hosting</h2>
                    <div class="text-content">
                      <p>Custom-built solutions on WordPress, Wix, Squarespace, Shopify, or fully coded from scratch.</p>
                    </div>
                    <a class="cta-btn" href="">Launch Your Website</a>
              </div>
            </div>
            <div class="left-col-wrapper">
              <div class="left-col-wrapper__body">
                    <h2>Computer Repairs & Troubleshooting</h2>
                    <div class="text-content">
                      <p>Fast and efficient tech support to keep your devices running smoothly.</p>
                    </div>
                    <a class="cta-btn" href="">Fix My Device</a>
              </div>
            </div>
           <div class="left-col-wrapper">
            <div class="left-col-wrapper__body">
                    <h2>Social Media Content Creation</h2>
                    <div class="text-content">
                      <p>Professional, eye-catching posts designed with Canva to grow your online presence.</p>
                    </div>
                    <a class="cta-btn" href="">Boost My Social Media</a>
              </div>
           </div>
        </section>
        <section class="right-col">
            <div class="right-col-wrapper">
                <div class="images-container">
                    <div class="img">
                        <img :src="webDevImg" alt="">
                    </div>
                    <div class="img">
                        <img :src="computerRepairsImg" alt="">
                    </div>
                    <div class="img">
                        <img :src="socialMediaImg" alt="">
                    </div>
                </div>
            </div>
        </section>
      </div>
    </main>
    <Footer />
</template>

<style scoped>

  h2 {
    font-size: clamp(1rem, calc(1rem + 2vw), 3rem);
    text-transform: uppercase;
    line-height: 1.2;
    color: #fff;
  }
    .grid-container {
        display: grid;
        /* grid-template-columns: 1fr 2fr; */
    }

    .left-col-wrapper__body {
        /* display: flex;
        justify-content: center;
        align-items: center; */
        /* font-size: 2rem; */
        color: 000;
        background-color: #007EA7;
        /* height: 100%; */

        .text-content {
          font-size: 1.5rem;
          margin-block: 2rem;
        }
    }



@media screen and (min-width: 900px) {
    .grid-container {
        grid-template-columns: 1fr 2fr;
    }

    .left-col-wrapper {
        height: 100vh;
    }

    .left-col-wrapper__body {
      display: grid;
      place-content: center;
      text-align: center;
      padding: 1.5rem;
        /* display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2rem; */
        height: 100%;
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

    .images-container img {
      height: 100%;
      object-fit: cover;
    }

    /* .img-content img {
        display: block;
        width: 100%;
        object-fit: cover;
    } */

}

</style>
