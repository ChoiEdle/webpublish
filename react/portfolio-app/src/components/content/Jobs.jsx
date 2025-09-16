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

export function Jobs() {
    const jobs = [
        {
            "img" : "/images/jobs/google.png",
            "msg": "google",
            "jobName": "Google as Junior Software Engineer",
            "jobPeriod": "2019 Oct - Until now"
        },
        {
            "img" : "/images/jobs/samsung.png",
            "msg": "sansung",
            "jobName": "Samsung as Junior Software Engineer",
            "jobPeriod": "2010 Oct - 2019 Oct"
        }
    ];
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