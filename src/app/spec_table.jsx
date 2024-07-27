import './spec_table.css'
const Table_row = (props)=>{
    return(
        <tr>
            <td>{props.item.nameEn}</td>
            <td>{props.item.value}</td>
            <td>{props.item.nameAr}</td>
        </tr>
    )
};
export const Table=(props)=>{
    const B =()=>{
        return props.table.map((item,index)=>(
            <Table_row key={index} item={item}/>
        ))
    }
    return(
        <table className='mb-4 my-10'>
            <tbody>
                <B></B>
            </tbody>
        </table>
    )
}