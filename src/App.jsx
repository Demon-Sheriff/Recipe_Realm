import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Filters from './Pages/Filters';
import NonExistentRoute from './Pages/NonExistentRoute';
import Header from './components/Header';
import Layout from './Pages/Layout';

function App() {

  return (
    <>
    <BrowserRouter future={{v7_relativeSplatPath: true,}}>
      <Header/>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/filters' element={<Filters/>}/>
          <Route path='*'element={<NonExistentRoute/>}/>
          <Route path='/' element={<Home/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}


const AnimeCard = () => {
  return (
    <div className="w-[300px] bg-black-500 rounder-lg shadow-lg overflow-hidden">
      Anime Card 
    </div>
  );
}

const LinkedInCard = () => {
  return (
    <div className="w-[300px] bg-white rounded-lg shadow-md overflow-hidden">
      {/* Header Background */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 h-16"></div>

      {/* Profile Picture */}
      <div className="flex justify-center -mt-10">
        <img
          src="https://i.pinimg.com/736x/a6/67/73/a667732975f0f1da1a0fd4625e30d776.jpg" // Replace with your profile picture URL
          alt="Profile"
          className="w-24 h-24 rounded-full border-2 border-white object-cover"
        />
      </div>

      {/* Profile Details */}
      <div className="text-center p-4">
        <h2 className="text-lg font-semibold">Satoru Gojo</h2>
        <p className="text-gray-500">Honoured One</p>
      </div>

      {/* Profile Stats */}
      <div className="border-t px-4 py-2">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Profile viewers</span>
          <span className="text-blue-700 font-semibold text-lg">{'\u221E'}</span>
        </div>
        <div className="text-blue-700 text-sm text-center mt-1 cursor-pointer">
          View all analytics
        </div>
      </div>

      {/* Premium Retry Section */}
      <div className="border-t px-4 py-3">
        <button className="w-full flex items-center justify-center text-yellow-700 font-semibold text-sm p-2 rounded-md bg-yellow-100 hover:bg-yellow-200">
          <span className="mr-2">🔒</span> Retry Premium for ₹0
        </button>
      </div>

      {/* Saved Items */}
      <div className="border-t px-4 py-3">
        <div className="flex items-center text-sm text-gray-600 font-medium cursor-pointer">
          <span className="mr-2">💾</span> Saved items
        </div>
      </div>
    </div>
  );
};



function PostComponent(props) {

  return (<div style={{width:300, borderRadius:20, backgroundColor:"white", borderColor:"gray", borderWidth:1, padding:10, margin:10, boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",}}>
    <div style={{display:"flex",}}>
      <img src="https://appx-wsb-gcp.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg" alt="" style={
        {width:60, height:60, borderRadius:50}
      }/>
      <div style={{marginLeft:10}}>
        <b>{props.title}</b>
        <div>{props.followers} followers</div>
        <div>{props.time}</div>
      </div>
    </div>
    <div style={{margin:10}}>
      {props.description}
    </div>

  </div>);
}

function ProfileCard() {

  return (<div style={{width:300, display:"flex", flexDirection:'column', flex:0.8, backgroundColor:'white', borderRadius:20, padding:20, margin:10 }}>
    <div className='User-Info'></div>
    <div className='User-Stats'>

      <UserStat title="Profile viewers" numericData="41,903"></UserStat>
      <UserStat title="Post Impressions" numericData="1,313"></UserStat>
    </div>
  </div>);
}

function UserStat(props) {
  return (
    <div style={{display:'flex', justifyContent:'space-between'}}>
      <div>{props.title}</div>
      <div>{props.numericData}</div>
    </div>
  );
}

export default App;
