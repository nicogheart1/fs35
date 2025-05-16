import useSWR from "swr";

const fetcher = (url) => fetch(url).then(res => res.json());

const JsonServerComponent = () => {

    const {data = []} = useSWR("http://localhost:3000/posts", fetcher);

    return (
        <div>
            {data.map(value => (
                <div key={value.id}>{value.title} - {value.views}</div>
            ))}
        </div>
    );
};

export default JsonServerComponent;