
import { cards } from '../../data'

const Cards = () => {
  return (
    <div className='cards-container'>
      {cards.map((card) => (
        <div className='box' key={card.id}>
          <div className="upper">
            <p className='date'>{card.date}</p> 
            {/* first row */}
            <div className='status-name'>
              <button style={{backgroundColor: card.statusbgc}} className='btn1'>{card.status}</button>
              <div className='img-container'>
                <img style={{
                  width: '30px',
                  height:'30px',
                  borderRadius: '50%'
                }} src={card.pfp} alt="" />
                <p className='name'>{card.name}</p>
              </div>
            </div>
              <p className='description'>{card.description}</p>
            {/* second row */}
          </div>
          <div className="lower">
            <button className='btn2'>{card.btn}</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Cards