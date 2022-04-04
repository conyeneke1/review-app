let selected;
const firstPage = document.querySelector('.container');
const secondPage = document.querySelector('.rated');
const submitBtn = document.querySelector('.button');
const nums = document.querySelectorAll('.rate');
const error = document.querySelector('.error')

for(let i = 0; i < nums.length; i++) {
    nums[i].addEventListener("click", (e) => {
        selected = e.target.textContent;
        removeAllSelected()
        nums[i].classList.add('selected')
        console.log(selected)
    })
}

submitBtn.addEventListener('click', () => {
    if (selected === undefined || selected === null) {
        error.classList.add('.error');
        error.innerHTML = "Please selecet a rating";
        error.style.display = 'block'

        setTimeout(() => error.style.display = 'none',3000);
        return
    }
    let rateText = document.querySelector('.rating-choice');
    rateText.innerHTML = `You selected ${selected} out of 5`
    firstPage.style.display = 'none';
    secondPage.style.display = 'block';
})
 
function removeAllSelected () {
    for(let i = 0; i < nums.length; i++) {
        nums[i].classList.remove('selected')
    }
}
