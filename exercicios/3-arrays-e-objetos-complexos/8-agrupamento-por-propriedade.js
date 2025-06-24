const vendas = [
    {cliente: 'Ana', total: 250},
    {cliente: 'Bruno', total: 400},
    {cliente: 'Ana', total: 150},
    {cliente: 'Carlos', total: 300},
    {cliente: 'Bruno', total: 100},
]

function somarVendaPorCliente(vendas) {
    return vendas.reduce((acc, venda) => {
        const {cliente, total} = venda

        if (acc[cliente]) {
            acc[cliente] += total
        } else {
            acc[cliente] = total
        }

        return acc
    }, {})
}

const resultado = somarVendaPorCliente(vendas)

console.log('Vendas: ', vendas)
console.log('Resultado: ', resultado)
