import './App.css'
import capybara from './capybara.jpg'
import duck from './duck.jpg'

function Projects (){
    return (

        <div className="flex w-full">
           <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                    src={capybara}
                    alt="Capybara" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Project 1</h2>
                    <p>Project 1 Description</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">View Project</button>
                    </div>
                </div>
            </div>
            <div className="divider-horizontal"></div>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                    src={duck}
                    alt="Duck" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Project 2</h2>
                    <p>Project 2 Description</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">View Project</button>
                    </div>
                </div>
            </div>
        </div>
      
    )
  }
  
  export default Projects