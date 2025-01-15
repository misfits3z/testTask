import sprite from '../../images/icons.svg'

export default function Filters() {
    

    return (
        <div>
            <div>
                <form>
                    <label>
                        Location
                        <svg className='{css.location}' width="16" height="16">
                            <use href={`${sprite}#icon-map`} />
                        </svg>
                        <input type="text" name="location" placeholder="City"/>
                    </label>
                </form>
            </div>
            <p>Filters</p>
            <div>
                <form>
                    <p>Vehicle equipment</p>
                    {[
                        "AC",
                        "Automatic",
                        "Kitchen",
                        "TV",
                        "Bathroom",
                        "Radio",
                        "Microwave",
                        "Refrigerator",
                        "Petrol",
                        "Water",
                        "Gas",
                    ].map((item) => (
                        <label key={item}>
                            <input
                                type="checkbox"
                                name="equipment"
                                value={item}
                                
                            />
                            {item}
                        </label>
                    ))}
                 </form>

            </div>
            <div>
                <form>
                    <p>Vehicle type</p>
                    {["Van", "Fully Integrated", "Alcove"].map((type) => (
                        <label key={type}>
                            <input
                                type="radio"
                                name="type"
                                value={type}
                                
                            />
                            {type}
                        </label>
                    ))}
                </form>
            </div>
            <div>
                <button >Search</button>
            </div>


              
        </div>
    )
    
}