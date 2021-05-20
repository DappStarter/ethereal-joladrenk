require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace person bone tooth figure render remember evil hockey arctic broken skate'; 
let testAccounts = [
"0x8b89c87f77b76eb0be63f84c0c876209126903407a2e7c0939632295ac095459",
"0x7fb04ba423cf13a8b2a0179f5740c1b6f72881c5880581f87b7543e78c2f3dce",
"0xbc0a56cbe67545c488317e73f06a610ae1a9bd2858d600466064cc9d6af35654",
"0x18faa4bdeeb6f6482be9b2c49b15fb17b7d72b2223167bf755c2786b305d4ba3",
"0x18811e6bfce618d1e79e33efb1707e33600f655af64eaa00fdaace25e77e77c7",
"0xa53879af12cf83f39cb277f5c2aa11a150714d8ce05acd4ff6aa18d679ac446a",
"0xc6beb3a9082e0892e7e2231f8640f4be0f4350a92c4c1db16cb4d1d3fd3d2c47",
"0x942704eec20a78ba12c6336365de8075040800304a4f33daf83934fa7531612e",
"0x72e5112b6017f8b261fed2cccde044090ff40ff803d7a19df0059c7fb1fd0245",
"0x2dc4c4d3c4edc1f901c373c0955796b03f01673c90a41043402b70cc2485ffe4"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
