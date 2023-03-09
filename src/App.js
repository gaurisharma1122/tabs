import { useEffect, useState } from "react";
import Job from "./components/Job";
import Loading from "./components/Loading";
import Tabs from "./components/Tabs";

const url = 'https://course-api.com/react-tabs-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = () => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setJobs(data);
        setLoading(false);
      });
  }
  useEffect(() => {
    fetchJobs()
  }, []);

  if (loading) {
    return <Loading />
  }
  return (
    <div className="app">
      <div className="title">
        <h1>Jobs</h1>
      </div>
      <div className="jobs">
        <Tabs tabs={jobs.map((item) => item.company)} setValue={setValue} value={value} />
        <Job job={jobs[value]} />
      </div>
    </div>
  );
}

export default App;
