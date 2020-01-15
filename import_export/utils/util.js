export const findArray = (dic, value) => {
    for (let i = 0; i < dic.length; i++){
        if(dic[i].value == value){
            return i
        }
    }
    return -1
}