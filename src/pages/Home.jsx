import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
    Home <br />
    <Link to="/detail">Detail 페이지로 이동하기</Link>
</div>
  )
}

export default Home
