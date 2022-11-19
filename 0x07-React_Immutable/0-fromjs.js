import { fromJS } from 'immutable'


const getImmutableObject = function(obj) {
  const map = fromJS(obj);
  return map
}

export default getImmutableObject;
