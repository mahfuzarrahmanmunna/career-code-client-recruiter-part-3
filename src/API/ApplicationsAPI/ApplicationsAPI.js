export const myApplicationsPromise = email => {
    return fetch(`http://localhost:3000/application?email=${email}`, {
        credentials: 'include'
    })
        .then(res => res.json())
        .catch(err => {
            console.error("Failed to fetch applications:", err);
            throw err; // Re-throw the error to be caught by Suspense
        });
}