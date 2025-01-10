import {logo} from '../assets'

const Hero = () => {
  return (
    <header className='w-full flex justify-center 
    items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt="sums_logo" className='w-28 object-contain'/>
        <button
          type='button'
          onClick={() => window.open('https://github.com/ErickRandria/')}
          className='black_btn'
        >
          Github
        </button>
      </nav>
      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden'/>
        <span className='orange_gradient'>
          OpenAI GPT-4
        </span>
      </h1>
      <h2 className='desc'>
        This is an open source AI application that summarises 
        your article. Just paste your article in the box section and 
        you will get a well-structured result. Thank you.
      </h2>

    </header>
  )
}

export default Hero