import "./Error.css"

const Error: React.FC<{ error: string }> = ({ error }) => {
  return <div className="noResultCard">{error}</div>
}

export default Error
