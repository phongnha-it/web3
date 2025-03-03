// import { createAppKit } from '@reown/appkit/react'
// import { EthersAdapter } from '@reown/appkit-adapter-ethers'
// import { arbitrum, mainnet } from '@reown/appkit/networks'
import Test from './test';
// // 1. Get projectId
// const projectId = 'YOUR_PROJECT_ID'

// // 2. Set the networks
// const networks = [arbitrum, mainnet]

// // 3. Create a metadata object - optional
// const metadata = {
//   name: 'My Website',
//   description: 'My Website description',
//   url: 'https://mywebsite.com', // origin must match your domain & subdomain
//   icons: ['https://avatars.mywebsite.com/']
// }

// // 4. Create a AppKit instance
// createAppKit({
//   adapters: [new EthersAdapter()],
//   networks:[arbitrum, mainnet],
//   metadata,
//   projectId,
//   features: {
//     analytics: true // Optional - defaults to your Cloud configuration
//   }
// })

export default function App() {
  return <Test />
}