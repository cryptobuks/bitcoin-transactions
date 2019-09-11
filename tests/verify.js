--- Non BIP143

https://blockchain.info/tx/8de087e5996036bde5231192642f4e44a3b0a9320b09e7c666724d7bf2c00c30

node tx.js BTC verify '0200000001d22d324be898b7c3e315f803268644a06791ec8b0b70e4e7aa64b36cd79e2b9b010000006a47304402201671113d389388db786a17c45ff348bd4074c1e9b1040c78a87fe25477b037bf022017d3c92398abe7109eb921811d42cfb59f5b74f53484a52c5200775538feb3b3012103f0e26f3fa58560226d9b3639476e872df3be04b080141a72f5144f49dad91191feffffff0231130e00000000001976a914c8d683c4ac62b41031118808fd89a5ca08f433e988ac25b39600000000001976a9146123ce2e0abc47081129fe2cdebb6650a408513188ac40a50700' '76a9149d15a86daf3f9cec4c33c92d38c48824cb7165d388ac,0.10809978'

Using standard signing
----- Transaction verified
checksum hash 300cc0f27b4d7266c6e7090b32a9b0a3444e2f64921123e5bd366099e587e08d
----- Transaction hash: 8de087e5996036bde5231192642f4e44a3b0a9320b09e7c666724d7bf2c00c30


--- BIP143

//p2pkh

node tx.js BTG verify '020000000106e26486719d6e490862b121f182ad2b1513bc2838dd17067966596e210ba8d51f0000006b483045022100f6775274f089ce08e9f1abaccbb48d8c95add1053d08e16347f4f2ace186fe540220417da5afb8b0b92c28a4487c31889c7c88250c07f54ff2cdbb70c412fb34c6b74121039f1e160a02079a6d6b7be0334cc4d76a125cd13a6f8d7131b11c263bc20bf918ffffffff022006d51d000000001976a914177b585b5401ad21b60b78b1b3c91996f250296d88ac7cfbd41d000000001976a91461975b3a4b9d5059e3db3e301e394d6d13275b3688ac00000000' '76a91461975b3a4b9d5059e3db3e301e394d6d13275b3688ac,10.00998277'

//p2sh multisig

node tx.js BTG verify '0200000001ecd690f1d6b03a5e5a6c2431f64c7bb11810f05ed7e5d5a0c88d81029f3193a100000000fc0047304402200c1743cfdfb8fab437fd17190f81e0cf7facad1ed5ea8582f8e4304a07805af402206dcc511eb4ac70e2d0ea771768169b6f50af406014971cea3962f4f60d9517ca4147304402206238d15d7ac65678b7ec5c4fecb5dccbb61f74505d9efa762b4db284752327f002200462ebf6ed5475e867eee2e8fdfce7e5581579447f80a12412ae9ecc3a5ead56414c695221021254e3173d3351fa283d10c82042686f43e739933ab19860b479316ffbba57482102267d15316f752c73f80dac185a872463563f0c16457062de1be4d1e513442e8321039f1e160a02079a6d6b7be0334cc4d76a125cd13a6f8d7131b11c263bc20bf91853aeffffffff024072d01d000000001976a914177b585b5401ad21b60b78b1b3c91996f250296d88ac2858d11d0000000017a91454e498ddf5e6621ef62c3f1ef39b3994a1e421a48700000000' 'a91454e498ddf5e6621ef62c3f1ef39b3994a1e421a487,10.00459356'


//All together, if this one passes, then all good

node tx.js BTG verify '0200000000010806e26486719d6e490862b121f182ad2b1513bc2838dd17067966596e210ba8d51f0000006b483045022100e531f8c92ea48db8fab91019cf2e28a15d6a30b5d7b1aa19f535b08407f8779402202f6f0ab8568ad07b699eca2c4e663a40bf7abc415fe8ef68f440deed93ac46834121039f1e160a02079a6d6b7be0334cc4d76a125cd13a6f8d7131b11c263bc20bf918ffffffffecd690f1d6b03a5e5a6c2431f64c7bb11810f05ed7e5d5a0c88d81029f3193a100000000171600141cc394844336ac00287ddc0b7e1f91c565785881ffffffffecd690f1d6b03a5e5a6c2431f64c7bb11810f05ed7e5d5a0c88d81029f3193a101000000fc0047304402205d0b0c62bba5f4ec688e4df01e230c0d0e70a60e0ef427663a7124539e71b5ee02203cdc1739949ebbf22915d9bdf7b05de3109d774699ce5c8466bba136c690bc8b41473044022001a163a9b55e3b44feb82b80acb793427511beac9e6e419f43ad970864334fec0220155919f1b4f765f211d1ac6021654e751dc7df725ccdd190b19632c0bb84413a414c695221021254e3173d3351fa283d10c82042686f43e739933ab19860b479316ffbba57482102267d15316f752c73f80dac185a872463563f0c16457062de1be4d1e513442e8321039f1e160a02079a6d6b7be0334cc4d76a125cd13a6f8d7131b11c263bc20bf91853aeffffffffecd690f1d6b03a5e5a6c2431f64c7bb11810f05ed7e5d5a0c88d81029f3193a10200000023220020270b08e7af7255411418cc2b7b7a89947985881b459f91b9b94836f3b4e4b969ffffffff06e26486719d6e490862b121f182ad2b1513bc2838dd17067966596e210ba8d50100000000ffffffffecd690f1d6b03a5e5a6c2431f64c7bb11810f05ed7e5d5a0c88d81029f3193a102000000171600141cc394844336ac00287ddc0b7e1f91c565785881ffffffff06e26486719d6e490862b121f182ad2b1513bc2838dd17067966596e210ba8d50300000000ffffffffecd690f1d6b03a5e5a6c2431f64c7bb11810f05ed7e5d5a0c88d81029f3193a10400000023220020270b08e7af7255411418cc2b7b7a89947985881b459f91b9b94836f3b4e4b969ffffffff0220d06f59000000001976a914177b585b5401ad21b60b78b1b3c91996f250296d88ace840f91d000000001976a91461975b3a4b9d5059e3db3e301e394d6d13275b3688ac0002483045022100b6fb824b06f2d40405b2ed612add9136b7776f82280760884ba94ee6693c7c1202203d7189398c5ee02c1a6f2e24907806eb30792ab2d64b74aed5da2680876b55684121021254e3173d3351fa283d10c82042686f43e739933ab19860b479316ffbba5748000400473044022064dfa5a15f29fb48fa90ca19d9dd57b834bebe1fc2cf8e191fffec60ab33bfbe022066d1ad18bce6e999f54c1de14ff54cd31059df828207991990eb4361f69507b541483045022100ed890f4167c352ab7fff6c2dc85542358ea06c77c37feed53bd02dbf3b6832b8022025904b08b465be8515db17c87752033dcb9f9f769ab6c5be3496478f4f38fe8c41695221021254e3173d3351fa283d10c82042686f43e739933ab19860b479316ffbba57482102267d15316f752c73f80dac185a872463563f0c16457062de1be4d1e513442e8321039f1e160a02079a6d6b7be0334cc4d76a125cd13a6f8d7131b11c263bc20bf91853ae02483045022100b4afa37613c0d41a65fb54dfd00905ddde698c33bed0eccf2399fb1d1c0d0ee8022044db11553b352a89e056514f0363c7c8ae1a1ba0bcec6e0f57f789fd487d52574121021254e3173d3351fa283d10c82042686f43e739933ab19860b479316ffbba574802483045022100b97563bc8340b2c3b451b917801974db1268463088844226d64b6dfb13111036022059f67b4ad49fb315fbf62854647190a439e9ec925dc5adf7cb0963fb452f17464121021254e3173d3351fa283d10c82042686f43e739933ab19860b479316ffbba5748040047304402200594ef13d8ac1435753ac740033e2e8fef813f63887b656bae172c061501aa7e02204b30de43e857f6d061c05285995555e008d20f61e36c95cd5ec64156a199ae5341483045022100eaa97385ee064f2fc8ecd8218757c1ce7745eba0a80db7277bfb60aab2b95ced0220679b3889a202e3680ceeb2ec3e097d6b6b1df4fe20473f7726df8d3927e8647b41695221021254e3173d3351fa283d10c82042686f43e739933ab19860b479316ffbba57482102267d15316f752c73f80dac185a872463563f0c16457062de1be4d1e513442e8321039f1e160a02079a6d6b7be0334cc4d76a125cd13a6f8d7131b11c263bc20bf91853ae040047304402207905e9cdd071fc1f2dc5ca25b66935c3c45f3c1526f05e6c65524a50e41fb9c402203ecd03ae2c03f2e21faac58648bf058784eda36832c207702261bc19627d64b04147304402203e14541a8ac342f590ad27e621ab0f7b7b129f72efc643da9ee89cacdcc555930220581ff938fbfa25c3d8f6f5ecb5cfa2e0b886c32a0581cd61817a1f16c7ec37a241695221021254e3173d3351fa283d10c82042686f43e739933ab19860b479316ffbba57482102267d15316f752c73f80dac185a872463563f0c16457062de1be4d1e513442e8321039f1e160a02079a6d6b7be0334cc4d76a125cd13a6f8d7131b11c263bc20bf91853ae00000000' '76a91461975b3a4b9d5059e3db3e301e394d6d13275b3688ac,10.00998277' 'a914c2990ca4f8c95fa46ab837a542e38ad50159d3be87,0.00459356' 'a91454e498ddf5e6621ef62c3f1ef39b3994a1e421a487,10.00459356' 'a91415e4726330bde49d3361fff18cc508ea5ec01c5c87,0.00459356' '00141cc394844336ac00287ddc0b7e1f91c565785881,0.001' 'a914c2990ca4f8c95fa46ab837a542e38ad50159d3be87,0.002' '0020270b08e7af7255411418cc2b7b7a89947985881b459f91b9b94836f3b4e4b969,0.003' 'a91415e4726330bde49d3361fff18cc508ea5ec01c5c87,0.004'

Using BIP143 signing
Using BIP143 signing
Using BIP143 signing
Using BIP143 signing
Multisig signatures verified
Redeemer script verified: APWkFpVPuqSf24m8et1sZvARHXNStB2H8x
Multisig allowed to spend
Using BIP143 signing
Using BIP143 signing
Multisig signatures verified
Redeemer script verified: AHmdWHoX1y8x8o2JAD4ABXdYMYczNtmb6Z
Multisig allowed to spend
Using BIP143 signing
Using BIP143 signing
Using BIP143 signing
Using BIP143 signing
Multisig signatures verified
Multisig allowed to spend
Using BIP143 signing
Using BIP143 signing
Multisig signatures verified
Redeemer script verified: AHmdWHoX1y8x8o2JAD4ABXdYMYczNtmb6Z
Multisig allowed to spend
----- Transaction verified
checksum hash 74f65def2cabc4baeb4f8454489b05e66d786dc89a62fc5f001d9758b1497ef7
----- Transaction hash: df5dc55cbc28505aae21251ac414d880e52507edbe2fe90ff4e6fff1c6a24876

