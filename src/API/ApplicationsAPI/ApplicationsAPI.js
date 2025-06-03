export const myApplicationsPromise = (email, accessToken) => {
    return fetch(`https://career-code-server-for-recruiter-pa-tau.vercel.app/application?email=${email}`, {
        headers: {
            authorization: ` Bearer ${accessToken}`
        }
    })
        .then(res => res.json())
        .catch(err => {
            console.error("Failed to fetch applications:", err);
            throw err; // Re-throw the error to be caught by Suspense
        });
}