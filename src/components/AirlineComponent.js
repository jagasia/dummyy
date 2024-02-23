import { Component } from "react";
import AirlineService from "../services/AirlineService";

class AirlineComponent extends Component
{
    selectAirline(id)
    {
        alert('selecting airline '+id);
        AirlineService.findAirlineById(id).then((response)=>{
            alert(response.data.name);
        });
    }

    constructor(props)
    {
        super(props);

        this.state={airlines:[]};

       
    }

    componentDidMount()
    {
        console.log("Please wait");
        AirlineService.getAllAirlines().then((response)=>{
            this.setState({airlines:response.data});
            console.log(this.state.airlines);
        });
        
    }

    render()
    {
       
        return (<div>
            <table className="table table-bordered table-striped table-hover">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Logo</th>
                    <th>Country</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                    {                        
                        this.state.airlines.map(airline=>
                            <tr>
                                <td>{airline.id}</td>
                                <td>{airline.name}</td>
                                <td><img width={100} height="50" src={airline.logo} alt="nothing" /></td>
                                <td>{airline.country}</td>
                                <td>
                                    <input className="btn btn-info" type="button" onClick={()=>{
                                        this.selectAirline(airline.id)
                                    }} value="Select" />
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>);
    }
}

export default AirlineComponent;