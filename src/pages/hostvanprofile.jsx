import { useOutletContext } from "react-router-dom"



export default function Hostvanprofile(){
    const { van } = useOutletContext()
    return <section>
        <h4>Name: {van.name}</h4>
        <p>Description: {van.description}</p>
    </section>
}