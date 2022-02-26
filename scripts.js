const Modal = {
    open (){
        // abrir modal
        // adicionar a classe active ao modal
        document
        .querySelector('.modal-overlay')
        .classList
        .add('active')
    },
    close () {
        // fechar o modal
        // remover a classe active do modal
        document
        .querySelector('.modal-overlay')
        .classList
        .remove('active')
    }
}

const transactions = [
    {
        id: 1,
        description: 'Luz',
        amount: -50000,
        date: '23/01/2021',
    },
    {
        id: 2,
        description: 'Website',
        amount: 500000,
        date: '23/01/2021',
    },
    {
        id: 3,
        description: 'Internet',
        amount: -20000,
        date: '23/01/2021',
    },
]

// precisa somar as entradas
// somar as saídas
// remover das entradas o valor das saídas
// o processo acima resultará no total

const Transaction = {
    incomes () {
        // somar as entradas
    },
    expenses () {
        // somar as saídas
    },

    total () {
        // entradas - saídas
    }
}

// csubstituir os dados do html com dados do js

const DOM = {
    innerHTMLTransaction() {

        const html = `    
        <tr>
        <td class="description"> Luz</td>
        <td class="expense">- R$ 500,00</td>
        <td class="date">23/01/2021</td>
        <td>
            <img src="./assets/minus.svg" alt="Remover transação">
        </td>
    </tr>`

    }
}

