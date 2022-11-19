import { List } from "immutable";

export function getListObject(array) {
    let llist = List(array)
    return llist
}

export function addElementToList(list, element) {
    return list.push(element)
}