import { useContext } from "react"
import { CountContext } from "./context/CountContext"
import { heroes } from "./data/heroes"


export const Card = () => {

    const { count } = useContext(CountContext)

    return (
        <>
            {
                heroes.map(hero => (
                    <div key={hero.id} className="px-2 col-md-2">
                        <div className="card " >
                            <img src={hero.img} className="card-img-top" alt={hero.superhero} />
                            <div className="card-body">
                                <div className="d-flex justify-content-between gap-3">
                                    <h5 className="card-title">{hero.superhero}</h5>
                                    <p>contador: {count}</p>
                                </div>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>

                ))
            }

        </>
    )
}
