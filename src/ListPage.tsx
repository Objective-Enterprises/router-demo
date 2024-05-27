import products from './products.json'

export default function ListPage (props: {
  addToCart: (itemName: string) => void
}) {
  const productButtons = products.map(product => {
    function addProduct () {
      props.addToCart(product.name)
    }
    return (
      <button key={product.id} onClick={addProduct}>
        {product.name}
      </button>
    )
  })
  return (
    <>
      <h2>List Page</h2>
      {productButtons}
    </>
  )
}