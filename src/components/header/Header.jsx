import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBed, faPlane, faCar, faTaxi, faCalendarDays, faPerson } from '@fortawesome/free-solid-svg-icons'
import './header.scss'
import { DateRange } from "react-date-range"
import { useState } from "react"
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns'
import { useNavigate } from "react-router-dom"
const Header = ({type}) => {
    const navigate = useNavigate()
    const [destination, setDestination] = useState("")
    const [openDate, setOpenDate] = useState(false)
    const [openOptions, setOpenOptions] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1
    })

    const handleOption = (name, operation) => {
        setOptions(prev => {
            return {
                ...prev, [name]: operation === "i" ? options[name] + 1 : options[name] - 1
            }
        })
    }

    const handleSearch = ()=>{
        navigate('/hotels',{state:{destination,date,options}})
    }
    return (
        <div className='header'>
           
            <div className={type == "list" ? "headerContainer listMode": "headerContainer"}>
                <div className='headerList'>
                    <div className='headerListItem active'>
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className='headerListItem'>
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className='headerListItem'>
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car rentals</span>
                    </div>
                    <div className='headerListItem'>
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>
                    <div className='headerListItem'>
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airports Taxis</span>
                    </div>
                </div>
                {type !== "list" && 
                <>
                <h1 className="headerTitle">You were made to soar</h1>
                <p className="headerDesc">Get rewarded for your travels - unlock instant saving of 10% or
                    more with a free bikeshBooking account</p>
                <button className="headerBtn">Sign In / Register</button>

                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faTaxi} className="headerIcon" />
                        <input type="text"
                            placeholder="Where are you going"
                            className="headerSearchInput"
                            onChange={(e)=>setDestination(e.target.value)}
                        />
                    </div>
                    <div onClick={() => setOpenDate(!openDate)} className="headerSearchItem">
                        <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                        <span className="headerSearchText">{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                        {openDate && <DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className="date"
                        />}
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                        <span className="headerSearchText" onClick={() => setOpenOptions(!openOptions)} > 
                        {options.adult} adult &#5867; {options.children} &#5867; children {options.room} &#5867; room
                        </span>
                        {openOptions &&
                            <div className="options">
                                <div className="optionItem">
                                    <span className="optionText">Adult</span>
                                    <div className="optionCounter">
                                        <button
                                            disabled={options.adult <= 1}
                                            className="optionCounterButton" onClick={() => handleOption("adult", "d")}>-</button>
                                        <span className="optionCounterNumber">{options.adult}</span>
                                        <button className="optionCounterButton" onClick={() => handleOption("adult", "i")}>+</button>
                                    </div>
                                </div>
                                <div className="optionItem">
                                    <span className="optionText">Children</span>
                                    <div className="optionCounter">
                                        <button
                                            disabled={options.children <= 1}
                                            className="optionCounterButton" onClick={() => handleOption("children", "d")}>-</button>
                                        <span className="optionCounterNumber">{options.children} </span>
                                        <button className="optionCounterButton" onClick={() => handleOption("children", "i")}>+</button>
                                    </div>
                                </div>
                                <div className="optionItem">
                                    <span className="optionText">Room</span>
                                    <div className="optionCounter">
                                        <button
                                            disabled={options.children <= 1}
                                            className="optionCounterButton" onClick={() => handleOption("room", "d")}>-</button>
                                        <span className="optionCounterNumber"> {options.room} </span>
                                        <button className="optionCounterButton" onClick={() => handleOption("room", "i")}>+</button>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                    <div className="headerSearchItem">
                        <button className="headerSearchBtn" onClick={handleSearch}>Search</button>
                    </div>
                </div>
                </>
                }
            </div>
                
        </div>
    )
}

export default Header
