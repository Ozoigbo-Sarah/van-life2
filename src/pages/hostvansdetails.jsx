
import { useParams, Link , Outlet, NavLink, useLoaderData} from "react-router-dom"
import { useEffect, useState } from "react"
import { getHostVans } from "../Api";
import { requireAuth } from "../utils";



export async function Loader({params, request}){
    await requireAuth(request);
    return getHostVans(params.id);
}

export default function HostVanDetail() {

const van= useLoaderData();

   const activeStyle = {
    fontWeight: "bold",
    borderBottom: "2px solid black",
    color: "#161616"
  };

 //const { id } = useParams()
    //const [van, setVan] = useState(null)

   /* useEffect(() => {
        fetch(`/api/host/vans/${id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [id])*/

    if (!van) return <h2>Loading...</h2>


    return (
        <div className="container">
            <Link to="/host/vans" className="back-link">&larr; Back to all vans</Link>
            <div className="details-card">
                <img src={van.imageUrl} alt={van.name} />
                <span className="type-badge">{van.type}</span>
                <h2>{van.name}</h2>
               <div className="host-layout">
               <nav className="host-nav">
                <NavLink to="." end style={({ isActive }) => (isActive ? activeStyle : null)}>Profile</NavLink>
                <NavLink to="photo" style={({ isActive }) => (isActive ? activeStyle : null)}>Photo</NavLink>
                <NavLink to="pricing" style={({ isActive }) => (isActive ? activeStyle : null)}>Pricing</NavLink>
               </nav>
                </div>
         <Outlet context={{van}} />
                </div>

        </div>
    )
}
