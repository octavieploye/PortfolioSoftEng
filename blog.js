

document.addEventListener('DOMContentLoaded', function() {
const expandsMore = document.querySelectorAll('[expand-more]');

function expand() {
    const showContent = document.getElementById(this.dataset.target)
    if(showContent.classList.contains('expand-active')) {
        this.innerHTML=this.dataset.showtext
        console.log("I contain expand-active")
    } else {
        this.innerHTML=this.dataset.hidetext
        console.log("I hide my text")

    }
    showContent.classList.toggle('expand-active')
    console.log("I showContent")
}
expandsMore.forEach(expandMore => {
    expandMore.addEventListener('click', expand)
    console.log(expandMore)
    console.log('I expandMore but cant see it')

})

})