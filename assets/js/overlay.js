// import anime from '../../node_modules/animejs/lib/anime.es.js';

export default function OverlayModule() {
    // Video Overlay Toggle //

    const overlay = document.getElementById('video-overlay')
    const vidLink = document.getElementById('open-video')
    const vidExit = document.getElementById('video-exit')
    const vidContainer = document.getElementById('video-container')

    let iframe

    function createEmbed() {
        const embed = document.createElement('iframe')
        embed.setAttribute('id','vid-embed')
        embed.setAttribute('width','100%')
        embed.setAttribute('height','auto')
        embed.setAttribute('src','https://www.youtube.com/embed/dB_lWkTAL8o?autoplay=1')
        embed.setAttribute('title','YouTube video player')
        embed.setAttribute('frameborder','0')
        embed.setAttribute('allow','accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture')
        embed.setAttribute('allowfullscreen','')
        return embed
    }

    function closeOverlay() {
        anime({
            targets: overlay,
            duration: 1500,
            translateY: [0, 1000],
            opacity: 0,
            easing: 'easeInOutExpo'
        })
        setTimeout(() => { 
            overlay.style.display = 'none'
            if (iframe) {
                vidContainer.removeChild(iframe)
                iframe = undefined
            }
    }, 1500)
    }

    vidLink.addEventListener('click', () => {
        overlay.style.display = 'block'
        iframe = createEmbed()
        vidContainer.appendChild(iframe)
        anime({
            targets: overlay,
            duration: 1500,
            translateY: [1000, 0],
            opacity: ['0%', '100%'],
            easing: 'easeInOutExpo'
        })
    })
    vidExit.addEventListener('click', closeOverlay)
    overlay.addEventListener('click', closeOverlay)
}