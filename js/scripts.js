const toggleTheme = document.getElementById('toggle-theme');
const toggleIcon = document.getElementById('toggle-icon');
const toggleText = document.getElementById('toggle-text');
const toggleColors = document.getElementById('toggle-colors');
const rootStyles = document.documentElement.style;
const flagsElement = document.getElementById('flags');
const textsToChange = document.querySelectorAll("[data-section]");


flagsElement.addEventListener("click", (e) =>{
    console.log(e.target.parentElement.dataset.languaje);
    changeLanguaje(e.target.parentElement.dataset.languaje);
})

const changeLanguaje = async languaje =>{
    const requestJson = await fetch(`./languages/${languaje}.json`)
    const texts = await requestJson.json()
    console.log(texts)
    for(const textToChange of textsToChange){
        const section = textToChange.dataset.section
        const value = textToChange.dataset.value;
        console.log(section,value);
        textToChange.innerHTML = texts[section][value];
        
    }
}

toggleTheme.addEventListener('click', () =>{
    document.body.classList.toggle('dark');
    if(toggleIcon.src.includes('moon.svg')){
        toggleIcon.src='assets/icons/sun.svg';
        toggleText.textContent='Light Mode';
    }
    else{
        toggleIcon.src='assets/icons/moon.svg';
        toggleText.textContent='Dark Mode';
    }

})

toggleColors.addEventListener('click', (e)=>{
    rootStyles.setProperty('--primary-color', e.target.dataset.color)
})