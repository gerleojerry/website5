let navigations = document.querySelectorAll('.main-header a')

navigations.forEach((navigation) => {
  navigation.addEventListener('click', ()=> {
    navigations.forEach( (nav)=> {
      nav.style.border = 'none'
      navigation.style.border  = '2px solid #cf5c3f'
    } )
  })
})