require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict roast fortune street name return peace provide grace basket flower genuine'; 
let testAccounts = [
"0xa2c983b3a200d847b2f9cf73e66d28dbfeef898eeea46d5d09ea6a0caa968f04",
"0xc5d7a2f6ddba7a45b576114a93bef0ff621e7cade6e27123f04dc8f07c28ba15",
"0x620fb8b49ebe5449541874fe926e15cdbc86872954fbc07a6ed9a96bf7ae17dd",
"0x82e5ed48ad3ac6d95c0d760e56d3a15bf97c59708f19bfa84571f630727514a8",
"0xd84265f45f33700d838be83227f2ca4a2ac71075aebc3233fd4dd53999b13c04",
"0x47843796aebf1c12d0acc230f3381a3112672e3c1e9a7db39021cba11f78377c",
"0x60780678ed698d15cc8f282753024c9b803bf44795001601701aeef1c3e937a4",
"0x90e881cec4fcd118262a2b7e170c9695c06808e7fb1e72685ee691621ad194de",
"0xcc707911f064fee5279b542f2a7a518cf7c9615e6b395aafa4b5c770361e110e",
"0xd8cca0c7dd26da68cd3fc5bd6d8f5b05edf42f88b9e71fc13af24960ff79be68"
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
            version: '^0.8.0'
        }
    }
};

