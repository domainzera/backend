function ItemListContainer({ greeting }) {
  return (
    <section className="item-list-container text-center py-5">
      <h1 className="display-5 mb-3">{greeting}</h1>
      <p className="lead text-muted">
        Próximamente verás aquí nuestro catálogo de productos.
      </p>
    </section>
  )
}

export default ItemListContainer
