import Product from './Product';

function ProductFeed({ products }) {
  return (
    <div className='grid grid-flow-row-dense -mt-10 px-8 md:grid-cols-2 md:-mt-32 lg:grid-cols-3 lg:-mt-64 xl:grid-cols-4 xl:-mt-72'>
      {products
        .slice(0, 4)
        .map(({ id, title, description, rating, category, image, price }) => (
          <Product
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
            rating={rating}
          />
        ))}
      <img className='md:col-span-full' src='https://links.papareact.com/dyz' />
      <div className='md:col-span-2'>
        {products
          .slice(4, 5)
          .map(({ id, title, description, rating, category, image, price }) => (
            <Product
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
              rating={rating}
            />
          ))}
      </div>
      {products
        .slice(5, products.length)
        .map(({ id, title, description, rating, category, image, price }) => (
          <Product
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
            rating={rating}
          />
        ))}
    </div>
  );
}

export default ProductFeed;
