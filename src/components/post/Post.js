export default function Post ({item,details}){
  return (
      <div>
          {item.id} - {item.title}
          <button onClick={()=>details(item.id)}>Details </button>
      </div>
  );
}