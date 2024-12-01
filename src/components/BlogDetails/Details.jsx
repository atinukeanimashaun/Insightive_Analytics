import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { blogs } from '../../constants';
import { BsChevronRight } from 'react-icons/bs';
import image19 from '../../assets/images/image19.png'

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [items, setItems] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log('ID from params:', id);
    console.log('blogs:', blogs);

    const foundItem = blogs.find((item) => item._id === id);

    if (foundItem) {
      setItems(foundItem);
    } else {
      console.log("Item not found");
    }

    setIsLoading(false);
  }, [id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!items) {
    return <p className='pt-[25%] md:pt-[5%] pb-[5%] px-3 lg:px-[6rem] text-2xl'>Blog not found</p>;
  }

  return (
    <div className="w-full max-w-[999px] mx-auto px-6">
      <div className='py-8 flex items-center gap-2'>
        <button onClick={() => navigate('/')} className='flex items-center justify-center gap-2 text-md font-semibold'>
          Home
          <BsChevronRight size={18} />
        </button>

        <button onClick={() => navigate('/blog')} className='flex items-center justify-center gap-2 text-md font-semibold'>
          Blog
          <BsChevronRight size={18} />
        </button>

        <p className='text-md font-bold capitalize truncate sm:max-w-[150px]'>
          {items.category}
        </p>
      </div>

      <div className="mb-10">
        <h2 className="font-[700] text-[30px] md:text-[40px]">
          {items.title}
        </h2>

        <div className="space-y-5">
          <p className="font-[700] text-[25px] md:text-[40px] text-secondary pt-11">
            Introduction
          </p>

          <p className="text-[16px] md:text-[18px] leading-[24px] text-black">
            Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.
          </p>

          <p className="text-[16px] md:text-[18px] leading-[24px] text-black">
            Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.
          </p>

          <figure>
            <img src={image19} alt="image19" className="rounded-xl" />
            <figcaption className="border-l-2 border-l-red pl-4 text-[14px] text-[#4F4F4F mt-3">
              Image caption goes here
            </figcaption>
          </figure>
        </div>

        <div className="space-y-5 mt-11 mb-5">
          <p className="text-[20px] font-[700] leading-[28px] text-black">
            Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.
          </p>

          <p className="text-[16px] leading-[24px] text-black">
            Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam. Risus, volutpat vulputate posuere purus sit congue convallis aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus, eget nunc lectus in tellus, pharetra, porttitor.
          </p>

          <p className="text-red text-[20px] leading-[28px] border-l-2 border-l-red pl-3">
            "Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus."
          </p>

          <p className="text-[16px] text-black leading-[24px]">
            "Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus."
          </p>
        </div>

        <div className="space-y-5 mt-5 mb-16">
          <p className="font-[700] text-[25px] md:text-[40px] text-secondary pt-11">
            Conclusion
          </p>

          <p className="text-[16px] text-black leading-[24px]">
            Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.
          </p>

          <p className="text-[16px] text-black leading-[24px]">
            Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit dictum eget nibh tortor commodo cursus.
          </p>

          <p className="text-[16px] text-black leading-[24px]">
            Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum urna nisi aliquet erat dolor enim. Ornare id morbi eget ipsum. Aliquam senectus neque ut id eget consectetur dictum. Donec posuere pharetra odio consequat scelerisque et, nunc tortor. Nulla adipiscing erat a erat. Condimentum lorem posuere gravida enim posuere cursus diam.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Details
