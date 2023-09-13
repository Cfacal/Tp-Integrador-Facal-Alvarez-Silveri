import React, {Component} from "react";
import Contenedor from "../../components/Contenedor/Contenedor"

class VerTodas extends Component{
    constructor(props){
      super(props);
      this.state = {
        canciones: false
      }
    }

    componentDidMount() {
        fetch()
            .then((res) => res.json())
            .then((data) =>
                this.setState({
                    canciones: data.results,
                }, () => console.log(data))
            )
            .catch((e) => console.log(e));
    }

    render(){
        return (
            <React.Fragment>
                <h1> Max</h1>
            
                <h3 className="h3">Canciones populares</h3>
                
                <Contenedor url = 'https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks?index=0&limit=5'/>
            </React.Fragment>
        )
    }
}

export default VerTodas;