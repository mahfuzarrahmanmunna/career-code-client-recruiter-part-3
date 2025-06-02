export const myApplicationsPromise = (email, accessToken) => {
    return fetch(`http://localhost:3000/application?email=${email}`, {
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