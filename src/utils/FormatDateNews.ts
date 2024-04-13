const FormatDate = (date: string) => {
    const shortDate = date.slice(0, 10)
    const dayNamePtBr = new Date(shortDate).toLocaleDateString('pt-BR', { weekday: 'long' }).split(',')[0];
    const monthNamePtBr = new Date(shortDate).toLocaleDateString('pt-BR', { month: 'long' });
    const monthNumber = new Date(shortDate).toLocaleDateString().split('/')[1];
    const yearNumber = new Date(shortDate).toLocaleDateString().split('/')[2];
    const fullDateStr = `${dayNamePtBr}, ${monthNumber} de ${monthNamePtBr} ${yearNumber}`
    return fullDateStr
}

export default FormatDate