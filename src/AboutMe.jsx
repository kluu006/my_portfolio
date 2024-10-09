import './App.css'
import Headshot from './Headshot.jpg'
import ViaFerrata from './Via Ferrata.jpg'

function AboutMe (){
    return (

        <div>
            <div class="hero bg-base-200 min-h-28">
                <div class="hero-content flex-col lg:flex-row">
                    <img
                    src={Headshot}
                    class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-5xl font-bold">About me...</h1>
                        <p class="py-6">
                            I'm passionate about software quality assurance, development, and systems support, with a strong focus on automation. I enjoy ensuring smooth performance, building reliable solutions, and leveraging automation to keep systems running efficiently.
                        </p>
                    </div>
                </div>
            </div>
           <div class="hero bg-base-200 min-h-28">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img
                    src={ViaFerrata}
                    class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-5xl font-bold">On my free time...</h1>
                        <p class="py-6">
                            I love staying active through hiking, traveling, and working out. Exploring nature and new places keeps me energized and inspired!
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
      
    )
  }
  
  export default AboutMe