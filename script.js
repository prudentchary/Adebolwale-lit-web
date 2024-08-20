document.querySelector('.openNavBar').addEventListener('click', function() {
    document.querySelector('.openNavBar').classList.add('hidden');
    document.querySelector('.closeNavBar').classList.remove('hidden');
    document.querySelector('.link-container').classList.remove('hidden')
    document.querySelector('.over-lay').classList.remove('hidden')
})

document.querySelector('.closeNavBar').addEventListener('click', function() {
    document.querySelector('.openNavBar').classList.remove('hidden');
    document.querySelector('.closeNavBar').classList.add('hidden');
    document.querySelector('.link-container').classList.add('hidden')
    document.querySelector('.over-lay').classList.add('hidden')

})
document.querySelector('.over-lay').addEventListener('click', function(){
    document.querySelector('.openNavBar').classList.remove('hidden');
    document.querySelector('.closeNavBar').classList.add('hidden');
    document.querySelector('.link-container').classList.add('hidden')
    document.querySelector('.over-lay').classList.add('hidden')
})
