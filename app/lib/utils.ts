
export const formateDate = (dateStr: string) => {
    const today = new Date(dateStr)
    const todayStr = today.toDateString().split(' ')
    const [weekDay, month, dayRaw, year] = [...todayStr]
    // const dayNum = Number(dayRaw)
    const day = Number(dayRaw).toString()
    const str = `${today.getMonth() + 1}/${day}/${year}`

    return { weekDay, month, day, year, str }
    // const month = todayStr[1]
    // const day = todayStr[2]

}

// var date = new Date(), y = date.getFullYear(), m = date.getMonth();
// var firstDay = new Date(y, m, 1).getDate();
// var lastDay = new Date(y, m + 1, 0).getDate();
// console.log(firstDay, lastDay)