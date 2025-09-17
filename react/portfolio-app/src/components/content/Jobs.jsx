export function Job({img, msg, jobName, jobPeriod}) {
    return (
        <>
            <img src={img} alt={msg} />
            <div>
                <p className="job-name">{jobName}</p>
                <p className="job-period">{jobPeriod}</p>
            </div>
        </>
    );
}

export function Jobs({jobs}) {
    return (
        <ul className="jobs">
            {jobs && jobs.map(job => 
                <li className="job">
                    <Job img={job.img} msg={job.msg} jobName={job.jobName} jobPeriod={job.jobPeriod}/>
                </li>
            )}
        </ul>
    );
}