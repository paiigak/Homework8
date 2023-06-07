import './App.css'
import Navbar from './components/Navbar'
import Blog from './components/Blog'
import Pod from './components/Pod'

const navHead = ['About Us','Blog','Career','Contact Us ^']
const navFoot = ['About Us','Blog','Career','Contact Us ^']

const blogs = [
  {
    header: 'The DeFi Review by Arken Finance',
    description:
      'DeFi’s innovation cycle is hyper-fast. To find user insight or make critical business decisions, our team relies heavily on data. We compile our little insights into this publication, The DeFi Review.',
    tags: ['defi-review', 'web3', 'arken.finance'],
    author: 'Arken Finance',
    date: 'Nov 26th, 2022',
    readingTime: '3 min',
    url: 'https://blog.arken.finance/introducing-the-defi-review-by-arken-finance-da9e11581d50',
  },
  {
    header: 'Welcome to the World of Web 3.0',
    description:
      'Web 3.0, dubbed the next state for the internet, is being talked about more and more as the days go by. So what is it exactly?',
    tags: ['introduction', 'web3'],
    author: 'Aikdanai',
    date: 'Apr 26th, 2022',
    readingTime: '9 min',
    url: 'https://blogs.cleverse.com/welcome-to-the-world-of-web-3-0-d16b61235dc4',
  },
  {
    header: 'Solidity Made Easy with Hardhat',
    description: 'A walkthrough guide on how to use Hardhat to develop a smart contract with ease!',
    tags: ['hardhat', 'tutorial'],
    author: 'Aikdanai',
    date: 'Aug 5th, 2022',
    readingTime: '6 min',
    url: 'https://blogs.cleverse.com/solidity-made-easy-with-hardhat-91a6972362bb',
  },
  {
    header: 'Solving DApps Problem with Merkle drop',
    description:
      'When developing your DApp, would transaction fees be quite expensive? What do you decide between scaling, price, and security?',
    tags: ['smart contract', 'web3'],
    author: 'Nutchanon',
    date: 'Sep 27th, 2022',
    readingTime: '8 min',
    url: 'https://blogs.cleverse.com/solving-dapps-problem-with-merkle-drop-ff656adca942',
  },
]

const pods = [
  {
    header: 'The DeFi Review by Arken Finance',
    description:
      'DeFi’s innovation cycle is hyper-fast. To find user insight or make critical business decisions, our team relies heavily on data. We compile our little insights into this publication, The DeFi Review.',
    tags: ['defi-review', 'web3', 'arken.finance'],
    author: 'Arken Finance',
    date: 'Nov 26th, 2022',
    readingTime: '3 min',
    url: 'https://blog.arken.finance/introducing-the-defi-review-by-arken-finance-da9e11581d50',
  },
  {
    header: 'Welcome to the World of Web 3.0',
    description:
      'Web 3.0, dubbed the next state for the internet, is being talked about more and more as the days go by. So what is it exactly?',
    tags: ['introduction', 'web3'],
    author: 'Aikdanai',
    date: 'Apr 26th, 2022',
    readingTime: '9 min',
    url: 'https://blogs.cleverse.com/welcome-to-the-world-of-web-3-0-d16b61235dc4',
  },
]


function App() {
  return (
    <div className="App">
      <div className="Nav">
        <img className="w-24" src="https://p-u.popcdn.net/attachments/images/000/012/271/large/logo_cleverse.png?1538033995" alt="logo" />
        <div className="Nav-container">
        {navHead.map((nav,i) => {
          return <Navbar key={i} nav={nav} />
        })}
        <div>☀️</div>
        </div>
      </div>
      <div className="Blog">
        <h1 className='text-xl mt-8 ml-32 font-bold'>Blog</h1>
        <div className="Blog-container">
        {blogs.map((blog,i) => {
          return <Blog key={i} blog={blog} />
        })}
        </div>
      </div>
      <div className="Pod">
        <h1 className='mt-8 ml-32 text-xl font-bold'>Podcast & Video</h1>
        <div className="Pod-container">
        {pods.map((pod,i) => {
          return <Pod key={i} pod={pod} />
        })}
        </div>
      </div>
      <div className="Footer-container">
        {navFoot.map((nav,i) => {
          return <Navbar key={i} nav={nav} />
        })}
      </div>
    </div>
  );
}

export default App;
