// SPDX-License-Identifier: Apache-2.0

pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
contract PolyGenNFT is ERC721, Ownable {
  using Counters for Counters.Counter;
  using Strings for uint256;
  Counters.Counter private _tokenIds;
  string inch ="https://ipfs.io/ipfs/QmSGeAcs7pGtKv5YSJEVnMTU5Ti39vcHzfr5KU78AShNs6?filename=1inch.json";
  string aava ="https://ipfs.io/ipfs/QmbsSaZ4xC3otBcoHC3kkEcKK1FhXcsX97XU96UDnti8ef?filename=aava.json";
  string apeswap ="https://ipfs.io/ipfs/QmcqdFLvHtURSeKoejWhr7L7prVcXGFvPUNztAkxmtEqVb?filename=apeswap.json";
  string balancerpool ="https://ipfs.io/ipfs/QmP3qnNKhyH5G8ojau53WrLmgw9mYCAQmcaN4huutakR5N?filename=balancerpool.json";
  string beefyfinance ="https://ipfs.io/ipfs/Qmefh2e2dt8qmh2q9AgFh83Sacmi1sF6BYAurR4EtC3jWt?filename=beefyfinance.json";
  string dfyn ="https://ipfs.io/ipfs/QmbaWyCJYLLtYYuBuzvTSDv8CsYquETAE9S34TqjfzMg9U?filename=dfyn.json";
  string dmmkyber ="https://ipfs.io/ipfs/Qma7QT7qEPbJHHXPn8ue9CLEgSRYnKrUsppuyCGK9PW3xm?filename=dmmkyber.json";
  string empty ="https://ipfs.io/ipfs/QmbiGdjm2RjJxYrxq9yagb34bd1Pb3EshkGfYh6E5B99TB?filename=empty.json";
  string matcha ="https://ipfs.io/ipfs/QmYQ1zApEkP5hGBgtAHPfeAxEngRkZJeAr3tCWKUxWiaW6?filename=matcha.json";
  string pickle ="https://ipfs.io/ipfs/QmdtdzyRzznfTwiiTfqMiJDuVGdDGj5d7QGxgVY2km5aFz?filename=pickle.json";
  string quickswap ="https://ipfs.io/ipfs/QmcH2xDyeVuCFUzJK6eb58Utk3i2JmQBkFfVHeBmnRkLRt?filename=quickswap.json";
  string sushiswap ="https://ipfs.io/ipfs/QmbACPLph5FDVgxQXrx1MhG6jL68cfQHVG8ka6kLVnh9ig?filename=sushiswap.json";
  string unilend ="https://ipfs.io/ipfs/QmTS3QZ2iErmgssDFkhURgZM9ZdHup9uSKnZVsAjQF2Fv5?filename=unilend.json";
  mapping (uint256 => string) private _tokenURIs;

  constructor() ERC721("PolyGenNFT", "GENNFT") {}
  function _setTokenURI(uint256 tokenId, string memory _tokenURI)
    internal
    virtual
  {
    _tokenURIs[tokenId] = _tokenURI;
  }

  function tokenURI(uint256 tokenId)
    public
    view
    virtual
    override
    returns (string memory)
  {
    require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");
    string memory _tokenURI = _tokenURIs[tokenId];
    return _tokenURI;
  }

  function mint(address recipient,address _contract)
    public
    returns (uint256)
  {
      string memory uri =empty;
      if(_contract==0x11111112542D85B3EF69AE05771c2dCCff4fAa26)
      uri = inch;
      if(_contract==0xbEadf48d62aCC944a06EEaE0A9054A90E5A7dc97)
      uri = aava;
      if(_contract==0xC0788A3aD43d79aa53B09c2EaCc313A787d1d607)
      uri = apeswap;
      if(_contract==0xBA12222222228d8Ba445958a75a0704d566BF2C8)
      uri = balancerpool;
      if(_contract==0x8c9d3Bc4425773BD2F00C4a2aC105c5Ad73c8141)
      uri = beefyfinance;
      if(_contract==0xA102072A4C07F06EC3B4900FDC4C7B80b6c57429)
      uri = dfyn;
      if(_contract==0x546C79662E028B661dFB4767664d0273184E4dD1)
      uri = dmmkyber;
      if(_contract==0x0519848e57Ba0469AA5275283ec0712c91e20D8E)
      uri = pickle;
      if(_contract==0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff)
      uri = quickswap;
       if(_contract==0x0769fd68dFb93167989C6f7254cd0D766Fb2841F)
      uri = sushiswap;
      if(_contract==0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506)
      uri = sushiswap;
      if(_contract==0x13A145D215182924c89F2aBc7D358DCc72F8F788)
      uri = unilend;
    _tokenIds.increment();
    uint256 newItemId = _tokenIds.current();
    _mint(recipient, newItemId);
    _setTokenURI(newItemId, uri);
    return newItemId;
  }
}
