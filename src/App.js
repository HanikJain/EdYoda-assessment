import { useEffect } from 'react';
import './App.module.css';
import Navbar from './components/Navbar/Navbar'
import Layout from './components/UI/Layout'
import CourseDetails from './components/CourseDetails/CourseDetails'
import PlanCard from './components/PlanCard/PlanCard.jsx'

function App() {
  useEffect(() => {
    document.title = "Edyoda";
  }, []);

  return (
    <> 
      <Navbar />
      <Layout>
          <CourseDetails />
          <PlanCard />
      </Layout>
    </>
  );
}

export default App;
