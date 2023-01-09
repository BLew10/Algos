var titleToNumber = function (columnTitle) {
    let arrAlpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    let alphabet = {}
    for (let j = 0; j < arrAlpha.length; j++) {
        alphabet[arrAlpha[j]] = j + 1
    }
    let columnNum = 0
    for (let i = columnTitle.length - 1; i >= 0; i--) {
            columnNum += 26**((columnTitle.length - i -1)) * alphabet[columnTitle[i]]
        }

    return columnNum
};

