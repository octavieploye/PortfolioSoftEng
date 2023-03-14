

document.addEventListener('DOMContentLoaded', function() {
const expandsMore = document.querySelectorAll('[expand-more]');

function expand() {
    setTimeout(() => {
        const showContent = document.getElementById(this.dataset.target)
        if(showContent.classList.contains('expand-active')) {
            
            this.innerHTML=this.dataset.showtext
            
        } else {
            this.innerHTML=this.dataset.hidetext   
            
        }
        showContent.classList.toggle('expand-active')
        console.log("I showContent")
        
    }, 400)
    }

expandsMore.forEach(expandMore => {
    expandMore.addEventListener('click', expand)
    
})

})



// add a 2000ms dealy to the expand function