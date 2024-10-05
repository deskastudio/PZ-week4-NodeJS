// add async await to the fetchData function
const fetchDataAsyncAwait = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");  // 1 second
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
};

fetchDataAsyncAwait();

// promise example
const fetchDataPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 100);
    });
};

fetchDataPromise()
    .then(data => console.log(data))
    .catch(error => console.error(error));


// Cara lain tanpa async/await
function fetchDataWithPromises() {
    fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => {
        console.log('Data yang sudah di-parse:', data);
    })
    .catch(error => {
        console.error('Terjadi kesalahan:', error);
    });
}

