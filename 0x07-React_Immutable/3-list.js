import { List } from "immutable";

export function getListObject(array) {
    var llist = List(array)
}

export function addElementToList(list, element) {
    var liist = List(list);
    liist.push(element)
}