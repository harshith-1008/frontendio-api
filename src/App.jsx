import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Navbar';
import Map from './Map'
import 'leaflet/dist/leaflet.css';


function App() {
  const [value, setValue] = useState('');
  const [ip, setIp] = useState("");
  const [isp, setIsp] = useState('');
  const [time, setTime] = useState('');
  const [loc, setLoc] = useState('');
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');

  const change = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const x = `https://geo.ipify.org/api/v2/country,city?apiKey=at_dz59oV7pDLPAryoQpA6Rap9Ij296A&ipAddress=${value}`;
        const response = await fetch(x);
        const data = await response.json();
        setIp(data.ip);
        setIsp(data.isp);
        setTime(data.location.timezone);
        setLoc(data.location.region + ', ' + data.location.city);
        setLat(data.location.lat)
        setLon(data.location.lng)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [value]);

  return (
    <main className='flex flex-col items-center'>
      <section className='absolute'>
        <Navbar className="absolute"
        value={value} 
        onChange={change} 
        ip={ip}
        isp={isp}
        time={time}
        loc={loc}
        />
        <Map lat={lat} lon={lon} className="relative"/>
      </section>
    </main>
  );
}

export default App;
