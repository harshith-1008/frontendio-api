import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Navbar';

function App() {
  const [value, setValue] = useState('');
  const [ip, setIp] = useState("");
  const [isp, setIsp] = useState('');
  const [time, setTime] = useState('');
  const [loc, setLoc] = useState('');

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
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [value]);

  return (
    <main className='flex flex-col items-center'>
      <Navbar 
        value={value} 
        onChange={change} 
        ip={ip}
        isp={isp}
        time={time}
        loc={loc}
      />
    </main>
  );
}

export default App;
