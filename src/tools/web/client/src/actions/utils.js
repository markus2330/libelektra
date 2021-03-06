/**
 * @file
 *
 * @brief utility functions used in multiple actions
 *
 * @copyright BSD License (see doc/LICENSE.md or http://www.libelektra.org)
 */

// create a promise handler that:
//  * emits the first action type (REQUESTED) when the promise is started
//  * emits the second action type (RESOLVED) when everything works well
//  * emits the third action type (REJECTED) when an error happened
export const thunkCreator = (action) => {
  const { types, promise, ...rest } = action
  const [ REQUESTED, RESOLVED, REJECTED ] = types

  return (dispatch) => {
    dispatch({ ...rest, type: REQUESTED })

    return promise
      .then(
        (result) => result && result.status // status is only returned in error messages
          ? dispatch({ ...rest, type: REJECTED, error: result }) // if error, dispatch it
          : dispatch({ ...rest, type: RESOLVED, result }) // otherwise, dispatch result
      )
      .catch(
        (error) => dispatch({ ...rest, type: REJECTED, error })
      )
  }
}

// encode kdb path with encodeURIComponent
export const encodePath = (path) =>
  path.split('/').map(encodeURIComponent).join('/')
