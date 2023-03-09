import {TbPlayerTrackNext} from "react-icons/tb";

const Job= ({job})=>{
    return(
        <section className="job-container">
            <h1>{job.title}</h1>
            <h3><span>{job.company}</span></h3>
            <p>{job.dates}</p>
            <ul>
                {
                    job.duties.map((item)=>{
                        return(
                            <li>
                                <TbPlayerTrackNext className="icon"/>
                                <p>{item}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    );
};
export default Job;