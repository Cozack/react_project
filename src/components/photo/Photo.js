export default function Photo({item, details}) {
    return (
        <div>
            {item.id}
            <img src={item.thumbnailUrl} alt=""/>
                <button onClick={() => details(item.id)}>Details</button>
        </div>
);
}