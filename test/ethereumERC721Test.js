/* global describe it before ethers */
/* eslint-disable  prefer-const */

const { expect } = require('chai')

const { itemTypes } = require('../scripts/raffle4ItemTypes.js')

describe('Test Raffle4', function () {
  const diamondAddress = '0x6c1fc89903d13EA41a5571751aD21973dB45c9e7'

  let itemsFacet
  let svgFacet
  let raffleContract
  let aavegotchiContract

  before(async function () {
    aavegotchiContract = await ethers.getContractAt('contracts/Ethereum/facets/AavegotchiFacet.sol:AavegotchiFacet',diamondAddress)
 
  })
  it('Test metadata', async function () {
    let totalSupply = await aavegotchiContract.totalSupply()
    console.log('total supply:',totalSupply.toString())
    const symbol = await aavegotchiContract.symbol()
    expect(symbol).to.equal("GOTCHI")
    const name = await aavegotchiContract.name()
    expect(name).to.equal("Aavegotchi")
    const tokenURI = await aavegotchiContract.tokenURI("0")
    expect(tokenURI).to.equal("https://aavegotchi.com/metadata/aavegotchis/0")
  })
  it('Test Aavegotchi balances', async function () {
    let testAccount = "0x94cb5C277FCC64C274Bd30847f0821077B231022"
    let bals = await aavegotchiContract.tokenIdsOfOwner(testAccount)
    console.log('bals:',bals)
    let balanceOf = await aavegotchiContract.balanceOf(testAccount)
    console.log('balance of:',balanceOf.toString())
    expect(bals.length).to.equal(balanceOf)

     testAccount = "0x027Ffd3c119567e85998f4E6B9c3d83D5702660c"
     bals = await aavegotchiContract.tokenIdsOfOwner(testAccount)
    console.log('bals:',bals)
     balanceOf = await aavegotchiContract.balanceOf(testAccount)
     expect(bals.length).to.equal(balanceOf)
  })

  it('Test owner of', async function () {
    let ownerAccount = "0x027Ffd3c119567e85998f4E6B9c3d83D5702660c"
    let ownerOf = await aavegotchiContract.ownerOf("0")
    console.log('owner of:',ownerOf)
    expect(ownerOf).to.equal(ownerAccount)
  })
  it('Test safeTransferFrom', async function () {

    //Impersonate from account
    let fromAccount = "0x94cb5C277FCC64C274Bd30847f0821077B231022"
    await hre.network.provider.request({
      method: 'hardhat_impersonateAccount',
      params: [fromAccount]
    })
    signer = await ethers.provider.getSigner(fromAccount)

    let signedAavegotchiContract = await aavegotchiContract.connect(signer)
   
    let toAccount = "0x027Ffd3c119567e85998f4E6B9c3d83D5702660c"
    let id = "66"
    await signedAavegotchiContract['safeTransferFrom(address,address,uint256)'](fromAccount,toAccount,id)

    //Check received
   let balanceOfFrom = await aavegotchiContract.balanceOf(fromAccount)
   console.log('balance of from:',balanceOfFrom.toString())
   expect (balanceOfFrom).to.equal(5)
   let balanceOfTo = await aavegotchiContract.balanceOf(toAccount)
   console.log('balance of to:',balanceOfTo.toString())
   expect(balanceOfTo).to.equal(2)

  })

  it('Test approval and safeTransferFrom', async function() {

  })
 
})
