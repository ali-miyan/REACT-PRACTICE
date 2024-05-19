import { useSelector } from "react-redux";

const Search = ({data}:{data:string[]}) => {

    const ans = useSelector((state) => state);
    console.log(ans);
    
    const str = data.filter((str:any) => str === ans);

  return (
    <>
    {
        str.length > 0 ?
        str.filter((val:any,ind)=>(

            <h1 key={ind}>{val}</h1>
        ))
        :
        <div>no data</div>
    }
    </>
  );
};

export default Search;
