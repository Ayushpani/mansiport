/*=============== FILTERS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab=>{
    tab.addEventListener('click' , () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tc=>{
            tc.classlist.remove('filters__active')

            tabs.forEach(t =>{
                t.classList.remove('filter-tab-active')
            })
            tab.classList.add('filter-tab-active')
        })

    })
})


/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

//Previously selected topic(if the user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//obtaining the current theme
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

//We validate if the user previously close the topic
if(selectedTheme) {
    //If the validation is fulfilled, we ask what was the issue to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'] (darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'] (iconTheme)
}

//Activate or deactivate the theme manually with the buttom
themeButton.addEventListener('click' , () => {
    // Add or remove the dark/icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    //we save the theme and the current item that user chose
    localStorage.setItem('selectedTheme' , getCurrentTheme())
    localStorage.setItem('selectedIcon' , getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin : 'top',
    distance : '60px',
    duration : 2500,
    delay : 400 ,
})

sr.reveal('.profile__border')
sr.reveal('.profile__name' , {delay : 500})
sr.reveal('.profile__profession' , {delay : 600})
sr.reveal('.profile__social' , {delay : 700})
sr.reveal('.profile__info-group' , {interval: 100 ,delay : 800})
sr.reveal('.profile__buttons' , {delay : 800})
sr.reveal('.filters__content' , {delay : 900})
sr.reveal('.filters' , {delay : 1000})