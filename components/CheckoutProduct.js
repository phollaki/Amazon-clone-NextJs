import { StarIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import Currency from 'react-currency-formatter';
function CheckoutProduct({
  id,
  title,
  description,
  rating,
  category,
  image,
  price,
  hasPrime,
}) {
  return (
    <div className='grid grid-cols-5'>
      <Image
        src={image}
        alt={description}
        height={200}
        width={200}
        objectFit='contain'
      />
      <div className='col-span-3 mx-5'>
        <p>{title}</p>
        <div className='flex'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className='h-5 text-yellow-500' />
            ))}
        </div>
        <p className='text-xs my-2 line-clamp-3'>{description}</p>
        <Currency quantity={price} currency='GBP' />
        {hasPrime && (
          <div className='flex items-center space-x-2'>
            <img
              src='https://links.papareact.com/fdw'
              className='w-12'
              loading='lazy'
              alt=''
            />
            <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
