export function ComponentB({getItems}) {
    const items = getItems();
    return <div>
        {items.map((i) => {
            return <p>{i}</p>
        })}
    </div>
}