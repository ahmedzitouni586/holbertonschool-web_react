import { Map, List} from 'immutable';

export function concatElements(page1, page2) {
    const list1 = List(page1)
    const list2 = List(page2)
    const list3 = list1.concat(list2)
    return list3
}