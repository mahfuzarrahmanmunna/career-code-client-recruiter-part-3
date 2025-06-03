export const JobPromisedByMyPostedJob = (email, accessToken) => {
    return fetch(`https://career-code-server-for-recruiter-pa-tau.vercel.app/jobs?email=${email}`, {
        headers: {
            authorization: `Bearer ${accessToken}`
        },
        credentials: 'include'
    })
        .then(res => res.json())
        .catch(err => {
            console.log(err);
            throw err
        })
}