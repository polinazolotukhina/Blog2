import * as types from '../constants/actionTypes';

// ADD

function PostPost(data, index) {
    return {
        type: types.NEW_POST,
        post: {title: data.title, subtitle: data.subtitle, notes: data.notes, index: index}
    };
}

export function makePost(data, index) {
  return (dispatch) => {
    dispatch(PostPost(data, index));
  };
}


// DELETE
function deleteMe(item) {
    return {
        type: types.DELETE_POST,
        post: item
    };
}

export function deletePost(item) {
  return (dispatch) => {
    dispatch(deleteMe(item));
  };
}



// SEARCH

function searchMe(input) {
    return {
        type: types.SEARCH_POST,
        input: input
    };
}

export function searchPost(input) {
  return (dispatch) => {
    dispatch(searchMe(input));
  };
}
