import { fromJS } from 'immutable'

function getImmutableObject(obj) {
    const map = fromJS(obj);
    return map
}