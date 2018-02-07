const ADD_COMMENT = 'ADD_COMMENT';

{
  type: ADD_COMMENT,
  text: 'My first comment!'
}

function addComment(text) {
  return {
      type: ADD_COMMENT,
      text,
      id: uuid.v4()
  };
};

const REMOVE_COMMENT = 'REMOVE_COMMENT';

{
  type: REMOVE_COMMENT,
  id: 10
}

function removeComment(id) {
  return {
    type: REMOVE_COMMENT,
    id: id
  };
};

const EDIT_COMMENT = 'EDIT_COMMENT';

{
  type: EDIT_COMMENT,
  id: 23,
  text: 'nowy text komentarza'
}

function editComment(id, text) {
  return {
    type: EDIT_COMMENT,
    id: id,
    text: text
  };
};

const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';

{
  type: THUMB_UP_COMMENT,
  id: 12,
  state: 16
}

function thumbUpComment(id, previusState) {
  return {
    type: THUMB_UP_COMMENT,
    id: id,
    state: previusState +1
  }
}

const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

{
  type: THUMB_DOWN_COMMENT,
  id: 20,
  state: 43
}

function thumDownComment(id, previusState) {
  return {
    type: THUMB_DOWN_COMMENT,
    id: id,
    state: previusState -1
  }
}