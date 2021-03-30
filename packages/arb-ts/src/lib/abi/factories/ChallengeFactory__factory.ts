/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import { Contract, ContractFactory, Overrides } from '@ethersproject/contracts'

import type { ChallengeFactory } from '../ChallengeFactory'

export class ChallengeFactory__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(
    _executors: string[],
    overrides?: Overrides
  ): Promise<ChallengeFactory> {
    return super.deploy(
      _executors,
      overrides || {}
    ) as Promise<ChallengeFactory>
  }
  getDeployTransaction(
    _executors: string[],
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_executors, overrides || {})
  }
  attach(address: string): ChallengeFactory {
    return super.attach(address) as ChallengeFactory
  }
  connect(signer: Signer): ChallengeFactory__factory {
    return super.connect(signer) as ChallengeFactory__factory
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ChallengeFactory {
    return new Contract(address, _abi, signerOrProvider) as ChallengeFactory
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: 'contract IOneStepProof[]',
        name: '_executors',
        type: 'address[]',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'challengeTemplate',
    outputs: [
      {
        internalType: 'contract ICloneable',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_resultReceiver',
        type: 'address',
      },
      {
        internalType: 'bytes32',
        name: '_executionHash',
        type: 'bytes32',
      },
      {
        internalType: 'uint256',
        name: '_maxMessageCount',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_asserter',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_challenger',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_asserterTimeLeft',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_challengerTimeLeft',
        type: 'uint256',
      },
      {
        internalType: 'contract IBridge',
        name: '_bridge',
        type: 'address',
      },
    ],
    name: 'createChallenge',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'executors',
    outputs: [
      {
        internalType: 'contract IOneStepProof',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
]

const _bytecode =
  '0x608060405234801561001057600080fd5b506040516125d63803806125d68339818101604052602081101561003357600080fd5b810190808051604051939291908464010000000082111561005357600080fd5b90830190602082018581111561006857600080fd5b825186602082028301116401000000008211171561008557600080fd5b82525081516020918201928201910280838360005b838110156100b257818101518382015260200161009a565b505050509050016040525050506040516100cb90610122565b604051809103906000f0801580156100e7573d6000803e3d6000fd5b50600080546001600160a01b0319166001600160a01b0392909216919091179055805161011b90600190602084019061012f565b50506101bb565b611f9d8061063983390190565b828054828255906000526020600020908101928215610184579160200282015b8281111561018457825182546001600160a01b0319166001600160a01b0390911617825560209092019160019091019061014f565b50610190929150610194565b5090565b6101b891905b808211156101905780546001600160a01b031916815560010161019a565b90565b61046f806101ca6000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806356a44dbb14610046578063777367c9146100b9578063f97a05df146100c1575b600080fd5b61009d600480360361010081101561005d57600080fd5b506001600160a01b0381358116916020810135916040820135916060810135821691608082013581169160a08101359160c08201359160e00135166100de565b604080516001600160a01b039092168252519081900360200190f35b61009d610235565b61009d600480360360208110156100d757600080fd5b5035610244565b6000805481906100f6906001600160a01b031661026b565b9050806001600160a01b03166332f8c24f60018c8c8c8c8c8c8c8c6040518a63ffffffff1660e01b815260040180806020018a6001600160a01b03166001600160a01b03168152602001898152602001888152602001876001600160a01b03166001600160a01b03168152602001866001600160a01b03166001600160a01b03168152602001858152602001848152602001836001600160a01b03166001600160a01b0316815260200182810382528b81815481526020019150805480156101e757602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116101c9575b50509a5050505050505050505050600060405180830381600087803b15801561020f57600080fd5b505af1158015610223573d6000803e3d6000fd5b50929c9b505050505050505050505050565b6000546001600160a01b031681565b6001818154811061025157fe5b6000918252602090912001546001600160a01b0316905081565b6000816001600160a01b0316636f791d296040518163ffffffff1660e01b815260040160206040518083038186803b1580156102a657600080fd5b505afa1580156102ba573d6000803e3d6000fd5b505050506040513d60208110156102d057600080fd5b505160408051808201909152600c81526b21a627a722afa6a0a9aa22a960a11b60208201529061037e5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561034357818101518382015260200161032b565b50505050905090810190601f1680156103705780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50610391826001600160a01b0316610397565b92915050565b6000604051733d602d80600a3d3981f3363d3d373d3d3d363d7360601b81528260601b60148201526e5af43d82803e903d91602b57fd5bf360881b60288201526037816000f09150506001600160a01b038116610434576040805162461bcd60e51b8152602060048201526016602482015275115490cc4c4d8dce8818dc99585d194819985a5b195960521b604482015290519081900360640190fd5b91905056fea26469706673582212201d4e78df7d0cab84a6c075474397a3a12394b29829fd2fcbf5de7c4344c0331964736f6c634300060b0033608060405234801561001057600080fd5b506000805460ff19166001179055611f708061002d6000396000f3fe608060405234801561001057600080fd5b50600436106100eb5760003560e01c80638e7b84c5116100925780638e7b84c514610238578063925f9a961461031b5780639a9e4f4414610323578063bb4af0b11461032b578063deda411514610333578063e08f819e146103bf578063e78cea9214610596578063e87e35891461059e578063f97a05df146105a6576100eb565b806332f8c24f146100f057806341e8510c1461019a578063534db0e2146101b45780636f791d29146101d857806370dea79a146101f4578063843d5a5c146101fc5780638a8cd218146102045780638b2999031461020c575b600080fd5b610198600480360361012081101561010757600080fd5b810190602081018135600160201b81111561012157600080fd5b82018360208201111561013357600080fd5b803590602001918460208302840111600160201b8311171561015457600080fd5b91935091506001600160a01b0381358116916020810135916040820135916060810135821691608082013581169160a08101359160c08201359160e00135166105c3565b005b6101a261073b565b60408051918252519081900360200190f35b6101bc610741565b604080516001600160a01b039092168252519081900360200190f35b6101e0610750565b604080519115158252519081900360200190f35b61019861075a565b6101a2610876565b6101bc61087c565b61021461090b565b6040518082600281111561022457fe5b60ff16815260200191505060405180910390f35b610198600480360361010081101561024f57600080fd5b810190602081018135600160201b81111561026957600080fd5b82018360208201111561027b57600080fd5b803590602001918460208302840111600160201b8311171561029c57600080fd5b9193909282359260208101359260408201359260608301359260808101359260a082013592909160e081019060c00135600160201b8111156102dd57600080fd5b8201836020820111156102ef57600080fd5b803590602001918460208302840111600160201b8311171561031057600080fd5b509092509050610914565b6101a2610dd2565b6101a2610dd8565b6101bc610dde565b610198600480360360e081101561034957600080fd5b810190602081018135600160201b81111561036357600080fd5b82018360208201111561037557600080fd5b803590602001918460208302840111600160201b8311171561039657600080fd5b919350915080359060208101359060408101359060608101359060808101359060a00135610ded565b61019860048036036101c08110156103d657600080fd5b810190602081018135600160201b8111156103f057600080fd5b82018360208201111561040257600080fd5b803590602001918460208302840111600160201b8311171561042357600080fd5b6040805160608181018352949693958335956020850135959385013594818101359460808201359460a08301359460c084013594929390926101408201929160e00190600390839083908082843760009201919091525091949392602081019250359050600160201b81111561049857600080fd5b8201836020820111156104aa57600080fd5b803590602001918460018302840111600160201b831117156104cb57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295949360208101935035915050600160201b81111561051d57600080fd5b82018360208201111561052f57600080fd5b803590602001918460018302840111600160201b8311171561055057600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295505050903560ff1691506110749050565b6101bc6115d3565b6101a26115e2565b6101bc600480360360208110156105bc57600080fd5b5035611628565b6000600a5460ff1660028111156105d657fe5b146040518060400160405280600f81526020016e4348414c5f494e49545f535441544560881b815250906106885760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561064d578181015183820152602001610635565b50505050905090810190601f16801561067a5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5061069560018b8b611e95565b50600380546001600160a01b038a81166001600160a01b0319928316179092556004889055600580548884169083161790556006805487841690831617905560088590556009849055600a8054600260ff199091168117909155600b8a90554360075580549091169183169190911790556040517f7003482dc89fcecb9f14e280f21ee716bd54187f7f3b0ab5ed78f3648218f2de90600090a150505050505050505050565b60095481565b6006546001600160a01b031681565b60005460ff165b90565b60006107716007544361164f90919063ffffffff16565b905061077b6115e2565b81116040518060400160405280601081526020016f54494d454f55545f444541444c494e4560801b815250906107f25760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561064d578181015183820152602001610635565b506001600a5460ff16600281111561080657fe5b1415610842576040517f2b92a4b014281aa2424baba9ea60bf4f26833d1c1fbd873e51cd1a6caeef48f090600090a161083d611691565b610873565b6040517f4e1f1f06cf69d199fcdb4d87a5a92d5248ca6b540e9fc2d3698927c5002a236a90600090a161087361170f565b50565b600b5481565b60006001600a5460ff16600281111561089157fe5b14156108a957506005546001600160a01b0316610757565b6002600a5460ff1660028111156108bc57fe5b14156108d457506006546001600160a01b0316610757565b6040805162461bcd60e51b81526020600482015260076024820152662727afaa2aa92760c91b604482015290519081900360640190fd5b600a5460ff1681565b61091c61087c565b6001600160a01b0316336001600160a01b0316146040518060400160405280600a8152602001692124a9afa9a2a72222a960b11b8152509061099f5760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561064d578181015183820152602001610635565b506109a86115e2565b6007546109bc90439063ffffffff61164f16565b11156040518060400160405280600c81526020016b4249535f444541444c494e4560a01b81525090610a2f5760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561064d578181015183820152602001610635565b50600082826000198101818110610a4257fe5b9050602002013514610a8f5760018611610a8f576040805162461bcd60e51b81526020600482015260096024820152681513d3d7d4d213d49560ba1b604482015290519081900360640190fd5b610a9b8661019061176a565b6001018114610add576040805162461bcd60e51b815260206004820152600960248201526810d55517d0d3d5539560ba1b604482015290519081900360640190fd5b8482826000198101818110610aee57fe5b905060200201351415610b33576040805162461bcd60e51b815260206004820152600860248201526714d0535157d1539160c21b604482015290519081900360640190fd5b610b3d8484611782565b82826000818110610b4a57fe5b9050602002013514610b98576040805162461bcd60e51b81526020600482015260126024820152717365676d656e74207072652d6669656c647360701b604482015290519081900360640190fd5b600082828281610ba457fe5b905060200201351415610bf2576040805162461bcd60e51b8152602060048201526011602482015270155394915050d21050931157d4d5105495607a1b604482015290519081900360640190fd5b610c02878763ffffffff6117ae16565b8410610c4e576040805162461bcd60e51b81526020600482015260166024820152750d2dcecc2d8d2c840e6cacedacadce840d8cadccee8d60531b604482015290519081900360640190fd5b6000610c6f888885856000818110610c6257fe5b90506020020135896117fc565b9050610c7d818c8c8c61183a565b610cbd8383808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152508c92508b91506118f29050565b50600b547f0a2bdfea671da507e80b0cbae49dd25100a5bdacc5dff43a9163a3fcbd7c3c7d8989868660405180858152602001848152602001806020018281038252848482818152602001925060200280828437600083820152604051601f909101601f191690920182900397509095505050505050a2506002600a5460ff166002811115610d4857fe5b1415610d8a57610d75610d666007544361164f90919063ffffffff16565b6009549063ffffffff61164f16565b600955600a805460ff19166001179055610dc2565b610db1610da26007544361164f90919063ffffffff16565b6008549063ffffffff61164f16565b600855600a805460ff191660021790555b5050436007555050505050505050565b60075481565b60085481565b6005546001600160a01b031681565b610df561087c565b6001600160a01b0316336001600160a01b0316146040518060400160405280600a8152602001692124a9afa9a2a72222a960b11b81525090610e785760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561064d578181015183820152602001610635565b50610e816115e2565b600754610e9590439063ffffffff61164f16565b11156040518060400160405280600c81526020016b4249535f444541444c494e4560a01b81525090610f085760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561064d578181015183820152602001610635565b506000610f158383611782565b90506000610f25878784886117fc565b9050610f33818b8b8b61183a565b610f43878763ffffffff6117ae16565b841015610f82576040805162461bcd60e51b81526020600482015260086024820152671393d517d0d3d39560c21b604482015290519081900360640190fd5b84821415610fc3576040805162461bcd60e51b815260206004820152600960248201526815d493d391d7d1539160ba1b604482015290519081900360640190fd5b6040517ff62bb8ab32072c0ea3337f57276b8e66418eca0dfcc5e3b8aef4905d43e8f8ca90600090a1610ff4611a3b565b5060029050600a5460ff16600281111561100a57fe5b141561103d57611028610d666007544361164f90919063ffffffff16565b600955600a805460ff19166001179055611066565b611055610da26007544361164f90919063ffffffff16565b600855600a805460ff191660021790555b505043600755505050505050565b61107c61087c565b6001600160a01b0316336001600160a01b0316146040518060400160405280600a8152602001692124a9afa9a2a72222a960b11b815250906110ff5760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561064d578181015183820152602001610635565b506111086115e2565b60075461111c90439063ffffffff61164f16565b11156040518060400160405280600c81526020016b4249535f444541444c494e4560a01b8152509061118f5760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561064d578181015183820152602001610635565b50600080600061119d611ef8565b60018560ff16815481106111ad57fe5b9060005260206000200160009054906101000a90046001600160a01b03166001600160a01b0316639d16dd04600260009054906101000a90046001600160a01b03168d60405180604001604052808f81526020018e8152508b8b6040518663ffffffff1660e01b815260040180866001600160a01b03166001600160a01b0316815260200185815260200184600260200280838360005b8381101561125c578181015183820152602001611244565b505050509050018060200180602001838103835285818151815260200191508051906020019080838360005b838110156112a0578181015183820152602001611288565b50505050905090810190601f1680156112cd5780820380516001836020036101000a031916815260200191505b50838103825284518152845160209182019186019080838360005b838110156113005781810151838201526020016112e8565b50505050905090810190601f16801561132d5780820380516001836020036101000a031916815260200191505b5097505050505050505060c06040518083038186803b15801561134f57600080fd5b505afa158015611363573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525060c081101561138857600080fd5b50805160208201516004549195509350604090910191508211156113e7576040805162461bcd60e51b8152602060048201526011602482015270544f4f5f4d414e595f4d4553534147455360781b604482015290519081900360640190fd5b6113f78e8e63ffffffff6117ae16565b885110611436576040805162461bcd60e51b815260206004820152600860248201526713d4d417d0d3d39560c21b604482015290519081900360640190fd5b6114468e8e63ffffffff6117ae16565b61146967ffffffffffffffff85168a60005b60200201519063ffffffff6117ae16565b10156114a8576040805162461bcd60e51b815260206004820152600960248201526813d4d417d4d213d49560ba1b604482015290519081900360640190fd5b6114b68a8a8a868686611a69565b8c14156114f6576040805162461bcd60e51b815260206004820152600960248201526815d493d391d7d1539160ba1b604482015290519081900360640190fd5b61150e8e8e6115088e8e8e8e88611aeb565b8f6117fc565b935050505061151f818f8f8f61183a565b6040517f117efdf1fdd8be5a6ff0fb3c32333d7033bbd9523924bd0d9ca28f43540516f590600090a1611550611a3b565b506002600a5460ff16600281111561156457fe5b141561159757611582610d666007544361164f90919063ffffffff16565b600955600a805460ff191660011790556115c0565b6115af610da26007544361164f90919063ffffffff16565b600855600a805460ff191660021790555b5050436007555050505050505050505050565b6002546001600160a01b031681565b60006001600a5460ff1660028111156115f757fe5b14156116065750600854610757565b6002600a5460ff16600281111561161957fe5b14156108d45750600954610757565b6001818154811061163557fe5b6000918252602090912001546001600160a01b0316905081565b60006116888383604051806040016040528060148152602001737375627472616374696f6e206f766572666c6f7760601b815250611b1c565b90505b92915050565b60035460065460055460408051637d3c01f360e11b81526001600160a01b039384166004820152918316602483015251919092169163fa7803e691604480830192600092919082900301818387803b1580156116ec57600080fd5b505af1158015611700573d6000803e3d6000fd5b5050505061170d33611b76565b565b60035460055460065460408051637d3c01f360e11b81526001600160a01b039384166004820152918316602483015251919092169163fa7803e691604480830192600092919082900301818387803b1580156116ec57600080fd5b60008183101561177b57508161168b565b508061168b565b604080516020808201949094528082019290925280518083038201815260609092019052805191012090565b600082820183811015611688576040805162461bcd60e51b81526020600482015260116024820152706164646974696f6e206f766572666c6f7760781b604482015290519081900360640190fd5b604080516020808201969096528082019490945260608401929092526080808401919091528151808403909101815260a09092019052805191012090565b61187a838380806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250859250889150611bf69050565b600b5414604051806040016040528060088152602001672124a9afa82922ab60c11b815250906118eb5760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561064d578181015183820152602001610635565b5050505050565b82516000906000190160608167ffffffffffffffff8111801561191457600080fd5b5060405190808252806020026020018201604052801561193e578160200160208202803683370190505b509050600061194d8584611cc4565b9050600086905061198881838a60008151811061196657fe5b60200260200101518b60018151811061197b57fe5b60200260200101516117fc565b8360008151811061199557fe5b60209081029190910101526119b0818363ffffffff6117ae16565b90506119bc8685611ce2565b915060015b84811015611a22576119f182848b84815181106119da57fe5b60200260200101518c856001018151811061197b57fe5b8482815181106119fd57fe5b6020908102919091010152611a18828463ffffffff6117ae16565b91506001016119c1565b50611a2c83611cf5565b600b5550929695505050505050565b6001600a5460ff166002811115611a4e57fe5b1415611a6157611a5c61170f565b61170d565b61170d611691565b6000611ae0611a8367ffffffffffffffff86168784611458565b60208401516040850151611adb918791611ab28d8214611aa4576001611aa7565b60005b60ff168c6001611458565b6060890151611ad68e8214611ac8576001611acb565b60005b60ff168e6002611458565b611e4a565b611782565b979650505050505050565b8151815160208401516040850151600093611b12939092611adb928b92918b918b90611e4a565b9695505050505050565b60008184841115611b6e5760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561064d578181015183820152602001610635565b505050900390565b6000546040805180820190915260098152684e4f545f434c4f4e4560b81b60208201529060ff1615611be95760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561064d578181015183820152602001610635565b50806001600160a01b0316ff5b8251600090610100811115611c0a57600080fd5b8260005b82811015611cba5760028606611c6757868181518110611c2a57fe5b6020026020010151826040516020018083815260200182815260200192505050604051602081830303815290604052805190602001209150611cac565b81878281518110611c7457fe5b602002602001015160405160200180838152602001828152602001925050506040516020818303038152906040528051906020012091505b600286049550600101611c0e565b5095945050505050565b6000818381611ccf57fe5b06828481611cd957fe5b04019392505050565b6000818381611ced57fe5b049392505050565b6000815b600181511115611e2d5760606002825160010181611d1357fe5b0467ffffffffffffffff81118015611d2a57600080fd5b50604051908082528060200260200182016040528015611d54578160200160208202803683370190505b50905060005b8151811015611e25578251816002026001011015611ded57828160020281518110611d8157fe5b6020026020010151838260020260010181518110611d9b57fe5b6020026020010151604051602001808381526020018281526020019250505060405160208183030381529060405280519060200120828281518110611ddc57fe5b602002602001018181525050611e1d565b828160020281518110611dfc57fe5b6020026020010151828281518110611e1057fe5b6020026020010181815250505b600101611d5a565b509050611cf9565b80600081518110611e3a57fe5b6020026020010151915050919050565b60408051602080820198909852808201969096526060860194909452608085019290925260a084015260c0808401919091528151808403909101815260e09092019052805191012090565b828054828255906000526020600020908101928215611ee8579160200282015b82811115611ee85781546001600160a01b0319166001600160a01b03843516178255602090920191600190910190611eb5565b50611ef4929150611f16565b5090565b60405180608001604052806004906020820280368337509192915050565b61075791905b80821115611ef45780546001600160a01b0319168155600101611f1c56fea264697066735822122008b6a22708094c1d04e2fa21c7b8fe2d93183904566180b03418d3bb07546cf864736f6c634300060b0033'