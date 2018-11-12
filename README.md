# Certificate Web UI

[![Build Status](https://travis-ci.org/OpenCerts/opencerts-website.svg?branch=master)](https://travis-ci.org/OpenCerts/opencerts-website)

See also:

* [opencerts-documentation](https://github.com/OpenCerts/opencerts-documentation)
* [open-certificate](https://github.com/OpenCerts/open-certificate)
* [certificate-contract](https://github.com/OpenCerts/certificate-store-contract)
* [certificate-cli](https://github.com/OpenCerts/certificate-cli)


## Development

We develop primarily on a OS X / Linux environment so please lodge an issue if you are using Windows and find that you cannot successfully set up a local instance of this software.


### OS X / Linux
```bash
yarn
yarn dev
```

### Windows

For Windows you need to set up the toolchain for node-gyp before installing this repository, follow the instructions in https://github.com/nodejs/node-gyp#on-windows.

```bash
yarn
yarn dev
```

### Environmental Variables

`NET` is used for setting the default network, setting it to `mainnet` uses the public Ethereum network. If it is not set it defaults to Ropsten testnet

E.g:
```bash
NET=mainnet yarn dev
```


### Troubleshooting

To enable debug logs in the browser, set `localStorage.debug="*"`

