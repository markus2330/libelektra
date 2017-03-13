/**
 * @file
 *
 * @brief shows errors in a small notification on the bottom of the UI
 *
 * @copyright BSD License (see doc/LICENSE.md or http://www.libelektra.org)
 */

import React from 'react'
import Snackbar from 'material-ui/Snackbar'

const ErrorSnackbar = ({ error }) => {
  if (error) console.error(error)
  const message = typeof error === 'string' ? error : error.message
  if (typeof message === 'string' && message.length > 0) {
    return (
      <Snackbar
        open={!!error}
        message={message}
      />
    )
  } else {
    return null
  }
}

export default ErrorSnackbar
