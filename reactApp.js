class Team extends React.Component {
    constructor(props) {
        super()

        this.state = {
            shotsTaken: 0,
            score: 0
        }
    }
    shotHandler = (event) => {
        let score = this.state.score

        if(Math.random() > 0.5) {
           score += 1
        }

        this.setState((state, props)=> ({
            shotsTaken: state.shotsTaken +1,
            score
        }))
        

    }


    render() {
        return (
            <div className="Team">
                <h2>{this.props.name}</h2>
                <div className="identity">
                    <img src={this.props.logo} alt={this.props.name}/>
                </div>
                <div>
                    <strong>Shots</strong>  {this.state.shotsTaken}
                </div>
                <div>
                    <strong>Score: </strong> {this.state.score}
                </div>

                <button onClick={this.shotHandler}>Shoot!</button>
            </div>
        )
    }
}


function App (props) {
    return (
        <div>
            <div className="stats">
                <Team 
                    name="Phakhailathavongs" 
                    logo="assets\images\phakhailathavong-team.jpg"
                />
                <div className="versus">
                    <h1>VS</h1>
                </div>
                <Team 
                    name="Jacob" 
                    logo="assets\images\pretty.jpg" 
                />
            </div>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)