import Navbar from "../components/Navbar"
import Box from "../components/Box"


const Home = () => {
  return (
    <div className="">
      <Navbar />
      <h1 className="text-center pt-10 text-[2rem]"> Points.charity</h1> <br />
      <p className="text-center"> A Pointing site, but all proceeds are donated to charity</p>
      {[...Array(7)].map((e, i) => <br />)}

      {/* Host the Session */}
      <Box>
        <h1 className="text-[2rem] text-center"> Host Session</h1>

      </Box>
    </div>
  )
}

export default Home