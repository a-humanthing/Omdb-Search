import "./Poster.css"

type posterProp = {
  img: string
  title: string
  year: number
  type: string
}
const Poster: React.FC<posterProp> = ({ img, title, year, type }) => {
  return (
    <>
      <div className="posterContainer">
        <img src={img} className="posterImg" alt={title} />
        <div className="posterText">
          <span className="posterTitle">{title}</span>
          <div className="posterDetails">
            <span className="posterType">{type.toUpperCase()}</span>
            <span className="posterStars">{year}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Poster
