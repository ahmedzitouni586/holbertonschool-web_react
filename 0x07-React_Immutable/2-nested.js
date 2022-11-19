import { Map } from 'immutable'

export default function accessImmutableObject(object, array) {
    var obj = Map(object);
    var name = array[0];
    var first = array[1]
    return obj.get(name.first)
}
