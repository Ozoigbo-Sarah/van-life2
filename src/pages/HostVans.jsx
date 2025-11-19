
import { useEffect, useState, Suspense } from "react"
import { Link , useLoaderData, Await} from "react-router-dom"
import { getHostVans } from "../Api";
import { requireAuth } from "../utils";


export async function Loader({request}){
    await requireAuth(request);
    return{ hostVansPromise: getHostVans() };
}


export default function HostVans() {
    const { hostVansPromise } = useLoaderData();

    return (
        <div className="container">
            <h2>Your listed vans</h2>
            <Suspense fallback={<h2>Loading vans...</h2>}>
                <Await resolve={hostVansPromise}>
                    {(vans) => (
                        <div className="van-list">
                            {vans.map(van => (
                                <Link to={`/host/vans/${van.id}`} key={van.id} className="van-item">
                                    <img src={van.imageUrl} alt={van.name} />
                                    <div className="van-info">
                                        <h3>{van.name}</h3>
                                        <p>${van.price}/day</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </Await>
            </Suspense>
        </div>
    )
}
            
           