import { fromJS, getIn } from 'immutable'

export default function accessImmutableObject(object, array) {
    var cana = fromJS(object);
    return cana.getIn(array, undefined)
}
