
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

export const generatePagination = (currentPage: number, totalPages: number) => {
    // If the total number of pages is 7 or less,
    // display all pages without any ellipsis.
    if (totalPages <= 7) {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    // If the current page is among the first 3 pages,
    // show the first 3, an ellipsis, and the last 2 pages.
    if (currentPage <= 3) {
        return [1, 2, 3, '...', totalPages - 1, totalPages];
    }

    // If the current page is among the last 3 pages,
    // show the first 2, an ellipsis, and the last 3 pages.
    if (currentPage >= totalPages - 2) {
        return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
    }

    // If the current page is somewhere in the middle,
    // show the first page, an ellipsis, the current page and its neighbors,
    // another ellipsis, and the last page.
    return [
        1,
        '...',
        currentPage - 1,
        currentPage,
        currentPage + 1,
        '...',
        totalPages,
    ];
};