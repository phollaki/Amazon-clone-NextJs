import Image from 'next/image';
import { useState } from 'react';
import { StarIcon } from '@heroicons/react/solid';
import Currency from 'react-currency-formatter';
import { addToBasket, selectItems } from '../slices/basketSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, title, description, category, image, price }) {
  const dispatch = useDispatch();
  const basket = useSelector(selectItems);
  const router = useRouter();

  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  const [hasPrime] = useState(Math.random() < 0.5);

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      description,
      rating,
      category,
      image,
      price,
      hasPrime,
    };
    dispatch(addToBasket(product));
  };
  return (
    <div className='relative flex flex-col bg-white m-5 z-30 p-10 text-gray-600'>
      <p className='font-bold text-black'>
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </p>

      <Image
        src={image}
        className=''
        height={200}
        width={200}
        objectFit='contain'
      />
      <h1 className='my-3'>{title}</h1>
      <div className='flex'>
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon key={i} className='h-5 text-yellow-500' />
          ))}
      </div>

      <p className='text-xs my-2 line-clamp-2'>{description}</p>

      <div className='mb-5'>
        <Currency quantity={price} currency='GBP' />
      </div>

      {hasPrime && (
        <div className='flex items-center space-x-2 -mt-5'>
          <img className='w-12' src='https://links.papareact.com/fdw' alt='' />
          <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
        </div>
      )}

      <button className='mt-auto button' onClick={addItemToBasket}>
        Add to basket
      </button>
    </div>
  );
}

export default Product;
