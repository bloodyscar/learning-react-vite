export default function Card() {
    return (
        <div className="w-64 h-80 bg-white shadow-lg rounded-lg p-4 mb-5">
            <a href="#">
                <img className="rounded-t-lg" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//133.png" alt="Pokemon" />
            </a>
            <div className="p-5">
                <p className="mb-2 text font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                </p>


            </div>
        </div>
    )
}
