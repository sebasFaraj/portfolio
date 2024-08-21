import { Link } from 'react-router-dom';

export const Projects = () => {
    return (
        <div className = "projectWrapper">
            
            <div className = "projectContainer container-fluid">
                <div className = "row projectRow">

                    <div className = "col-lg-3 col-md-5 col-8 mb-5">
                        <div className = "card">
                            <img src = "/images/calculatorScreenshot.png" className="card-img-top" alt = "Calculator Screenshot"></img>
                            <div className = "card-body text-center">
                                <h5 className = "card-title">React Calculator</h5>
                                <p className = "card-text">This is a Calculator Component I made when learning React</p>
                                <Link to = "/calculator" className = "btn btn-primary">Go to Project</Link>
                            </div>
                        </div>
                    </div>

                    <div className = "col-lg-3 col-md-5 col-8 mb-5">
                        <div className = "card">
                            <img src = "/images/excuseScreenshot.png" className="card-img-top" alt = "...">
                            </img>
                            <div className = "card-body text-center">
                                <h5 className = "card-title">Excuse Generator</h5>
                                <p className = "card-text">A site that connects to an API to generate a random excuse</p>
                                <Link to = "/excuseGenerator" className = "btn btn-primary">Go to Project</Link>
                            </div>
                        </div>
                    </div>

                    <div className = "col-lg-3 col-md-5 col-8 mb-5">
                        <div className = "card">
                            <img src = "/images/todoScreenshot.png" className="card-img-top" alt = "...">
                            </img>
                            <div className = "card-body text-center">
                                <h5 className = "card-title">TODO List</h5>
                                <p className = "card-text">This is a Calculator Component I made when learning React</p>
                                <Link to = "/todolist" className = "btn btn-primary">Go to Project</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>



            
            
            
        </div>
    )
}