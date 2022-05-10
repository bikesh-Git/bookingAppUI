import './searchItem.scss'

const SearchItem = () => {
  return (
    <div className='searchItem'>
        <img src='https://i.picsum.photos/id/1035/200/300.jpg?hmac=744aBtkMLjfDyn2TzkMxsFzw2T0L57TMlNGFlX-Qgq0' alt='' />
        <div className='siDesc'>
            <h1 className='siTitle'>Arrora Tower Apartment</h1>
            <span className='siDistance'>2km from victory theator</span>
            <span className='siTaxiOp'>free airport taxi</span>
            <span className='siSubtitle'>studio apartment with air condition</span>
            <span className='siFeature'>Entire Studio 1 batroom 21sq full bed room</span>
            <span className='siCancelOp'> free cancelation </span>
            <span className='siCancelOpSubtitle'>You  can cancel later  so look in this great price today</span>
        </div>

        <div className='siDetails'>
            <div className='siRaiting'>
                <span >Excellent</span>
                <button >9.9</button>
            </div>
            <div className='siDetailText'>
                <span className='siPrice'>$3232</span>
                <span className='siTaxiOp'> include taxes and fees</span>
                <button className='siCheckButton'>See availibility</button>
            </div>

             </div>
    </div>
  )
}

export default SearchItem