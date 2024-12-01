import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { courses } from '../../constants';
import { MdCheck } from 'react-icons/md';

const DetailsCourse = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    const foundProduct = courses.find((item) => item._id === id);
    console.log('Found Product:', foundProduct);

    if (foundProduct) {
      setProduct(foundProduct);
      setMainImage(foundProduct.image);
    }

    setIsLoading(false);
  }, [id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!product || !mainImage) {
    return (
      <p className="pt-[25%] md:pt-[5%] pb-[5%] px-3 lg:px-[6rem] bg-gradient-to-r from-brown from-0% to-nude1 to-100% font-primary text-brown1 text-2xl">
        Course not found
      </p>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row items-center gap-8 mt-10 md:mt-24  px-6 md:px-10 xl:px-20">
      <div className="lg:w-1/2">
        <h2 className="font-[700] text-[30px] md:text-[48px]">
          {product.title}
        </h2>
        <p className="text-black text-[14px] md:text-[18px] leading-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>

        <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-7 lg:max-w-none md:grid-cols-2 mt-8">
          {['Custom analytics', 'Interactive sessions', 'Expert instructors', 'Flexible schedule'].map((feature, index) => (
            <div key={index} className="flex gap-3 items-center">
              <p className="bg-secondary text-white text-center w-9 h-9 rounded-full flex items-center justify-center">
                {index + 1}
              </p>
              <h2 className="font-bold text-secondary text-lg">{feature}</h2>
            </div>
          ))}
        </div>

        <div className="flex gap-4 items-center mt-6">
          <img src={product.avatar} alt="" />

          <div className="flex flex-col gap-1">
            <h2 className="font-[700] text-[18px] md:text-[24px]">
              {product.name}
            </h2>

            <p className="text-[#838383] text-[15px] md:text-[20px]">
              {product.category}
            </p>
          </div>
        </div>
      </div>

      <div className="lg:w-1/2 flex flex-col items-end ">
        <div className="flex flex-col justify-center gap-4 p-4 bg-white shadow-xl rounded-xl">
          <img src={mainImage}
            alt={product.title}
            className="rounded-lg w-[350px] h-[200px] object-cover"
          />

          <h2 className="font-[700] text-[25px] md:text-[32px] text-center">
            ${product.price}
          </h2>

          <button className="font-[600] text-[16px] text-white bg-secondary w-full py-3 rounded-lg hover:text-secondary hover:border-[1px] hover:border-secondary hover:bg-transparent  hover:-translate-y-4 duration-300 transition-all cursor-pointer">
            Add to Cart
          </button>

          <ul className="pl-3 space-y-2 mb-4">
            <li className="font-[500] text-[16px] text-secondary flex items-center">
            <MdCheck className="mr-2 w-5 h-5" />
              Course Length
            </li>
            <li className="font-[500] text-[16px] text-secondary flex items-center">
            <MdCheck className="mr-2 w-5 h-5" />
              X Instructional Videos
            </li>
            <li className="font-[500] text-[16px] text-secondary flex items-center">
            <MdCheck className="mr-2 w-5 h-5" />
              X Problem Sets
            </li>
            <li className="font-[500] text-[16px] text-secondary flex items-center">
            <MdCheck className="mr-2 w-5 h-5" />
              X Downloadable Resources
            </li>
            <li className="font-[500] text-[16px] text-secondary flex items-center">
            <MdCheck className="mr-2 w-5 h-5" />
              Course Completion Certificate
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DetailsCourse;
