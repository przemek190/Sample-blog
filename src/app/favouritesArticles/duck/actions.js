import types from './types'

// in the future remove action to add
const add = item => ({
    type: types.ADD_FAVOURITE, item
})

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    add,
}