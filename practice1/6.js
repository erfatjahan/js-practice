const checkfriends = (array) => {
    let biggestname = "";
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element.length > biggestname.length) {
            biggestname = element;
        }
    }
    return biggestname;
}
var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
const bitfriends = checkfriends(friends);
console.log(bitfriends);
