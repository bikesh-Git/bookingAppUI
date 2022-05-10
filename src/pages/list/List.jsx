import './list.scss'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import { useLocation } from 'react-router-dom'
import {format} from 'date-fns'
import { useState } from 'react'
import { DateRange } from 'react-date-range'
import SearchItem from '../../components/searchItem/SearchItem'

function List() {
  const location = useLocation()
  console.log(location)
  const [openDate, setOpenDate] = useState(false)
  const [destination, setdDestination] = useState(location.state.destination)
  const [date, setDate] = useState(location.state.date)
  const [options, setOptions] = useState(location.state.options)
 
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div  className='listContainer'>
        <div className='listWrapper'>
            <div className='listSearch'>
              <h1 className='lsTitle'>Search</h1>
              <div className='lsItem'>
              <label >Destination</label>
              <input placeholder={destination}/>
              </div>
              <div className='lsItem'>
              <label >Check-in Date</label>
              <span onClick={()=>setOpenDate(!openDate)} className="lsSearchText">{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && <DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className="date"
                        />}
              </div>
              <div className='lsItem'>
              <label >Options</label>
              <div className='lsItemOptions'>
              <div className='lsOptionItem'>
                <span className='lsOptionText'>Min Price <small>Per Night</small></span>
                <input className='lsOptionInput'></input>
              </div>
              <div className='lsOptionItem'>
                <span className='lsOptionText'>adult</span>
                <input className='lsOptionInput'  min={1} placeholder={options.adult}></input>
              </div>
              <div className='lsOptionItem'>
                <span className='lsOptionText'>children</span>
                <input className='lsOptionInput' min={0} placeholder={options.children}></input>
              </div>
              <div className='lsOptionItem'>
                <span className='lsOptionText'>room</span>
                <input className='lsOptionInput' min={0} placeholder={options.room}></input>
              </div>
              </div>
              </div>
                <button className='lsSearch'>Search</button>
            </div>
            <div className='listResult'>
                <SearchItem/>
                <SearchItem/>
                <SearchItem/>
                <SearchItem/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default List
