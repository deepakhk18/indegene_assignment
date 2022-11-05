import {useState,useEffect} from "react";
import './App.css';
import Grid from '@mui/material/Grid';
import {mockData} from "./data"
function App() {
  const [data,setData] =useState([]);
  const [flagAll,setFlagAll] =useState(false);
   const [flagElectronics,setFlagElectronics] =useState(false);
    const [flagMusic,setFlagMusic] =useState(false);
     const [flagBooks,setFlagBooks] =useState(false);
  useEffect(()=>{
    setData(mockData);
  },[])
  const handleAll=(e)=>{
    setFlagAll(true)
    setData(mockData);
    setFlagElectronics(false);
    setFlagBooks(false);
    setFlagMusic(false);
  }
  const handleElectronics=(e)=>{
    let filter=mockData.filter((x)=>x.type==="electronics")
    console.log("b",filter);
    setData(filter);
    setFlagElectronics(true);
    setFlagAll(false);
    setFlagMusic(false);
    setFlagBooks(false);
    console.log(data);
  }
  const handleBooks=(e)=>{
    let filter=mockData.filter((x)=>x.type==="book")
    setFlagBooks(true);
    console.log("b",filter);
    setData(filter);
    setFlagAll(false);
    setFlagElectronics(false);
    setFlagMusic(false);
    console.log(data);
  }
  const handleMusic=(e)=>{
    let filter=mockData.filter((x)=>x.type==="music");
    setFlagMusic(true);
    setData(filter);
    setFlagAll(false);
    setFlagBooks(false);
    setFlagElectronics(false);

  }
  return (
    <div className="App" >
      <Grid container rowSpacing={3}>
  <Grid item xs={3}>
  <button className={!flagAll?"button":"button green"}  onClick={handleAll}>All</button>
  </Grid>
  <Grid item xs={3}>
  <button className={!flagElectronics?"button":"button green"} onClick={handleElectronics}>Electronics</button>
  </Grid>
  <Grid item xs={3}>
  <button className={!flagBooks?"button":"button green"}onClick={handleBooks}>Books</button>
  </Grid>
  <Grid item xs={3}>
  <button className={!flagMusic?"button":"button green"}onClick={handleMusic}>Music</button>
  </Grid>
</Grid>

<Grid container rowSpacing={3} style={{marginTop:"2px"}}>
  {data.map((x)=><Grid item xs={3} display={"flex"} justifyContent={"center"}><div  className='cardContainer'>
    <div className="cardBody">
   <img src={x.image} alt="image" className='imageIcon'/>
   <p className='title'>{x.title}</p>
  </div>
</div></Grid>)}
</Grid>



 </div>
  );
}

export default App;
