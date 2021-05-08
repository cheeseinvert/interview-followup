

export async function fetch(urlBase, index, limit) {
    let queryString = `?_start=${index}&_limit=${limit}`;
    try {
        let response = await window.fetch(`${urlBase}${queryString}`);
        let people = await response.json();
        return people;
    } catch (e) {
        console.log(`error is ${e}`);
    }
}