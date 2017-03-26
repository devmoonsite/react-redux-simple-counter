import { UPDATE_COUNTER } from './const';

export function updateCounter(paramter) {
  return {
    type: UPDATE_COUNTER,
    paramter: paramter == '+' ? 1 : -1
  };
}