let produtos = [
    {
        nome: 'Notebook Dell Inspiron 15',
        preco: 3499.9,
    },
    {
        nome: 'Mouse Logitech MX Master 3',
        preco: 599.9,
    },
    {
        nome: 'Teclado Mecânico Redragon Kumara',
        preco: 399.9,
    },
    {
        nome: "Monitor LG UltraWide 29''",
        preco: 1899.0,
    },
    {
        nome: 'SSD Kingston 1TB NVMe',
        preco: 499.9,
    },
    {
        nome: 'Webcam Logitech C920',
        preco: 699.0,
    },
    {
        nome: 'Headset HyperX Cloud II',
        preco: 799.9,
    },
    {
        nome: 'Impressora Multifuncional Epson EcoTank',
        preco: 1499.0,
    },
    {
        nome: 'Roteador TP-Link Archer C6',
        preco: 399.0,
    },
    {
        nome: 'Tablet Samsung Galaxy Tab S7',
        preco: 3299.0,
    },
]

function ordenarPorPreco(produtos) {
    let copia = [...produtos]

    copia.sort((a, b) => a.preco - b.preco)

    let nomes = copia.map((produto) => produto.nome)

    return nomes
}

console.log(ordenarPorPreco(produtos))

console.log(produtos)
