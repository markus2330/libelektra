# elektra-web

_an API and web user interface to remotely manage multiple Elektra instances_


## Dependencies

Elektra-web requires:

 * [Elektra](http://libelektra.org/) with the [`yajl` plugin](http://tree.libelektra.org/src/plugins/yajl/) installed
 * A recent [node.js](https://nodejs.org/en/) installation (at least 4.x)


## Getting Started

 * Install dependencies (see above)
 * Clone libelektra repo and `cd libelektra/src/tools/web`
 * Install and start elektrad:
   * `cd elektrad`
   * `npm install`
   * `npm start`
 * Install and start clusterd:
   * `cd clusterd`
   * `npm install`
   * `npm start`
 * You can now access the client on: [http://localhost:33334](http://localhost:33334)


## Overview

Elektra web consists of multiple components:

 * (multiple) servers running an elektra daemon ([`elektrad`](elektrad/))
 * a single cluster management server to communicate with the elektra daemons ([`clusterd`](clusterd/))
 * a client (web browser) that accesses the Web UI on the cluster management server ([`client`](client/))

![https://cdn.rawgit.com/ElektraInitiative/libelektra/master/src/tools/web/doc/network_structure.png](https://cdn.rawgit.com/ElektraInitiative/libelektra/master/src/tools/web/doc/network_structure.png)


## GUI

The Web UI allows the user to add new instances to the network, as well as
combine multiple instances into a cluster. If the configuration of a cluster is
edited, the changes are pushed to all instances in the cluster. Furthermore,
single instances can be configured independently.

The configuration view of elektra web is similar to the tree view of the
[qt-gui](http://git.libelektra.org/tree/master/src/tools/qt-gui).

![https://cdn.rawgit.com/ElektraInitiative/libelektra/master/src/tools/web/doc/ui_structure.png](https://cdn.rawgit.com/ElektraInitiative/libelektra/master/src/tools/web/doc/ui_structure.png)


## API

![https://cdn.rawgit.com/ElektraInitiative/libelektra/master/src/tools/web/doc/daemon_structure.png](https://cdn.rawgit.com/ElektraInitiative/libelektra/master/src/tools/web/doc/daemon_structure.png)

[API blueprints](https://apiblueprint.org/) are available for both APIs:

 * [elektrad](http://tree.libelektra.org/doc/api_blueprints/elektrad.apib), documentation: http://docs.elektrad.apiary.io/
 * [clusterd](http://tree.libelektra.org/doc/api_blueprints/clusterd.apib), documentation: http://docs.clusterd.apiary.io/
