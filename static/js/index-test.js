console.log('hello world')


let budgetGlobal = document.getElementById('budget')

let budget = document.querySelector('.income span')

let montant = document.querySelector('#montant')

let depense = document.querySelector('.expense> span')

let addBtn = document.querySelector('.add-btn')

let balance = document.querySelector('.balance span')

let items = document.getElementById('depense')

let list = document.querySelector('.expenses-list')

let informationArray=[]



// initial values 

let depenseInt = 0

let balanceInit = 0

budgetGlobal.value = 0

montant.value = 0

items.value = ''


trashValue=0




budgetGlobal.addEventListener('keyup', autoComplete)

function autoComplete() {

    budget.innerHTML = budgetGlobal.value

}




addBtn.addEventListener('click', calcs)

function calcs() {

    calcDepense()
    calcBalance()
    creatDivs()
    
    informationArray.push({'globalBudget' : budgetGlobal.value,
                           'depense' : items.value,
                           'montant' : montant.value} )


                           


                           console.log(informationArray)
                           


                          
console.log(balanceInit)
                           

}



function calcDepense() {

    depenseInt += +montant.value

    depense.textContent = depenseInt
}


function calcBalance() {


    balanceInit = budgetGlobal.value - depenseInt
   
    console.log('balanceInit'+ balanceInit)

    balance.textContent = balanceInit

    if (balance.textContent < 0) {

        balance.style.color = 'red'

    }
    else{

        balance.style.color = 'black'
    }

}


let trashArray=[]
function creatDivs() {

    let depenseType = items.value


    

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

    p.textContent = depenseType + ' ' + montant.value

    list.append(div)
    

    trashArray.push(div)








        img.addEventListener('click', delTrash)



        function delTrash() {



            div.remove()
        
           console.log(depenseInt)

            let test =trashArray.indexOf(div)
            console.log(test)

            trashValue= +balanceInit+Number(informationArray[test].montant)

           console.log('balance init'+balanceInit)
            console.log(' trash value' +trashValue)
        
            balanceInit=trashValue

            balance.textContent=balanceInit

            depenseInt-=+informationArray[test].montant

            depense.textContent=depenseInt


    return

        }
    
        

}




reset = document.querySelector('.reset-btn')







// needs some work !!



/* 

    reset.addEventListener('click', resetAll)


    function resetAll() {
    
    delTrash()

    informationArray=[]
    trashArray=[]

    console.log('works§')

    budgetGlobal.value = 0

    budget.textContent = budgetGlobal.value

    document.getElementById('depense').value = ' '

    depenseInt = 0

    depense.textContent = 0

    document.querySelector('.balance span').textContent = 0

    balanceInit



    document.querySelector('#montant').value = 0

    


    
}*/

