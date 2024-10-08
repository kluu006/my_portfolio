import './App.css'
import capybara from './capybara.jpg'


function Home (){
    return (

        <div>
            <h1 className="text-3xl font-bold underline">
            Hi, I'm Kenny | Software Engineer
            </h1>
            <div className="chat chat-start">
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                <img
                    alt="Tailwind CSS chat bubble component"
                    src={capybara} />
                </div>
            </div>
            <div className="chat-bubble chat-bubble-primary">I love automating all the things.</div>
            </div>
            <div className="chat chat-start">
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                <img
                    alt="Tailwind CSS chat bubble component"
                    src={capybara} />
                </div>
            </div>
            <div className="chat-bubble chat-bubble-primary">Currently dabbling in the cloud, specifically AWS!</div>
            </div>
            <div className="chat chat-start">
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                <img
                    alt="Tailwind CSS chat bubble component"
                    src={capybara} />
                </div>
            </div>
            <div className="chat-bubble chat-bubble-primary">Otherwise expect to find me traveling the world and going on hikes!</div>
            </div>

        </div>
      
    )
  }
  
  export default Home