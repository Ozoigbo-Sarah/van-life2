import { useOutletContext } from "react-router-dom"



export default function HostVanPricing() {
    const {van} = useOutletContext()
    return(<section>

    <p>price: {van.price}</p>
    </section>)
}