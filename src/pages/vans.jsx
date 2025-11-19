import React, { Suspense } from "react";
import { Link , useSearchParams, useLoaderData, Await } from "react-router-dom";
import { getVans } from "../Api";

export async function Loader(){
  return {
    vansPromise: getVans()
  };
}

export default function Vans() {
  const { vansPromise } = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  

  function renderVans(vans){
    const typeFilter = searchParams.get("type");
    const displayedVans = typeFilter
      ? vans.filter(van => van.type.toLowerCase() === typeFilter.toLowerCase())
      : vans;

    const vanElements = displayedVans.map(van => (
      <div key={van.id} className="van-tile">
        <Link to={van.id} state={{ search: `?${searchParams.toString()}`, type: typeFilter }}>
          <img src={van.imageUrl} alt={van.name} />
          <div className="van-info">
            <h3>{van.name}</h3>
            <p>{van.price}<span>/day</span></p>
          </div>
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
        </Link>
      </div>
    ));

    return (
      <>
        <div className="van-list-filter-buttons">
          <button className={`van-type simple ${typeFilter === "simple" ? "selected" : ""}`} onClick={() => setSearchParams({ type: "simple" })}>Simple</button>
          <button className={`van-type luxury ${typeFilter === "luxury" ? "selected" : ""}`} onClick={() => setSearchParams({ type: "luxury" })}>Luxury</button>
          <button className={`van-type rugged ${typeFilter === "rugged" ? "selected" : ""}`} onClick={() => setSearchParams({ type: "rugged" })}>Rugged</button>
          { typeFilter ? (<button onClick={() => setSearchParams({})} className="van-type clear-filters">Clear filters</button>) : null}
        </div>

       <div className="van-list-container">
          <div className="van-list">
            {vanElements}
          </div>
        </div>
      </>
    );
  }

  return (
    <div>
      <div>
        <h1>Explore our van options</h1>
        <Suspense fallback={<h2>Loading vans...</h2>}>
          <Await resolve={vansPromise}>
            {renderVans}
          </Await>
        </Suspense>
      </div>
    </div>
  );
}






