import React from "react";
import "./Main.css";
import SocialIcons from "../components/SocialIcons";
import DegenReport from "./DegenReport";
import DegenFactors2 from "./DegenFactors2";
import DegenFactors from "./DegenFactors";
import CompleteAnalytics from "./CompleteAnalytics";
import DoughnutChart from "../components/DoughnutChart";
import Twitter from "../components/Twitter";
import MetaMaskOnboarding from '@metamask/onboarding'

const ONBOARD_TEXT = 'Click here to install MetaMask!';
const CONNECT_TEXT = 'Connect Wallet';
const CONNECTED_TEXT = 'Connected';
const WRONG_CONNECTED_TEXT = 'Wrong Network';

function createData(Id, name, score,type,url) {
  return { Id, name, score,type,url};
}

function createScore(contract, score,type,url) {
  return { contract, score,type,url};
}

const list = [
  createData('0x546c79662e028b661dfb4767664d0273184e4dd1', "DMM Kyber",30,"Swap","https://dmm.exchange/"),
  createData('0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff', "Quick Swap",30,"Swap","https://quickswap.exchange/#/quick"),
  createData('0xa102072a4c07f06ec3b4900fdc4c7b80b6c57429', "Dfyn",30,"Swap","https://exchange.dfyn.network"),
  createData('0x0769fd68dfb93167989c6f7254cd0d766fb2841f', "Sushi",30,"Swap","https://app.sushi.com"),
  createData('0xbeadf48d62acc944a06eeae0a9054a90e5a7dc97', "Aave",30,"Lend/borrow","https://aave.com"),
  createData('0xa102072a4c07f06ec3b4900fdc4c7b80b6c57429', "Router protocol",20,"Liquidity provider","https://galaxyfarm.routerprotocol.com"),
  createData('0x8cfd1b9b7478e7b0422916b72d1db6a9d513d734', "Polycat ",25,"Farm","https://polycat.finance"),
  createData('0xf38a7a7ac2d745e2204c13f824c00139df831fff', "ELK ",10,"Swap","https://app.elk.finance"),
  createData('0x0c23dcc118313ceb45a029ce0a4ab744ea4928ef', "Polywhale",10,"Farm","https://polywhale.finance"),
  createData('0x88cb5c77f843f97a02309534acc43297b524a382', "Hawkdex",5,"Farm","https://hawkdex.com"),
  createData('0xAA538527C6aa3a15A615Ba936B02655b0bb59Af1', "Hawkdex",5,"Farm","https://hawkdex.com"),
  createData('0x105Abd462Bf3519d55328c7373a6E7621514AF0C', "Hawkdex",5,"Farm","https://hawkdex.com"),
  createData('0x9D4FBCe1C5E786d113fA3EB72ebD90d34274fd1B', "Hawkdex",5,"Farm","https://hawkdex.com"),
  createData('0xFeAFf9fa8e836aea0089d8F2B300bfB65FC3d7b6', "Hawkdex",5,"Farm","https://hawkdex.com"),
  createData('0x5321e125B1199cEC281bB9D4b65d236fB13b15ba', "Hawkdex",5,"Farm","https://hawkdex.com"),
  createData('0x54AefE02398bAC2e96e0ee6F041c376b651EF0a3', "Hawkdex",5,"Farm","https://hawkdex.com"),
  createData('0xCEd39CF6221a10331e2349224BB1Eeb03A5c146f', "PolyDragon",5,"Farm","https://polydragon.io"),
  createData('0x5af74d7023a21a539e49711bf7b81dac48171abe', "PolyStarter",10,"Farm","https://www.polystarter.fi"),
  createData('0xb03f95e649724df6ba575c2c6ef062766a7fdb51', "Polygaj",10,"Farm","https://polygaj.finance"),
  createData('0x5a25c4f43d0bfccc07aa86f7e8a1a1a3bfd9b15d', "Cometh swap",20,"Swap","https://swap.cometh.io/#/stake"),
  createData('0x93bcdc45f7e62f89a8e901dc4a0e2c6c427d9f25', "Cometh swap",20,"Liquidity provider","https://swap.cometh.io/#/stake"),
  createData('0x574fe4e8120c4da1741b5fd45584de7a5b521f0f', "Mai",20,"Farm","https://www.mai.finance"),
  createData('0x947D711C25220d8301C087b25BA111FE8Cbf6672', "Mai",20,"Swap","https://www.mai.finance"),
  createData('0x8596612d55ead92a2de35a4dc0f527e012e928e2', "Polyrangers",1,"Farm","https://polyrangers.finance"),
  createData('0xab51623097b02e0fd96da235ba405a864fbbb5c0', "Polyvalent",5,"Farm","https://www.polyvalent.finance"),
  createData('0xb93c082bcfccf5baea0e0f0c556668e25a41b896', "Polyzap",10,"Farm","https://farm.polyzap.finance/"),
  createData('0x00275072a952f7731d507dc5dec9bcb27c13cfc3', "Polylion",5,"Farm","https://polylion.exchange"),
  createData('0x9BFD897e3eabFfA738a8F1c4d0B397C07E97E42D', "Gemstones Finance",10,"Farm","https://gemstones.finance"),
  createData('0x664e854f5429c03aefa81961dd0bdb6de7b99ab1', "PolyBull",5,"Farm","https://polybull.finance"),
  createData('0x12d916951a9da2763b55972364b0bd0b726e2f43', "Alchemy Dao",5,"Farm","https://polygon.alchemydao.com"),
  createData('0x14d3c919262a0da0b8846507f65fd76f8a1da6a9', "StonkFarm",1,"Farm","https://stonk.farm"),
  createData('0xf61fdc0f479305a0e7566bbeab46196bc0afd997', "Polydex",5,"Farm","https://polydex.fi"),
  createData('0xa96dd23a3027818b9657486380ade322798033de', "Smellycat",5,"Farm","https://www.smellycat.finance"),
  createData('0xa7f3c3f80ff6a6f31bb7bab04e3e8ac4e4dae0c3', "Pirate Dice",10,"Farm","http://piratedice.xyz"),
  createData('0x8ede3d6abeacdc91684bd94f9062568b3ef4753b', "PolyPingu",5,"Farm","https://polypingu.finance"),
  createData('0x8c9d3bc4425773bd2f00c4a2ac105c5ad73c8141', "Beefy Finance(WBTC/RenBTC)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0xaa7c2879daf8034722a0977f13c343af0883e92e', "Beefy Finance(DAI/USDC/USDT)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0xfecf784f48125ccb7d8855cdda7c5ed6b5024cb3', "Beefy Finance(BIFI Maxi)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0xc1a2e8274d390b67a7136708203d71bf3877f158', "Beefy Finance(MATIC-USDC LP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0x0dfd8c4dd493d8f87be362878e41537ca7ee4d9e', "Beefy Finance(USDC-DAI LP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0x3dab1acb811dc4c8b2fdc77812552f4d4efd0a8c', "Beefy Finance(aTriCrypto)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0x21ba98fcb000dfed8ec3b94cb41bea51a601a94c', "Beefy Finance(BIFI-ETH LP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0x77276a7c9ff3a6cbd334524d6f1f6219d039ac0e', "Beefy Finance(ETH)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0x1d23ecc0645b07791b7d99349e253ecebe43f614', "Beefy Finance(MATIC )",10,"Farm","https://polygon.beefy.finance/"),
  createData('0xc8e809a9180d637cc23daf60b41b70ca1ad5fc08', "Beefy Finance(ETH-MATIC LP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0xd3395577febc6adab25490a69955ebc47040766c', "Beefy Finance(WBTC)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0x5d4b83b3011b1e14e55185c5d432987e76f6de3c', "Beefy Finance(USDC-ETH LP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0x58c55b5675b106b440635e2c550a771f4e256d35', "Beefy Finance(USDC-USDT LP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0x7ee71053102d54fc843baebaf07277c2b6db64f1', "Beefy Finance(FISH-MATIC LP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0xef1870fddc25586636bf8a3d7ccf4d298f6e072e', "Beefy Finance(CEL-ETH LP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0x4462817b53e76b722c2d174d0148ddb81452f1de', "Beefy Finance(USDC-USDT LP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0xbe1c35d3349555ba9eea38ab1a21a6db0bb0fcdd', "Beefy Finance(Pup)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0x247303d4be227aa87bd52f05addad772794de394', "Beefy Finance(BIFI-MATIC)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0xf62c521c4fb3fbc20eab50e1871a90a53632f22e', "Beefy Finance(USDC-miMATIC LP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0x76f0e4a08c1e85d020dfd7c66b991ecd4a7551af', "Beefy Finance(BTC-MATIC ALP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0x75424be5378621aec2eef25965f40feb59039b52', "Beefy Finance(USDC-DAI SLP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0x8b89477dfde285849e1b07947e25012206f4d674', "Beefy Finance(ETH-MATIC LP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0xbea5d2aed651f579fa3e7adaa2ec51276b2ea420', "Beefy Finance(YELD-MATIC QLP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0x03f69aaf4c8512f533da46cc9efd49c4969e3cb8', "Beefy Finance(BIFI-USDC SLP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0xefa8e30ce4cc433cea1b3b6006d69731a4fbd485', "Beefy Finance(FISH-MATIC LP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0xcc2755476b0573f0ee0d5a754bb6fe720c3641bb', "Beefy Finance(BIFI-QUICK)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0x752948b4493d2ee09c95f944a76005aebf410087', "Beefy Finance(AAVE-ETH)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0xada7f98fb2594e76914eb593e74b348a498ea5bd', "Beefy Finance(BANANA-MATIC ALP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0xe09888eeab19bce85e67edc59521f3f290b1bcce', "Beefy Finance(WEXPoly-MATIC LP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0xa008b727ddba283ddb178b47bb227cdbea5c1bfd', "Beefy Finance(QUICK-MATIC)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0xb6b89a05ad8228b98d0d8a77e1a695c54500db3b', "Beefy Finance(USDC-USDT LP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0xe71f3c11d4535a7f8c5fb03fda57899b2c9c721f', "Beefy Finance(USDC)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0xf26607237355d7c6183ea66ec908729e9c6eeb6b', "Beefy Finance(WBTC-ETH LP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0x1b02da8cb0d097eb8d57a175b88c7d8b47997506', "Beefy Finance(WBTC-ETH LP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0xe3b5a0d5dfdcd6de7e22a5c2b6b957ab76d2a085', "Beefy Finance(WEXpoly-USDC LP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0xe4db97a2aafbfef40d1a4ae8b709f61d6756f8e1', "Beefy Finance(USDC-ETH LP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0x9649e6e5c689f21bc27b47ce4177f7c5f7281e20', "Beefy Finance(BIFI-ETH LP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0xd35b3733c2ceaf3635be246b2c6c42f10e5b6b78', "Beefy Finance(ibBTC-WBTC SLP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0xc24cf5fa29e619f2d5ccbec46f2295876c3722ff', "Beefy Finance(ETH-MATIC ALP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0x2b17ad11c5e9553c79a18f33df4de565ef0ad5b0', "Beefy Finance(rUSD-USDC LP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0x8ce906f6f383c31b09b1d2a5f2c9f480b87ceb58', "Beefy Finance(BONE-USDC QLP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0xcc16bbe4987920a17f5c4a92c1ab4dbdfb0b9790', "Beefy Finance(FISH)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0x91a55e4b057119e20334258f7c5eab8822491ceb', "Beefy Finance(WBTC-USDC LP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0x6c433f102a6b8582a43222e335c73873538161b7', "Beefy Finance(BONE-MATIC QLP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0x9b36eceac46b70acfb7c2d6f3fd51aea87c31018', "Beefy Finance(Dai)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0xab4105375fbe5f502b0da986f46adf7a21762e52', "Beefy Finance(LINK-ETH LP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0xc422261edc5db679cad9bc403e886351de540e77', "Beefy Finance(ETH-USDT LP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0x66df1b2d22759d03a9f37baaac826089e56a5936', "Beefy Finance(QUICK-ETH LP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0xb1893a79fcce73aefc878e5ac918698ee0110444', "Beefy Finance(PUP-USDC QLP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0x9da4048550c1a73686e594f726310f0b0585fba3', "Beefy Finance(DAI-ETH LP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0x6888f67662d1f442c4428129e0bdb27a275e0a65', "Beefy Finance(BNB-MATIC ALP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0xaf34573353abd160889889d52d7841b2bbce7cf9', "Beefy Finance(QUICK-UNI LP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0x383489a0a5dea3f1499c638e0258f7e6a68a253f', "Beefy Finance(DOKI-ETH LP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0x76ce86b1e1b7a3983b26f7e57b2a0c8896f7eb0d', "Beefy Finance(WISE-ETH LP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0xe95d14d09a8f6034c582bd993a2f2aa8ecec72f0', "Beefy Finance(AZUKI-ETH)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0xa5aae3a55ca356c62b5425aa4bfc212542b17777', "Beefy Finance(ETH-MATIC LP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0x37884333d34eee3eae83439ce4608e69e7081116', "Beefy Finance(PUP-WMATIC QLP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0x5b19a2e8e5878cf2b1e9b1ac7cea50346671b2fc', "Beefy Finance(FRAX-USDC SLP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0x584611da226b4d4c0c4d880e6f1e0c0e8522f3ae', "Beefy Finance(MATIC-DAI ALP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0x7ce2332faf6328986c75e3a8fcc1cb79621aeb1f', "Beefy Finance(MUST-ETH LP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0xe4b3ccbb1e48c579ea3d764fb258bc908e46487e', "Beefy Finance(AAVE)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0x0ca850eefe051ed244846a2939e218ec6d44a0b2', "Beefy Finance(YELD-MATIC SLP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0x866a910f3375d0debddd904a36b3940afcd29900', "Beefy Finance(AAVE-ETH LP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0x5c7fd860fc0072cfef2cc4ab17cc7ff25b639d8b', "Beefy Finance(WBTC-USDC LP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0x8fa291074b9e28055ffdbcd4c1c1dad67b9a130a', "Beefy Finance(BONE)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0x9a8390f3f74e7f367b5f948dd04495b67a54a5f4', "Beefy Finance(YELD-USDC QLP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0xdd32ca42a5bab4073d319bc26bb4e951e767ba6e', "Beefy Finance(LINK-QUICK LP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0xba4fa9a5e1e573fa5267970238af5edf40727315', "Beefy Finance(PZAP-USDC LP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0x1a1432b90a093cbffecb44cf6965e2fd11005373', "Beefy Finance(WEXpoly)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0xe695fced8fd93eee54204a7fc33323a60d41865a', "Beefy Finance(CRV-ETH LP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0x1a90ea15e00a6c647478e86e3a3db1ac1eb23ce5', "Beefy Finance(pBNB-QUICK QLP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0xaba81d550c326dff2ce0d31bc7aa6289d576591e', "Beefy Finance(VISION-ETH LP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0xd73aef83c08264c5600c3a17f009b6f8c0226221', "Beefy Finance(YELD-MATIC ALP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0x8efcf419813f9e018ccacda36151e5079c274fa4', "Beefy Finance(GRT-ETH SLP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0x6f6bbbca49b4b2ce0e27eb0156977048ac3434b9', "Beefy Finance(CC10-ETH LP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0x66b3d910c30f2305ea0078e06df65e0c1745cef0', "Beefy Finance(BIFI-MUST LP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0xa4fb94990f99a8c1290e83d40db9c648fd868d14', "Beefy Finance(ETH-FIL SLP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0x8f1f1fb23a208041e1f4bf4a3b4e165bcca25bbb', "Beefy Finance(DAI-USDT LP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0x75a59e8d6611e90e7a8e439cb59d9f78e738d16f', "Beefy Finance(WBTC-ETH LP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0xf7a5ec9168b4c5688b3ad599aa5c8e1922feacae', "Beefy Finance(DEGEN-ETH LP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0x3ad9cd8d75f7a711caea58e725425a9dc0d249c4', "Beefy Finance(SNX-ETH SLP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0xae65a66b3c7f8cc1ba71cea740c953aba0f3ce8b', "Beefy Finance(LINK-ETH LP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0x7f6fe34c51d5352a0cf375c0fbe03bd19ecd8460', "Beefy Finance(MUST-MATIC LP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0x942aa6324e5d0c102d3ad6607495ac5e798a991a', "Beefy Finance(UBT-ETH LP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0xf2984c27b963a14f9f3b7326096c54fb05d5b9af', "Beefy Finance(PZAP-MATIC LP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0xcb171df46ca6ff7afef6c4935128204435e4f05c', "Beefy Finance(MATIC-ETH LP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0xdf4e615e05713f9be712bb999b3190fd238bb77a', "Beefy Finance(POLYDOGE-MATIC LP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0x2d4cf116a59e24dd0ab8821c93ae87658a9483b6', "Beefy Finance(FFF-QUICK LP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0x5e7156f7c0b5e2005000c38beb38540ba9c283df', "Beefy Finance(USDC-DAI LP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0x544551e4e7d7bdd1cfbd55f07e304f5c9fd514dd', "Beefy Finance(MATIC-WOOFY SLP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0x9f3b96a2dd55aa904bc5476ffe66e74a53f6b420', "Beefy Finance(FISH-MATIC LP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0x8a198bcbf313a5565c64a7ed61faa413eb4e0931', "Beefy Finance(USDC-MUST LP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0xecbb84e73760d0e22bdbee79490c691386b5008f', "Beefy Finance(MATIC-USDC LP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0xe8417099971151cd5cfae264e25634fac05ca2b3', "Beefy Finance(ETH-USDT LP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0x2849095ee44ecd5f60ed04f94e5bb45623a8e75a', "Beefy Finance(ANY-QUICK LP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0x3a3a9784af130d692e19a3f1c1b13ef44301d0f7', "Beefy Finance(DAI-ETH LP )",10,"Farm","https://polygon.beefy.finance/"),
  createData('0x61f55dc5243398d57acd5d6265e228da65c4cb52', "Beefy Finance(pBNB-USDC QLP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0x82303a4b2c821204a84ab2a068ec8edf3bc23061', "Beefy Finance(mOCEAN-MATIC LP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0x53e674d5cc969930420d73e4b79ee0d46ccdf6c4', "Beefy Finance(DEFI5-ETH LP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0xf7e1226f6f98d1981e88da328347f0e2131a2864', "Beefy Finance(SNX-ETH LP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0x23ee6ed971ae7731f53913d9f8a45c7c1af3d6d5', "Beefy Finance(LINK-ETH LP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0x6b6ca47520ddc9333b8bd09a1e64204648b63274', "Beefy Finance(ETH-DAI LP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0x1be356364a1e849af2f7a513fc46dab6063db485', "Beefy Finance(MATIC-USDT ALP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0xe942a8ef245eac3cea951486e3df5764c79b9621', "Beefy Finance(DEGEN-QUICK LP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0x442ca31de7e6732455e60e3641ac076fa7a0905f', "Beefy Finance(FRAX-QUICK LP()",10,"Farm","https://polygon.beefy.finance/"),
  createData('0x191e0b3b023fd8911c1d7632086a46c0d2db39ed', "Beefy Finance(DEFI5-QUICK LP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0x226a18fb5eb7d9d1c4eb1b5cff957e0f1e3fd9ed', "Beefy Finance(CC10-QUICK LP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0xa5b0e0f38bc86723a9893b828a4b9595ecb22f42', "Beefy Finance(FFF-ETH LP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0xddd5f39d044dbaeef7b348cf04c3628acd3f1d8f', "Beefy Finance(FRAX-FXS SLP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0xc4cc677bb8b7e6eea6409ee2af9f434bab004192', "Beefy Finance(AAVE-ETH LP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0x94242e121f056fa7f0892452e6a17678124981c1', "Beefy Finance(RAMP-ETH LP)",10,"Farm","https://polygon.beefy.finance/"),
  createData('0x8ede3d6abeacdc91684bd94f9062568b3ef4753b', "Eleven Finance(WETH)",10,"Farm","https://eleven.finance"),
  createData('0x297936316a539dfa8287fc8966300bf4fd6dd4bf', "Eleven Finance(qLP)",10,"Farm","https://eleven.finance"),
  createData('0x299fa358763037657bea14825cd06ff390c2a634', "Eleven Finance(USDC)",10,"Farm","https://eleven.finance"),
  createData('0x52b8bb74cde6602ab9e6540e25e0a97f5b3226d7', "Eleven Finance(LP)",10,"Farm","https://eleven.finance"),
  createData('0xa599e42a39dea9230a8164dec8316c2522c9ccd7', "Eleven Finance(WBTC)",10,"Farm","https://eleven.finance"),
  createData('0x551be90d8d6c47c2ac03e1bfee958e4dba68c662', "Eleven Finance(WLP)",10,"Farm","https://eleven.finance"),
  createData('0xc74968693a829ca04f49e741285a0be831fac5f7', "Eleven Finance(DAI)",10,"Farm","https://eleven.finance"),
  createData('0x90fca6d7931b4fecae00c3dd864304ac8848ff7a', "Eleven Finance(WMATIC)",10,"Farm","https://eleven.finance"),
  createData('0xaa6bca49f7842823312b0d90b4e1e336a7dbf892', "Eleven Finance(WMATIC)",10,"Farm","https://eleven.finance"),
  createData('0x873ba405abd1cdc561499097f03e08ccc054ecf8', "Eleven Finance(USDT)",10,"Farm","https://eleven.finance"),
  createData('0x38e5c26f7bec4e5966061a1bb13b656999f91c65', "Eleven Finance(dLP)",10,"Farm","https://eleven.finance"),
  createData('0xbfc3aed1d368275cf51e7a8a74f819f9def5329f', "Eleven Finance(QUICK)",10,"Farm","https://eleven.finance"),
  createData('0x60c9d693cbe45df09327a46f0792f821cd58a438', "Eleven Finance(qLP)",10,"Farm","https://eleven.finance"),
  createData('0xb137fc75c8ec7002d18135a49453897b25153e29', "Eleven Finance(LINK)",10,"Farm","https://eleven.finance"),
  createData('0x3e100f668ee0798907494320021364c3381e7c45', "Eleven Finance(WEXpoly)",10,"Farm","https://eleven.finance"),
  createData('0xf4051fdd819c580e4c03ff73cff9a6d9f29bd48d', "Eleven Finance(WLPp)",10,"Farm","https://eleven.finance"),
  createData('0x358db93025bfffdcaba4c952b7db7ea49e5203cb', "Eleven Finance(qLP)",10,"Farm","https://eleven.finance"),
  createData('0xb29425f706ea716c91a2ae68ee883c6a6791938b', "Eleven Finance(Sushi)",10,"Farm","https://eleven.finance"),
  createData('0x1a07a25a2709c7d1e9d490810a8bc77c591465e0', "Eleven Finance(WLP)",10,"Farm","https://eleven.finance"),
  createData('0x2a4947512163110c5b06276cf7c8d31cdf374489', "Eleven Finance(cLP)",10,"Farm","https://eleven.finance"),
  createData('0x3c39ef6d6f6b8db1066c51ef62b7161545183524', "Eleven Finance(USDC)",10,"Farm","https://eleven.finance"),
  createData('0x2a4947512163110c5b06276cf7c8d31cdf374489', "Eleven Finance(WLP)",10,"Farm","https://eleven.finance"),
  createData('0xc5e165c4da919448889e4ddf625e56641a340dab', "Eleven Finance(DFYN)",10,"Farm","https://eleven.finance"),
  createData('0x32967a223ed1451e40e8377be6711a5fbdba8577', "Eleven Finance(WLPp)",10,"Farm","https://eleven.finance"),
  createData('0x5c95b6c16df69e97d5aec4cfefbb1200847d7101', "Eleven Finance(FISH)",10,"Farm","https://eleven.finance"),
  createData('0xefe3a0e8ae9d78e02a9a96a7fb0b77b5772bd7d5', "Eleven Finance(WLP)",10,"Farm","https://eleven.finance"),
  createData('0x25b8b36711ff3f26f63398036a111710b762d886', "Eleven Finance(WLP)",10,"Farm","https://eleven.finance"),
  createData('0x41a971b034f27a98ebb83b4c269c075176bc8120', "Eleven Finance(WLP)",10,"Farm","https://eleven.finance"),
  createData('0x3dd3e6db11f0babeff02c8476caa0b67b14d0a09', "Eleven Finance(WLP)",10,"Farm","https://eleven.finance"),
  createData('0xd54dd032d36db9f780a533fba50ea37c6a2646c5', "Eleven Finance(cLP)",10,"Farm","https://eleven.finance"),
  createData('0x08479bab15ee4932adbe8313b270c08fbe4385db', "Eleven Finance(WLP)",10,"Farm","https://eleven.finance"),
  createData('0x67b4b6d5e79c16e9cfab59ebdff79414f1c4c371', "Eleven Finance(WLP)",10,"Farm","https://eleven.finance"),
  createData('0x8b5ac432aa751062e9145f0be0535d585c4dd168', "Eleven Finance(WLP)",10,"Farm","https://eleven.finance"),
  createData('0xd109d9d6f258d48899d7d16549b89122b0536729', "Eleven Finance(SLP)",10,"Farm","https://eleven.finance"),
  createData('0x0cd17f43a5db82cfa7e9fd0b328762f602c5a178', "Eleven Finance(WLP)",10,"Farm","https://eleven.finance"),
  createData('0xb29f69942da43f4b696f49ec5b88445f40d2a563', "Eleven Finance(tricrypto)",10,"Farm","https://eleven.finance"),
  createData('0x1e87579eaf9bbdbed0c501d8eeb5a5d9b249fe83', "Eleven Finance(WLP)",10,"Farm","https://eleven.finance"),
  createData('0x75b6d0342cfd7723d621d1185c5d85552f6d67bd', "Eleven Finance(WLP)",10,"Farm","https://eleven.finance"),
  createData('0x39cf6bd2671798d482578ce4407ba5f64f87803d', "Eleven Finance(POLYDOGE)",10,"Farm","https://eleven.finance"),
  createData('0x162da44709810dcb8b886b60d9b3d0b105a77946', "Eleven Finance(KRILL)",10,"Farm","https://eleven.finance"),
  createData('0x05f3e3a431e7f63fa5b244fed32216a5ff23ff63', "Eleven Finance(WLPp)",10,"Farm","https://eleven.finance"),
  createData('0xc8bd86e5a132ac0bf10134e270de06a8ba317bfe', "Wault Finance(USDT)",10,"Farm","https://Wault.finance/"),
  createData('0x33f7fc6cf0e6878b59232f7cc30f8a62d1831274', "Wault Finance(MATIC)",10,"Farm","https://Wault.finance/"),
  createData('0xa280800b88eb1591de3a0666bf77542f0eae7389', "Wault Finance(Pool)",10,"Farm","https://Wault.finance/"),
  createData('0xc8bd86e5a132ac0bf10134e270de06a8ba317bfe', "Wault Finance(USDC)",10,"Farm","https://Wault.finance/"),
  createData('0x2e47630f1a7807b596267361f9dd4c534632ae98', "Goldenbull(WMATIC Pool )",5,"Farm","https://farms.goldenbull.finance"),
  createData('0xe6685127b6d7c596e2d92b1f570b16f94974b146', "Polyakita(WMATIC Pool )",1,"Farm","https://defi.polyakita.com"),
  createData('0xafb4314cfb1089d875847339fc77c69971239d64', "Prism(WMATIC Pool )",5,"Farm","https://polygon.prismfinance.net"),
  createData('0x3e9f42ce8acc06bab8e020b6d259ef501989743c', "PolyCash(WMATIC Pool)",1,"Farm","https://polycash.finance"),
  createData('0xce3e2ef4c34841ea20092e09b482eb75497f47df', "Polydeer Finance(WMATIC Pool)",1,"Farm","https://polydeer.finance"),
  createData('0x716b3406842143b49acb16cdd1b1e43f84bf4d98', "BerserkFinance(WMATIC Pool)",1,"Farm","https://berserkfinance.com"),
  createData('0x16c0d3fbfd270797c88130df8546952e09773810', "Space(WMATIC Pool)",1,"Farm","https://polygon.space-defi.com"),
  createData('0x449c42be87bb77533c749964fd7c3b1145cac151', "XDollar(Xusd Pool)",20,"lend / borrow","https://xdollar.mcn.ventures"),
  createData('0x28a5041b624705668c4a59e3d3b5915024e93c66', "PolyCarrot(WMATIC Pool)",1,"Farm","https://www.polycarrot.finance"),
  createData('0xbf6c5b8df70cfcd8676752debab58f2a60042430', "8Ball(WMATIC Pool)",5,"Farm","https://8ballfinance.io"),
  createData('0x8be82ab9b6179be6eb88431e3e4e0fd93b9e607c', "PolyVertex(WMATIC Pool)",10,"Farm","https://polyvertex.finance"),
  createData('0xff42ae1a338585316267345e6234fc7e6de15d34', "PolySnowFarm(WMATIC Pool)",10,"Farm","https://polysnow.farm"),
  createData('0x2dc11b394bd0f1cc6ac0a269cfe3cc0b333601b4', "Polyyeld(WMATIC Pool)",25,"Farm","https://polyyeld.finance"),
  createData('0x2ad3576c885390bef53120ec56adf8bc21605c8d', "PolyHarvest(WMATIC Pool)",5,"Farm","https://www.polyharvest.finance"),
  createData('0xf421b0997dd3814aa8ad67075826452f9d8e36da', "PolyWoof(WMATIC Pool)",5,"Farm","https://www.polywoof.finance"),
  createData('0x7cefc4449f047faf16eed516b80a9e49d3c45f6f', "Cosmic(WMATIC Pool)",5,"Farm","https://polygon.cosmicswap.finance"),
  createData('0x4ae6c480f0d71811ecfc38eda98bed429548520a', "StonkYFarm(WMATIC Pool)",5,"Farm","https://stonky.farm"),
  createData('0xde3e956138e35e99a4ba5508ee488f993ac7c853', "Polycafe(WMATIC Pool)",1,"Farm","https://polycafe.finance"),
  createData('0x6cf9d94f71907102558d0a5e9bc48206540be40d', "Slowpoke(WMATIC Pool)",1,"Farm","https://slowpoke.space"),
  createData('0xe0722cec11006d8b5f45376baf9a2f100e4eb74e', "PolyRocket(WMATIC Pool)",1,"Farm","https://www.rocketfarming.finance"),
  createData('0x2149e7f5dfb66c6c1066c050dd70954d58ca14f1', "PolyComet(WMATIC Pool)",1,"Farm","https://www.polycomet.com"),
  createData('0xd39ff512c3e55373a30e94bb1398651420ae1d43', "Fulcrum(MATIC Pool)",20,"Margin trade","https://polygon.fulcrum.trade"),
  createData('0x18D755c981A550B0b8919F1De2CDF882f489c155', "Fulcrum()",20,"Farm","https://polygon.fulcrum.trade"),
  createData('0xfe8ccfa34889480a0599cb0f823cfae53a751e4e', "XBull(XBull pool)",5,"Farm","https://xbull.finance"),
  createData('0x6ad70613d14c34aa69e1604af91c39e0591a132e', "Augury(WMATIC Pool)",20,"Farm","https://augury.finance"),
  createData('0x78b2e8bd0a3f4362a3156d36e1370ba56ca3dc5d', "PolyFunky Finance(FUNK Pool)",1,"Farm","https://www.polyfunky.com"),
  createData('0x975601b1f21d3688ec853f25821ce9dad62c5e1d', "50Cent(50 Cent Pool )",10,"Farm","https://50cent.network"),
  createData('0xf43261d712cca4ae55b34b77d9157e773254d1df', "HonestWorkFarms(USDC-DAI Pool )",5,"Farm","https://www.honestwork.farm"),
  createData('0x5724d6fc6c296bb8f228a5b76c5ecfa6aa50ec4f', "Polygame(MATIC-WETH Pool )",5,"Farm","https://polygame.finance"),
  createData('0x3c58ea8d37f4fc6882f678f822e383df39260937', "Polyroll(WMATIC Pool)",10,"Farm","https://polyroll.org"),
  createData('0x217cf04c783818e5b15ae0723b22ee2415ab5fe3', "PolyPulsar(WMATIC Pool)",10,"Farm","https://www.polypulsar.farm"),
  createData('0xd1379d71e29858583e4f1371dc280da184217153', "Lego(WMATIC Pool)",1,"Farm","https://legofarming-polygon.club"),
  createData('0xafb54278a217ef3f21324fb830e64a7c40edbbb8', "FairyFarming(WMATIC Pool)",1,"Farm","https://fairyfarming.world"),
  createData('0xd43439a5c9d0c5bc305defdf318dc56d9be7f448', "StonkZFarm(WMATIC Pool)",10,"Farm","https://stonkz.farm"),
  createData('0x445098d74b6eb4f3bcf20865989b777ee405a48c', "Polyquity(PUSD Stability Pool)",20,"Farm","https://app.polyquity.org"),
  createData('0xb19300246e19929a617c4260189f7b759597b8d8', "Tako(ETH-WMATIC Ape Lp)",10,"Farm","https://takodefi.com"),
  createData('0xb49036fb35b4e1572509f301e1b0fd0113771ffa', "Harvester(WMATIC Pool)",10,"Farm","https://harvester.app"),
  createData('0xd87b00b880469d69584f4970d6f8a9ced7f444f8', "Polymer(WMATIC Pool)",10,"Farm","https://polymeryield.finance"),
  createData('0xd994a824509bcc46f6f468eea62baf6a96ff141a', "Polyvolve (WMATIC Jungle)",1,"Farm","https://polyvolve.finance"),
  createData('0xadac1bc3e5e68593ed09b8a103fdc98f5f67384d', "Polybrew(WMATIC Pool)",10,"Farm","https://polybrew.finance"),
  createData('0x8881bda61814bd8875af7e1f861277b8b845a6d7', "PolyDiamond(WMATIC Pool)",10,"Farm","https://polydiamondfinance.com"),
  createData('0x023a4ac76df8f9468286383650346423b73daf08', "PolyCactus(WMATIC Pool)",1,"Farm","https://polycactus.com"),
  createData('0x8e576c1ee1955eddc1c365f1aa710209af9286ac', "PolyGrass(WMATIC Pool)",1,"Farm","https://polygrass.online"),
  createData('0x0519848e57ba0469aa5275283ec0712c91e20d8e', "Pickle(Dai Pool)",20,"Farm","https://app.pickle.finance"),
  createData('0x1aec80c827f2d35d8eef2d8d3977516271b05b2e', "Fox(WMATIC Pool)",1,"Farm","https://foxfarming.us"),
  createData('0xfb5f7a67217d2c0de0cb89f589df54fb8452f8c1', "Pepe(WMATIC Pool)",5,"Farm","https://pepefarm.finance"),
  createData('0x9dcb2d5e7b5212faf98e4a152827fd76bd55f68b', "PolyPupBone(WMATIC Pool)",10,"Farm","https://bone.polypup.finance"),
  createData('0x0678f7ccbe68441bdcb09c460e14a4a2b833079b', "PolyRuby(WMATIC Pool)",5,"Farm","https://www.polyruby.finance"),
  createData('0x9dd398dfd94d40699ecb020864e3501d8a978c71', "PolyZeus(WMATIC Pool)",5,"Farm","https://polyzeus.finance"),
  createData('0x772a9845f165ba97dd3e19f766ae25f4d0dbaf96', "PolyMax - CaveMan(WMATIC Pool)",5,"Farm","https://caveman.polymax.club"),
  createData('0xd8204b91e4504b132557a055317294b39d96275A', "Astro Bunny Finance()",1,"Farm","https://www.astrobunny.finance/"),
  createData('0x4B47fc224797D0246980E67ac35f67e4308FFa7A', "PolyYearn()",10,"Farm","https://polyyearn.finance/"),
  createData('0x616CAFA10C2EE31B2da90d9511C92d84bA3F4Fc7', "Brainswap()",1,"Farm","https://brainswap.finance/"),
  createData('0xf840FCe89f15ADfF63cdae750Bce8B1408c205C7', "PolyRacoon()",10,"Farm","https://www.polyracoon.com/"),
  createData('0xBd93D8132de980396fe170cA806f0084100E0409', "PolyKim Finance()",1,"Farm","https://kimcoin.farm/pools"),
  createData('0x2a2329c98fBea35E48d08a039F8EDC169028f1b8', "WorldSwap - Hanoi Edition()",5,"Farm","https://hanoi.worldswap.finance"),
  createData('0x8AfFf0191249E5563a063C758C0a2a189a9cB35C', "Space DeFi()","Farm","https://www.polygon.space-defia.com/"),
  createData('0x0d17C30aFBD4d29EEF3639c7B1F009Fd6C9f1F72', "BoneSwap",10,"Farm","https://farm.boneswap.finance"),
  createData('0x772A9845F165Ba97dd3e19f766AE25f4d0DBAf96', "PolyMax Caveman()",5,"Farm","https://caveman.polymax.club/"),
  createData('0x7B4E32ef2e3f04964bB7e6EAd4B9a2016B723713', "Berserk Band of Hawks()",5,"Farm","https://hawk.berserkfinance.com/"),
  createData('0x6af5a990f6838069d4fFadC7605C817262D10F39', "PantsuSwap()",5,"Farm","https://pantsuswap.com/"),
  createData('0x531274D7f9623341aa9a7F2F38b0Dd0FBE27D5Db', "Polysa Finance(duff)",10,"Rug(soft)","https://www.polysa.finance/"),
  createData('0x833f7dDfbF5242093dbdC71EcCCdE93Cdd425579', "Sunswap onlie(son swap)",10,"Rug(soft)","https://www.sunswap.online/"),
  createData('0x0D2cdfdb3fFd1c866Cd4453b985f57f207eE8238', "Hydra Blazar()",10,"Rug(soft)","https://hydra.blazar.finance/#/"),
  createData('0x9EAAcD7d41fddE61314EEeB61326C06402b9Bfe3', "PolyYield(Got rekt by paying 100% fee)",10,"REKt(prolly a rug)","https://polyyield.finance/"),
  createData('0x66886e787c9aE72b7418234C871e872a67FC357f', "PolyCubanV2()",10,"Rug(soft)","https://v2.polycuban.finance/"),
  createData('0x04341AB39E2D806c94707Aa6D779D1c4A15fb06d', "Apple Finance",10,"Rug(soft)","https://www.applefinance.io/"),
  createData('0x0257fFa79592ebfFd8Fab13eF50F83c2ae7050f0', "PolyHype()",10,"Rug(soft)","https://polyhype.finance/"),
  createData('0xFa00505AC5ef3b2bb37e421D9146c167d4c3C741', "Carousel Finance()",10,"Rug(soft)","https://carouselswap.com/?ref=0k9Q4p31n3s6630Q3O9nR5s04ON08QqSN21Nps2r19"),
  createData('0x81Be8Ca3373440eC94e39455Db07E55D15378a0c', "TEDD Finance",10,"Rug","https://tedd.finance/"),
  createData('0x49C472315BADa5612b5EfB0a1152e59461E0dBfE', "Polygamer",10,"Rug(Developer abandoned the project)","https://farm.polygamer.io/"),
  createData('0x49C472315BADa5612b5EfB0a1152e59461E0dBfE', "TamagochiSwap",10,"Rug","https://tamagotchiswap.com/"),
  createData('0x4912b5Fee159a2073DF3566be41610Ed0969E7DF', "DogeMaticSwap",10,"Rug","https://www.DogeMaticSwap.com"),
  createData('0x67749e090Fc7258982fC00d27A2ad708d6F97F44', "KoalaDefi",10,"Rug(DO NOT STAKE IN THIS!)","http://koaladefi.monster/cgi-sys/defaultwebpage.cgi"),
  createData('0x8CF5Fd03E893270b77117DC72C5a19C059eDCBde',"PolyByson",10,"Rug(Has been abandoned)","NA"),
  createData('0x91f0E7C56DEAFe8C2BE3398eA7589D62A092DAA0', "Duck Finance",10,"Rug(soft)","https://www.duckdefi.finance/"),
  createData('0xDF4fe3c10049eE6017bA4A6f6363479187986748', "Blazar Finance",10,"Rug(soft)","https://blazar.finance/"),
  createData('0xdD3f44D093f581370557C2A433529a4a6649c556', "PolyOrca",10,"Rug","https://polyorca.finance/?referral=0xE589570F38c319e557bD1360f6be52F0d59d6685"),
  createData('0x3b74e4eeBdf79D85FE16fD5437d9136fE5232BE9', "2Pac Finance",10,"Rug(project dead)","https://www.2pacfinance.online/"),
  createData('0xFcB50bA9D50ec0a3705a554f0b5E76d3909b2Df9', "PolyCuban",10,"Rug(soft)","https://polycuban.finance/"),
  createData('0x660D00BCB57274c137a8eEcBDe2C635f0EDEe91F', "Bapeswap",10,"Rug(project is dead)","https://www.bapeswap.com/"),
  createData('0x569610567F5262b6A9bfdf6B04793A407d8E97c7', "Beets Farm",10,"Rug","https://beetsfarm.finance/"),
  createData('0xBB1477D0CF1430b15Ed7bf056a7E9DE87441FDaf', "PolyWhat",10,"Rug(project is dead)","https://www.polywhat.online/"),
  createData('0x17684f4d5385FAc79e75CeafC93f22D90066eD5C', "SafeDollar",10,"Rug(They got exploited)","https://app.safedollar.fi/"),
  createData('0x523fe42A3908d2d969B1f1D3319D0E1127C06366', "PolyWasp",10,"Rug(project is dead)","NA"),
  createData('0x66C0dD5A710ba1D9D7cEb51285BC7A93F8F9f9E2', "PolyFlorida",10,"Rug(project is dead)","https://www.polyflorida.online/"),
  createData('0xdFF5Ae6213B65ad7355c72d19C3C1a3D8c2C78Fd', "Panda Matic",10,"Rug(soft)","https://pndamatic.club/"),
  createData('0xB709e069EDbB5B8d4bD3A8c6d4AEE6Fb751d59ca', "Finite Farm",10,"Rug(Moved to High Risk)","https://finite-finance.herokuapp.com/"),
  createData('0x5512D41616c839042459BABB3f969b2C90323633', "Glockswap",10,"Rug(Project Dead)","https://www.glockswap.com/"),
  createData('0xA12005edA0eb0f83462D39A8452b3b976f926a76', "Dinosaur Finance",10,"Rug(admin has set deposit fees to 100%. STAY OUT.)","https://dinosaurfinance.vercel.app/"),
  createData('0x703418a72FC982ec157b6388E6e9f2C9E09d96D3', "PolyWeed",10,"Rug(Site Down)","https://app.polyweed.finance/"),
  createData('0x50C6eC50a89a946C5886Aeb54a22fe732558F7D1', "PolyButterfly",10,"Rug(Rugged for 1.5m)","https://polybutterfly.finance/"),
  createData('0x55642E8Df0153010Df8415f0D2e6e4679A1D5d88', "Polyvee Finance",10,"Rug(site is down, and contract is not verified on polygonscan)","https://www.polyveefinance.com/"),
  createData('0xf5A8830d3dacc3D3D53C16Ed09e6f808477e592E', "PolyIon",10,"Rug(admin deleted their account)","https://polyion.net/"),
  createData('0xe0e400617A20ADee7B2034324C3fa4C37bce97E8', "PolyGold",10,"Rug(Dev stole deposit fees and abandoned project)","https://polygold.finance/"),
  createData('0x65430393358e55A658BcdE6FF69AB28cF1CbB77a', "Polygon Iron.finance",10,"Rug(lead to a mass sell off crashing the price)","https://polygon.iron.finance/"),
  createData('0x1D61ff16F1720d28E61C2AFaC2d3E5488a9e62D5', "Polysnake",10,"Rug(Unverified contract)","https://www.polysnake.finance/"),
  createData('0xb85A840A8b19C02C5F3188C3018f78918dB18761', "Ape.community",10,"Rug(EXPLIOTED)","https://ape.community/"),
  createData('0x159AAd97c625C7eAC5ddDDbC088c639490b9c55a', "Polyfox.finance",10,"Rug(website down)","https://polyfox.finance/"),
  createData('0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff', "Quickswap",30,"Swap","https://quickswap.exchange/#/swap"),
  createData('0xc0788a3ad43d79aa53b09c2eacc313a787d1d607', "Ape Swap()",20,"DEX","https://polygon.info.apeswap.finance/"),
  createData('0xdef1c0ded9bec7f1a1670819833240f027b25eff', "macha()",20,"DEX","https://matcha.xyz/"),
  createData('0x3add3034fcf921f20c74c6149fb44921709595b1', "DMM Exchange()",20,"LP","https://dmm.exchange/#/swap"),
  createData('0x73cf8c5d14aa0ebc89f18272a568319f5bab6cbd', "Cream finance()",20,"DEFI","https://app.cream.finance/"),
  createData('0x8a5ae804da4924081663d4c5dab4dc9bb7092e2e', "Nord saving()",10,"saving","https://app.nordfinance.io/"),
  createData('0x13a145d215182924c89f2abc7d358dcc72f8f788', "Unilend()",20,"DEFI","https://app.unilend.finance/lend"),
  createData('0x34bc3D36845d8A7cA6964261FbD28737d0d6510f', "Poly whale()",20,"Farm","https://polywhale.finance/"),
  createData('0xfc39742fe9420a7af23757fc7e78d1c3ae4a9474', "Easyfi(Easyfi  Usdt)",20,"defi","https://easyfi.network/"),
  createData('0x4ebde54ba404be158262ede801744b92b9878c61', "Easyfi(easyfi usdc)",20,"defi","https://easyfi.network/"),
  createData('0xa1c09c8f4f5d03fcc27b456475d53d988e98d7c5', "Easyfi(easyfi dai)",20,"defi","https://easyfi.network/"),
  createData('0x11111112542d85b3ef69ae05771c2dccff4faa26', "1inch()",20,"swap","https://app.1inch.io/"),
  createData('0x7c27adf852c87d2a5bdf46abfdfa9531b76ef9c1', "swap matic()",20,"swap","https://swapmatic.io/swap"),
  createData('0x7c27adf852c87d2a5bdf46abfdfa9531b76ef9c1', "swap matic lp ()",20,"LP","https://swapmatic.io/swap"),
];

function Main (){

  // Here I'm logging the Context
    const [buttonText, setButtonText] = React.useState(ONBOARD_TEXT);
    const [isDisabled, setDisabled] = React.useState(false);
    const [accounts, setAccounts] = React.useState(0);
    const [networkId, setNetworkId] = React.useState([]);
    const [error, setError] = React.useState(null);
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [items, setItems] = React.useState([]);
    const [scores,setScores ] = React.useState([]);
    const [fcontract,setFContract ] = React.useState([]);
    const [tcontract,setTContract ] = React.useState([]);
    const [totalsum,setTotalSum ] = React.useState(0);
    const onboarding = React.useRef();
    const scoreList =[];
    const pcoreList =[];


    function apiFetch(acc) {
      // acc='0x8eDe3d6abeACDC91684BD94F9062568b3eF4753B';
      fetch("https://api.polygonscan.com/api?module=account&action=txlist&address="+acc+"&startblock=1&endblock=99999999&sort=asc&apikey=FU3PWR4G96FC7HAUBU8AMD31RWFRHWCK2")
        .then(res => res.json())
        .then(
          (res) => {
            setIsLoaded(true);
            setItems(res.result);
            setScores(filterIt(res.result));
            setFContract(findUnique(res.result,"contract"));
            setTContract(findUnique(res.result,"type"));
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }

  function frequency(arr, key){
  let arr2 = [];
  arr.forEach((x)=>{

    // Checking if there is any object in arr2
    // which contains the key value
     if(arr2.some((val)=>{ return val[key] == x[key] })){

       // If yes! then increase the occurrence by 1
       arr2.forEach((k)=>{
         if(k[key] === x[key]){
           k["occurrence"]++
         }
      })

     }else{
       // If not! Then create a new object initialize
       // it with the present iteration key's value and
       // set the occurrence to 1
       let a = {}
       a[key] = x[key]
       a["occurrence"] = 1
       arr2.push(a);
     }
  })

  return arr2
}
    function findUnique(data,needle)
    {
      data.forEach(function (i, index,arr)
    {
      list.forEach((item) => {
        if(i.to == item.Id)
        pcoreList.push(createScore(item.name,item.score,item.type,item.url));
      });
    })
      return frequency(pcoreList,needle);
    }

    function filterIt(data)
    {
      data.forEach(function (i, index,arr)
    {
      list.forEach((item) => {
        if(i.to == item.Id)
        scoreList.push(createScore(item.name,item.score,item.type,item.url));
      });
    })

  var sum =0;

  const result = [];
  const map = new Map();
  for (const item of scoreList) {
      if(!map.has(item.contract)){
          map.set(item.contract, true);    // set any value to Map
          result.push({
              contract: item.contract,
              score: item.score,
              website :item.url,
              type : item.type
          });
          sum+=item.score;
      }
  }
  console.log(sum);
  setTotalSum(sum);
  console.log("filtered Data : ", result);
  return result;
    }

    React.useEffect(() => {
      if (!onboarding.current) {
        onboarding.current = new MetaMaskOnboarding();
      }
    }, []);

    React.useEffect(() => {
      console.log("chainChanged");
      if (MetaMaskOnboarding.isMetaMaskInstalled()) {
        window.ethereum.on('chainChanged', (chainId) => {
          if(chainId==='0x89')
          {
          // setButtonText(accounts[0].toString().substring(0, 5)+"...."+accounts[0].toString().substring(37, 42));
          setDisabled(true)
        }
        else {
          setButtonText(WRONG_CONNECTED_TEXT);
          setDisabled(false);

        }
          setNetworkId(chainId);
    });
      }
    },[networkId]);

    React.useEffect(() => {
      if (MetaMaskOnboarding.isMetaMaskInstalled()) {
        window.ethereum
          .request({ method: 'eth_chainId' })
          .then((chainId) =>
          {setNetworkId(chainId);
              console.log("eth_chainId");
          }).catch((error) => console.error(error));
      }
    }, [networkId]);

    React.useEffect(() => {
      if (MetaMaskOnboarding.isMetaMaskInstalled()) {
        if (accounts.length > 0 && networkId==='0x89') {
          setButtonText(accounts[0].toString().substring(0, 5)+"...."+accounts[0].toString().substring(37, 42));
          // buttonText
          setDisabled(true)
          onboarding.current.stopOnboarding();
        } else if(accounts.length > 0 ){
          setButtonText(WRONG_CONNECTED_TEXT);
          setDisabled(false);
        }
        else {
          setButtonText(CONNECT_TEXT);
          setDisabled(false);
        }
      }
    }, [accounts]);


    React.useEffect(() => {
      function handleNewAccounts(newAccounts) {
        apiFetch(newAccounts);
        setAccounts(newAccounts);
      }
      if (MetaMaskOnboarding.isMetaMaskInstalled()) {
        window.ethereum
          .request({ method: 'eth_requestAccounts' })
          .then(handleNewAccounts);
        window.ethereum.on('accountsChanged', handleNewAccounts);
        return () => {

        };
      }
    }, []);

  const handleClick = () => {
        if (MetaMaskOnboarding.isMetaMaskInstalled()) {
          window.ethereum
            .request({ method: 'eth_requestAccounts' })
            .then((newAccounts) =>
            {
              setAccounts(newAccounts);
              apiFetch(newAccounts);

            })
            .then(function switchNetwork() {
              window.ethereum
                .request({
                  method: 'wallet_addEthereumChain',
                  params:  [
                      {
                          "chainId": "0x89",
                          "chainName": "Matic Network",
                          "rpcUrls": [
                              "https://rpc-mainnet.maticvigil.com/"
                          ],
                          "iconUrls": [
                              "https://xdaichain.com/fake/example/url/xdai.svg",
                              "https://xdaichain.com/fake/example/url/xdai.png"
                          ],
                          "nativeCurrency": {
                              "name": "MATIC",
                              "symbol": "MATIC",
                              "decimals": 18
                          },
                          "blockExplorerUrls": [
                              "https://polygonscan.com/"
                          ]
                      }
                  ],
                })
                .then((result) => {
                  setNetworkId(0x89);
                  setButtonText(accounts[0].toString().substring(0, 5)+"...."+accounts[0].toString().substring(37, 42));
                  setDisabled(true);
                })
                .catch((error) => {
                  console.log(error);
                });
            }
            );
        } else {
          onboarding.current.startOnboarding();
        }
    };

    return (
      <div>
        <div className="total">
          <div className="button-container">
            <button disabled={isDisabled} className="toggle-button" onClick={handleClick}>
            {buttonText}
                </button>
          </div>
          <div className="total-container-1">
          {
            scores.length>0 &&
            <DegenReport sum ={totalsum} />
          }
            {
              scores.length>0 &&
            <DoughnutChart sum ={totalsum} scores={scores}/>
            }
            {
              scores.length>0 &&
            <Twitter sum ={totalsum}/>
            }
          </div>
          {
            fcontract.length> 0 &&   tcontract.length> 0 &&
          <DegenFactors fcontract = {fcontract} tcontract = {tcontract} />
         }
        {
          fcontract.length> 0 &&   tcontract.length> 0 &&
        <DegenFactors2 fcontract = {fcontract} tcontract = {tcontract} />
        }
          {
            scores.length>0 &&
          <CompleteAnalytics scores={scores}/>
        }
        </div>
      </div>
    );

}

export default Main;
