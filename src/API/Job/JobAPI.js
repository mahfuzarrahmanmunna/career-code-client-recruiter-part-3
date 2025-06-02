export const JobPromisedByMyPostedJob = (email) => {
    return fetch(`http://localhost:3000/jobs?email=${email}`)
        .then(res => res.json())
        .catch(err => {
            console.log(err);
            throw err
        })
}