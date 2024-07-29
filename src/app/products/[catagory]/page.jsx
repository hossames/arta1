import ProductCatagoriesPage from "../../productpages/catagory";
let data = [];
const fetching = async() =>{
    const response = await fetch('https://server-1kfi.vercel.app/product');
    data = await response.json();
}

export default async function Home(props) {
    await fetching();
    return (
        <ProductCatagoriesPage data={data} params={props.params}/>
    )
}