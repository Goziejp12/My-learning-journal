const viewMore = document.getElementById('view-more')
const intro = document.getElementById('intro')

document.addEventListener('click', function(e) {
    if (e.target.id == 'anchor-btn') {
        viewMore.style.display = 'block'
        intro.style.display = 'none'
    }
})