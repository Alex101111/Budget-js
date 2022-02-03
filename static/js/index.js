console.log('hello world')


let budgetGlobal = document.getElementById('budget')

let budget = document.querySelector('.income span')

let montant = document.querySelector('#montant')

let depense = document.querySelector('.expense> span')

let addBtn = document.querySelector('.add-btn')




budgetGlobal.addEventListener('keyup', autoComplete)

function autoComplete() {

    budget.innerHTML = budgetGlobal.value

}

let depenseInt = 0

let balanceInit = 0


addBtn.addEventListener('click', calcs)

function calcs() {

    calcDepense()
    calcBalance()
    creatDivs()

}



function calcDepense() {

    depenseInt += +montant.value

    console.log(depenseInt)

    depense.textContent = depenseInt


}


function calcBalance() {
    let balance = document.querySelector('.balance span')

    balanceInit = budgetGlobal.value - depenseInt

    balance.textContent = balanceInit

    if (balance.textContent < 0) {

        balance.style.color = 'red'
    }


}

let trashArray = []

function creatDivs() {

    depenseType = document.getElementById('depense').value


    list = document.querySelector('.expenses-list')

    let div = document.createElement('div')

    let divDel = document.createElement('div')

    div.classList.add('depenses')

    let p = document.createElement('div')

    div.append(p)

    let img = document.createElement('img')

    img.src = '/static/img/delete.png'

    img.classList.add('delete')

    divDel.append(img)
    
    div.append(divDel)

    p.textContent = depenseType + ' ' + depense.textContent

    list.append(div)




    trashArray.push(div)


    for (i = 0; i < trashArray.length; i++) {


        img.addEventListener('click', delTrash)

        function delTrash() {

            div.remove()
        }
    }

}



