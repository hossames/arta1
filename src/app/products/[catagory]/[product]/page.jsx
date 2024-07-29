import ProductPage from '@/app/productpages/product'
let data = [];
export const fetching = async() =>{
    const response = await fetch('https://server-1kfi.vercel.app/product');
    data = await response.json();
}

export default async function Home(props) {
    await fetching();
    console.log(data);
    return (
        <ProductPage data={data} params={props.params}/>
    )
}