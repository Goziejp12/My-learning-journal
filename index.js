const intro = document.getElementById('intro')
const viewMore = document.getElementById('view-more')
const anchorBtn = document.getElementById('anchor-btn')
const aboutMe = document.querySelector('.about-me')

document.addEventListener('click', function(e) {
    if (e.target.id == 'anchor-btn') {
        intro.style.display = 'none'
        viewMore.style.display = 'block'
        anchorBtn.style.display = 'none'
    }
    else if (e.target.id == 'about-me-btn') {
        intro.style.display = 'none'
        aboutMe.style.display = 'block'
        viewMore.style.display = 'none'
        anchorBtn.style.display = 'none'
    }
    else if (e.target.id == 'home-btn') {
        location.reload()
    }
})