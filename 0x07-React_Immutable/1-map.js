import getImmutableObject from "./0-fromjs";
import { Map } from 'immutable'

getImmutableObject = (obj) => {
    return Map(obj)
}

export default getImmutableObject;