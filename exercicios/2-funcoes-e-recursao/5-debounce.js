function debounce(fn, delay) {
    let timeoutId

    return function (...args) {
        if (timeoutId) clearTimeout(timeoutId)

        timeoutId = setTimeout(() => {
            fn(...args)
        }, delay)
    }
}
function autoSave(data) {
    console.log('Salvando dados automaticamente no formulário: ', data)
}

const debouncedAutoSave = debounce(autoSave, 1500)

debouncedAutoSave({nome: 'Vinicius'})
setTimeout(() => debouncedAutoSave({nome: 'Vinicius T'}), 500)
setTimeout(() => debouncedAutoSave({nome: 'Vinicius Tenchini'}), 1000)
