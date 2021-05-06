export default function Comment ({item,commentsDetails}){
  return (
      <div>
          <h4>Comment №{item.id}
          <br/>
              Name: {item.name}
              <br/>
              Email: {item.email}
              <button onClick={()=>commentsDetails(item.id)}>Details</button>
          </h4>

      </div>
  );
}