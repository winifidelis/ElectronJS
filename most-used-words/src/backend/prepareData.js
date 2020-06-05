module.exports = rows => {
    return new Promise((resolver, reject) => {
        try {
            const words = rows
                .filter(filterValidRow)
                .map(removePunctuation)
                .map(removeTags)
                .reduce(mergeRows)
                .split(' ')
                .map(word => word.toLowerCase()) //  Convertendo todas as palavras em minúsculas, dessa forma padronizamos tudo.
                .map(word => word.replace('"', ''))

            resolver(words)
        } catch(e) {
            reject(e)
        }
    })
}

// A FUNÇÃO ABAIXO TEM O OBJETIVO DE VERIFICAR AS LINHAS DA LEGENDA 
// E EXCLUI-LAS NO MOMENTO DE MONTAR NOSSO ARQUIVO DE AGRUPAMENTO DAS PALAVRAS DA LEGENDA. 
function filterValidRow(row) {
    // VERIFICA SE A LINHA TEM NÚMERO
    const notNumber = !parseInt(row.trim())

    //VERIFICA SE A LINHA NÃO É VAZIA
    const notEmpty = !!row.trim()

    // VERIFICA SE A LINHA É UM INTERVALO DE TEMPO
    const notInterval = !row.includes('-->')
    
    // RETORNA APENAS AS LINHAS QUE NÃO ESTÃO EM NENHUMA DESSAS VALIDAÇÕES
    return notNumber && notEmpty && notInterval
}

// REMOVENDO AS PONTUAÇÕES E SUBSTITUINDO POR ESPAÇO
// G significa de maneira global, ou seja, em todos os arquivos de legenda.
const removePunctuation = row => row.replace(/[,?!.-]/g, '')

// REMOVENDO AS TAGS DE CONFIUGRAÇÃO DA LEGENDA
// I significa para ignorar/não diferenciar maiusculas e minusculas
// G significa de maneira global, ou seja, em todos os arquivos de legenda
const removeTags = row => row.replace(/(<[^>]+)>/ig, '').trim()

// MESCLANDO AS LINHAS
const mergeRows = (fullText, row) => `${fullText} ${row}`