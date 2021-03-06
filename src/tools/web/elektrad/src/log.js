/**
 * @file
 *
 * @brief exports a function that creates logging functions
 *
 * e.g.
 * const { info, error } = makeLog('routes')
 * info('routes loaded!') // displays "elektrad:routes:info routes loaded!"
 *
 * @copyright BSD License (see doc/LICENSE.md or http://www.libelektra.org)
 */

import dude from 'debug-dude'

import { name } from '../package.json'
export const namespace = name.split('/').pop()

export default function makeLog (name) {
  const appendName = name ? (':' + name) : ''
  return dude(namespace + appendName)
}
