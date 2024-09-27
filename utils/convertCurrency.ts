export const convertCurrency = (amout: string | number) => {
    return new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'RUB',

    }).format(+amout)
}