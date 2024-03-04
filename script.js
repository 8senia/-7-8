let darkThemeButton = document.querySelector('.theme-button-dark');
let lightThemeButton = document.querySelector('.theme-button-light');
let sansSerifFontButton = document.querySelector('.font-button-sans-serif');
let serifFontButton = document.querySelector('.font-button-serif');

darkThemeButton.onclick = function(){
   document.body.classList.add('dark');
   darkThemeButton.classList.add('active');
   lightThemeButton.classList.remove('active')
}

lightThemeButton.onclick = function(){
    document.body.classList.remove('dark');
    lightThemeButton.classList.add('active');
    darkThemeButton.classList.remove('active')
}

serifFontButton.addEventListener('click', function(){
    document.body.classList.add('serif');
    serifFontButton.classList.add('active');
    sansSerifFontButton.classList.remove('active')
})

sansSerifFontButton.addEventListener('click', function(){
    document.body.classList.remove('serif');
    sansSerifFontButton.classList.add('active');
    serifFontButton.classList.remove('active')
})