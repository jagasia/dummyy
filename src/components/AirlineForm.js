import { useState } from "react"

fn1()
{
    
}

export const AirlineForm=(props)=>
{
    const [id,setId]=useState("");
    const [name,setName]=useState("");
    const [logo,setLogo]=useState("");
    const [country,setCountry]=useState("");
    const [slogan,setSlogan]=useState("");
    const [website,setWebsite]=useState("");
    const [head_quaters,setHeadQuaters]=useState("");
    const [established,setEstablised]=useState("");

    return <div>
        <h2 className="text-center">Airline form</h2>
        {/* <form>
            Id: <input type="text" className="form-control" onChange={(event)=>setId(event.target.value)} />
            Name: <input type="text" className="form-control" onChange={(event)=>setName(event.target.value)} />
            Logo: <input type="text" className="form-control" onChange={(event)=>setLogo(event.target.value)} />
            Country: <input type="text" className="form-control" onChange={(event)=>setCountry(event.target.value)} />
            Slogan: <input type="text" className="form-control" onChange={(event)=>setSlogan(event.target.value)} />
            Website: <input type="text" className="form-control" onChange={(event)=>setWebsite(event.target.value)} />
            Head Quaters: <input type="text" className="form-control" onChange={(event)=>setHeadQuaters(event.target.value)} />
            Established: <input type="text" className="form-control" onChange={(event)=>setEstablised(event.target.value)} />
            <br/>
            <input type="button" className="btn btn-success" value="Add" onClick={alert('ok')}  />
        </form> */}
        
        <br/>
        <div>{id}</div>
        </div>
}