export const setDrawerContentCategory = (title) => (dispatch) => {
  dispatch({
    type: 'SET_DRAWER_CONTENT_CATEGORY',
    payload: title,
  });
};

export const setDrawerContentType = (title) => (dispatch) => {
  dispatch({
    type: 'SET_DRAWER_CONTENT_TYPE',
    payload: title,
  });
};

export const setDrawerContentId = (title) => (dispatch) => {
  dispatch({
    type: 'SET_DRAWER_CONTENT_ID',
    payload: title,
  });
};
