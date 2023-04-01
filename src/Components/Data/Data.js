import { useEffect, useState } from "react";

export const Data = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`/fakedata.json`)
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);
    return [data];
};
