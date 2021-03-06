/**
 * @file
 *
 * @brief Header for range plugin
 *
 * @copyright BSD License (see doc/LICENSE.md or http://www.libelektra.org)
 *
 */

#ifndef ELEKTRA_PLUGIN_RANGE_H
#define ELEKTRA_PLUGIN_RANGE_H

#include <kdbplugin.h>


int elektraRangeGet (Plugin * handle, KeySet * ks, Key * parentKey);
int elektraRangeSet (Plugin * handle, KeySet * ks, Key * parentKey);

Plugin * ELEKTRA_PLUGIN_EXPORT (range);

#endif
