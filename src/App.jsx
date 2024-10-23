import cardImg from '../images/image-equilibrium.jpg'
import avatar from '../images/image-avatar.png'
import clock from '../images/icon-clock.svg'
import ethereum from '../images/icon-ethereum.svg'
import view from '../images/icon-view.svg'
import './App.css'

function App() {


  return (
    <>
      <div className='max-w-sm p-5 bg-cardBlue rounded-2xl flex flex-col items-start text-left drop-shadow-2xl'>
       <div className='cursor-pointer relative group transition-all'>
        <div className='group-hover:block hidden '>
          <img src={view} alt="view" className='z-1 absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4' />
        <div className='bg-cyan rounded-lg w-full h-full absolute opacity-40'>
        </div>
        </div>
       <img src={cardImg} alt="NFT" className='rounded-lg' />
       </div>
       <h1 className='text-2xl my-5 hover:text-cyan transition-all cursor-pointer'>Equilibrium #3429</h1>
       <p className='mb-5 text-softBlue text-lg'>Our Equilibrium collection promotes balance and calm.</p>
       <div className='flex w-full justify-between mb-5'>
        <div className='flex flex-row items-center'>
          <img src={ethereum} alt="ETH" />
          <p className='text-cyan pl-2'>0.041ETH</p>
        </div>
        <div className='flex items-center'>
          <img src={clock} alt="time" />
          <p className='text-softBlue pl-2'>3 days left</p>
        </div>
       </div>
       <hr className='w-full border-softBlue opacity-15' />
       <div className='mt-5 flex items-center'>
        <img src={avatar} alt="avatar" className='w-8 border-white border rounded-full mr-5'/>
        <p className='text-softBlue'>Creation of <strong className='text-white font-normal hover:text-cyan transition-all cursor-pointer'>Jules Wyvern</strong></p>
       </div>
      </div>
    </>
  )
}

export default App
