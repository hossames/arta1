import Products from '../productpages/ProductPage';
let data = [];
const fetching = async() =>{
    const response = await fetch('https://server-1kfi.vercel.app/product');
    data = await response.json();
}

export default async function Home() {
    await fetching();
    console.log(data);
    return (
        <Products data={data}/>
    )
}