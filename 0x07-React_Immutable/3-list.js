import { List } from "immutable";

export function getListObject(array) {
    let llist = List(array)
    return llist
}

export function addElementToList(list, element) {
    let liist = List(list);
    liist.push(element)
    return liist
}