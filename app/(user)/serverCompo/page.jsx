const serverCompo = async () => {

const url = "https://jsonplaceholder.typicode.com/posts";

    const res = await fetch(url);
    const data = await res.json();

    console.log(data);

    return (
        <ul className="grid grid-cols-3 gap-5">
            {
                data.map((ds, index) => {
                    return <li key={index}> {ds.body}</li>
                })
            }
        </ul>
    )

}

export default serverCompo;