
/* global ethers hre */
/* eslint-disable  prefer-const */

const { LedgerSigner } = require('@ethersproject/hardware-wallets')

// const { aragonBatch1, aragonAddresses } = require('../../data/airdrops/aragon.tsx')

// const { snapshot1Addresses, snapshot1Batch1, snapshot1Batch2 } = require('../../data/airdrops/snapshot1.tsx')

// const { snapshot2Addresses, snapshot2Batch1, snapshot2Batch2 } = require('../../data/airdrops/snapshot2.tsx')

const addresses = [
  '0xcd6c1eef36ced2ec98ce4291d9ed32ffb9230ab7',
  '0xd07ee1049929e97680f7bb176721ea1e6114f42c',
  '0xa30412d6cd5d48b65df7134f2e31949c843ba13f',
  '0x5e31c357d03e9528e9bf95bd16e5c1ab3f7d37d0',
  '0x943366565694e06dc8eeb3ca7a75c33fcb8956b3',
  '0x94ae11a67abe03dff9e8d5d191f896b1a24fc53e',
  '0x7cbb2864da19a852f142b333443f35438e95ad86',
  '0x51208e5cc9215c6360210c48f81c8270637a5218',
  '0x835cf0294bebbb6129e2ca2d99f98a159ecab94e',
  '0x0bcdc503f78bff5dc7b867c6740226d9621117b1',
  '0x87cdacbec845896b11d449884b7430b89060bba5',
  '0x160fbd013c8821403f9f5f6868b6f50cda050be3',
  '0xc6291442efe2634306b31f24c8238a702fec85a0',
  '0x59b4063ea61307d53cfbddc2ba3f0c693e718a0f',
  '0x3c585952a5d9156da040b7561b296f4e56b5acbc',
  '0x3656460e9bec3e98451df75ce8f6cc6e1dff9bb7',
  '0x7fcc3b4a05826c14afafe6830f3511e9dde48171',
  '0xd9f0efd7af7d729969c1e9dfd6d4de73a25fe1ae',
  '0x4b3261dfcb21685f98189d9df857c7351370736d',
  '0x061b8335e1d2042975c4ed849943334bd07fb504',
  '0x7a601520558b1ca1d51dc253cb061268c5aa0d97',
  '0x4dc8d916c2ad694c15fc040c45288b2270826dbc',
  '0x333ffbdf76a0dce3c40ef58b2e5fc57893dcabc0',
  '0x5501b109a7cc3707a27d6438c6aa290e2b168ce4',
  '0x20ec02894d748c59c01b6bf08fe283d7bb75a5d2',
  '0x1745296f22889abcfff04f041621d880d3417633',
  '0x099ad3e193e311e89abda11bdd3c7aea88014221',
  '0x027ffd3c119567e85998f4e6b9c3d83d5702660c',
  '0x986f240a648d8f7b2ef80f24d7017c2e6c1d871d',
  '0xa7f1c77998bae58614be010ad2a806639e280056'
]

const data = {
  data: {
    users: [
      {
        gotchisOwned: [
          {
            id: '2575'
          }
        ],
        id: '0x027ffd3c119567e85998f4e6b9c3d83d5702660c'
      },
      {
        gotchisOwned: [
          {
            id: '9895'
          }
        ],
        id: '0x061b8335e1d2042975c4ed849943334bd07fb504'
      },
      {
        gotchisOwned: [
          {
            id: '2104'
          },
          {
            id: '4282'
          },
          {
            id: '4287'
          }
        ],
        id: '0x0bcdc503f78bff5dc7b867c6740226d9621117b1'
      },
      {
        gotchisOwned: [
          {
            id: '6413'
          },
          {
            id: '6418'
          },
          {
            id: '6419'
          },
          {
            id: '6420'
          },
          {
            id: '6421'
          },
          {
            id: '6422'
          },
          {
            id: '6424'
          },
          {
            id: '6428'
          },
          {
            id: '6431'
          },
          {
            id: '6434'
          },
          {
            id: '6435'
          },
          {
            id: '7119'
          },
          {
            id: '7124'
          },
          {
            id: '7129'
          }
        ],
        id: '0x160fbd013c8821403f9f5f6868b6f50cda050be3'
      },
      {
        gotchisOwned: [
          {
            id: '3279'
          }
        ],
        id: '0x1745296f22889abcfff04f041621d880d3417633'
      },
      {
        gotchisOwned: [
          {
            id: '2529'
          },
          {
            id: '2839'
          },
          {
            id: '2840'
          },
          {
            id: '2841'
          },
          {
            id: '2842'
          },
          {
            id: '2843'
          },
          {
            id: '2844'
          },
          {
            id: '2845'
          },
          {
            id: '2846'
          },
          {
            id: '2847'
          },
          {
            id: '2849'
          },
          {
            id: '2850'
          },
          {
            id: '2853'
          },
          {
            id: '3012'
          },
          {
            id: '3357'
          },
          {
            id: '3513'
          },
          {
            id: '3724'
          },
          {
            id: '4795'
          },
          {
            id: '6454'
          },
          {
            id: '8562'
          },
          {
            id: '8797'
          },
          {
            id: '9398'
          }
        ],
        id: '0x20ec02894d748c59c01b6bf08fe283d7bb75a5d2'
      },
      {
        gotchisOwned: [
          {
            id: '2723'
          },
          {
            id: '8153'
          }
        ],
        id: '0x333ffbdf76a0dce3c40ef58b2e5fc57893dcabc0'
      },
      {
        gotchisOwned: [
          {
            id: '5980'
          },
          {
            id: '5984'
          }
        ],
        id: '0x3656460e9bec3e98451df75ce8f6cc6e1dff9bb7'
      },
      {
        gotchisOwned: [],
        id: '0x4b3261dfcb21685f98189d9df857c7351370736d'
      },
      {
        gotchisOwned: [
          {
            id: '4995'
          }
        ],
        id: '0x4dc8d916c2ad694c15fc040c45288b2270826dbc'
      },
      {
        gotchisOwned: [
          {
            id: '4523'
          },
          {
            id: '4627'
          },
          {
            id: '4628'
          },
          {
            id: '4630'
          },
          {
            id: '7622'
          },
          {
            id: '7938'
          },
          {
            id: '8518'
          }
        ],
        id: '0x51208e5cc9215c6360210c48f81c8270637a5218'
      },
      {
        gotchisOwned: [],
        id: '0x5501b109a7cc3707a27d6438c6aa290e2b168ce4'
      },
      {
        gotchisOwned: [
          {
            id: '7395'
          },
          {
            id: '7396'
          },
          {
            id: '7397'
          },
          {
            id: '7399'
          }
        ],
        id: '0x59b4063ea61307d53cfbddc2ba3f0c693e718a0f'
      },
      {
        gotchisOwned: [
          {
            id: '4563'
          },
          {
            id: '9682'
          }
        ],
        id: '0x5e31c357d03e9528e9bf95bd16e5c1ab3f7d37d0'
      },
      {
        gotchisOwned: [
          {
            id: '3540'
          }
        ],
        id: '0x7a601520558b1ca1d51dc253cb061268c5aa0d97'
      },
      {
        gotchisOwned: [
          {
            id: '1685'
          },
          {
            id: '9356'
          }
        ],
        id: '0x7fcc3b4a05826c14afafe6830f3511e9dde48171'
      },
      {
        gotchisOwned: [
          {
            id: '192'
          },
          {
            id: '4061'
          },
          {
            id: '5276'
          },
          {
            id: '6318'
          },
          {
            id: '8692'
          }
        ],
        id: '0x87cdacbec845896b11d449884b7430b89060bba5'
      },
      {
        gotchisOwned: [
          {
            id: '2539'
          },
          {
            id: '2540'
          },
          {
            id: '2541'
          },
          {
            id: '2542'
          },
          {
            id: '2543'
          },
          {
            id: '6520'
          },
          {
            id: '6521'
          },
          {
            id: '6522'
          },
          {
            id: '6523'
          }
        ],
        id: '0x943366565694e06dc8eeb3ca7a75c33fcb8956b3'
      },
      {
        gotchisOwned: [
          {
            id: '9500'
          }
        ],
        id: '0x94ae11a67abe03dff9e8d5d191f896b1a24fc53e'
      },
      {
        gotchisOwned: [
          {
            id: '1306'
          },
          {
            id: '1549'
          },
          {
            id: '4479'
          },
          {
            id: '8062'
          },
          {
            id: '9106'
          }
        ],
        id: '0x986f240a648d8f7b2ef80f24d7017c2e6c1d871d'
      },
      {
        gotchisOwned: [
          {
            id: '2613'
          },
          {
            id: '2798'
          },
          {
            id: '3026'
          },
          {
            id: '4728'
          },
          {
            id: '7601'
          },
          {
            id: '7672'
          }
        ],
        id: '0xa30412d6cd5d48b65df7134f2e31949c843ba13f'
      },
      {
        gotchisOwned: [
          {
            id: '5495'
          },
          {
            id: '5496'
          }
        ],
        id: '0xa7f1c77998bae58614be010ad2a806639e280056'
      },
      {
        gotchisOwned: [
          {
            id: '6268'
          }
        ],
        id: '0xc6291442efe2634306b31f24c8238a702fec85a0'
      },
      {
        gotchisOwned: [
          {
            id: '1850'
          }
        ],
        id: '0xcd6c1eef36ced2ec98ce4291d9ed32ffb9230ab7'
      },
      {
        gotchisOwned: [
          {
            id: '1877'
          },
          {
            id: '2524'
          },
          {
            id: '3398'
          },
          {
            id: '5205'
          },
          {
            id: '7871'
          },
          {
            id: '8240'
          }
        ],
        id: '0xd07ee1049929e97680f7bb176721ea1e6114f42c'
      },
      {
        gotchisOwned: [],
        id: '0xd9f0efd7af7d729969c1e9dfd6d4de73a25fe1ae'
      }
    ]
  }
}

const xpPerGotchi = 500

async function main () {
  const diamondAddress = '0x86935F11C86623deC8a25696E1C19a8659CbF95d'
  let ownershipFacet
  const owner = await (await ethers.getContractAt('OwnershipFacet', diamondAddress)).owner()
  console.log(owner)
  let signer
  const accounts = await ethers.getSigners()
  const devAccount = await accounts[0].getAddress()
  const testing = ['hardhat', 'localhost'].includes(hre.network.name)
  if (testing) {
    await hre.network.provider.request({
      method: 'hardhat_impersonateAccount',
      params: [owner]
    })
    signer = await ethers.provider.getSigner(owner)
  } else if (hre.network.name === 'matic') {
    signer = new LedgerSigner(ethers.provider)
  } else {
    throw Error('Incorrect network selected')
  }
  // ownershipFacet = (await ethers.getContractAt('OwnershipFacet', diamondAddress)).connect(signer)
  // const tx = await ownershipFacet.transferOwnership(devAccount)
  // const receipt = await tx.wait()
  // if (!receipt.status) {
  //   throw Error(`Error:: ${tx.hash}`)
  // }

  // complete!
  // Airdrop 1: Aragon
  // const addresses = aragonAddresses
  // const data = aragonBatch1
  // const xpPerGotchi = 250

  // complete!
  // Airdrop 2: Snapshot 1 Batch 1
  // const addresses = snapshot1Addresses
  // const data = snapshot1Batch1
  // const xpPerGotchi = 20

  // complete!
  // Airdrop 3: Snapshot 1 Batch 2
  // const addresses = snapshot1Addresses
  // const data = snapshot1Batch2
  // const xpPerGotchi = 20

  // complete!
  // Airdrop 4: Snapshot 2 Batch 1
  // const addresses = snapshot2Addresses
  // const data = snapshot2Batch1
  // const xpPerGotchi = 20

  // complete!
  // Airdrop 5: Snapshot 2 Batch 2
  // const addresses = snapshot2Addresses
  // const data = snapshot2Batch2
  // const xpPerGotchi = 20

  console.log('address length:', addresses.length)
  console.log('users length:', data.data.users.length)

  /* PARAMS */

  const dao = (await ethers.getContractAt('DAOFacet', diamondAddress)).connect(signer)
  // let start = false

  for (let index = 0; index < addresses.length; index++) {
    const ownerAddress = addresses[index]

    // if (ownerAddress === '0x491895e540a3c46d4596482824183bf11d527868') {
    //   start = true
    //   continue
    // }
    // if (start === false) {
    //   continue
    // }

    const found = data.data.users.find((obj) => {
      return obj.id.toLowerCase() === ownerAddress.toLowerCase()
    })

    const tokenIDs = []
    const xp = []

    if (found) {
      found.gotchisOwned.forEach((gotchi) => {
        tokenIDs.push(gotchi.id)
        xp.push(xpPerGotchi)
      })

      if (tokenIDs.length > 0) {
        const tx = await dao.grantExperience(tokenIDs, xp, { gasLimit: 15000000 })
        let receipt = await tx.wait()
        if (!receipt.status) {
          throw Error(`Error:: ${tx.hash}`)
        }

        console.log(`${index} | ${xpPerGotchi} Experience granted to ${tokenIDs.length} Aavegotchis owned by ${addresses[index]}. TXID: ${tx.hash}`)
      }
    }
  }
  // if (testing === false) {
  //   console.log('Transferring ownership of diamond:', diamondAddress, 'to', owner)
  //   ownershipFacet = await ethers.getContractAt('OwnershipFacet', diamondAddress)
  //   const tx = await ownershipFacet.transferOwnership(owner)
  //   const receipt = await tx.wait()
  //   if (!receipt.status) {
  //     throw Error(`Error: ${tx.hash}`)
  //   }
  //   console.log('Transfer complete')
  // }
}

//  });
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })
