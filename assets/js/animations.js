import anime from '../../node_modules/animejs/lib/anime.es.js';

export default function AnimationModule() {

    // Autoplay animations in hero section //
    
    const onLoadAnimation = anime.timeline({
        easing: 'easeInOutExpo',
        duration: 2000,
        autoplay: true
      })
      
      onLoadAnimation
        .add({
          targets: 'header',
          translateY: [500, 0],
          opacity: ['0%', '100%'],
          duration: 1000
        })
        .add({
          targets: '#open-video',
          translateX: [-2000, 0],
          opacity: ['0%', '100%'],
          duration: 3000,
        }, '-=1800')
        .add({
          targets: '.cta-title',
          translateX: [-1000, 0],
          opacity: ['0%', '100%'],
        }, '-=2500')
        .add({
          targets: '.cta-desc',
          translateX: [-1000, 0],
          opacity: ['0%', '100%'],
        }, '-=2500')
        .add({
          targets: '.donate-container',
          scale: [0, 1],
          easing: 'spring(1, 80, 10, 0)',
          delay: 1000
        }, '-=1800')
        .add({
          targets: '.play-btn-container',
          opacity: ['0%', '100%'],
        }, '-=1900')

      // Bouncing Arrow Animation //

      anime({
        targets: '.down-arrow',
        duration: 2000,
        translateY: [-25, 0],
        autplay: true,
        loop: true
      })
      
      // Animations on scroll //
      
      const myElements = document.querySelectorAll('.animate');
      
      function createAnimation(entry) {
        return anime({
          targets: entry.target,
          opacity: ['0%', '100%'],
          translateY: [500, 0],
          duration: 1000,
          easing: 'easeInOutExpo',
          autoplay: false,
          delay: function (el, i, l) {
            return i * 200;
          },
          endDelay: function (el, i, l) {
            return (l - i) * 200;
          }
        })
      }
      
      let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) {
            return
          }
          else {
            const animation = createAnimation(entry)
            animation.play()
            observer.unobserve(entry.target)
          }
        });
      });
      
      myElements.forEach(element => {
        observer.observe(element);
      });
}