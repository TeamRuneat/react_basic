import React from 'react';
import { useForm } from 'react-hook-form';
import List from './List';
import { useCreateShop } from '../../../hooks/shop/useCreateShop';
import FoodSelect from './FoodSelect';
import PriceSelect from './PriceSelect';
import ShopTag from './ShopTag';
import ShopFileUpload from './ShopFileUpload';

export default function ShopCreateForm() {
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors }
  } = useForm({
    mode: 'onSubmit'
  });
  const { mutate: addShop } = useCreateShop();

  const registerCheck = {
    text: {
      required: '필수입력 정보입니다.',
      maxLength: {
        value: 50,
        message: '50자 이내로 작성해주시길 바랍니다.'
      }
    }
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }
    addShop(formData);
  };

  return (
    <ul className='max-w-2xl'>
      <List title={'식당 이름'}>
        <input
          type='text'
          {...register('title', registerCheck.text)}
        />
        {errors?.title?.message && (
          <span className='mt-2 text-[#ff4d4d]'>
            {errors.title.message}
          </span>
        )}
      </List>
      <List title={'카테고리'}>
        <FoodSelect
          name='type'
          label='카테고리'
          updateFoodType={setValue}
        />
      </List>
      <List title={'가격대'}>
        <PriceSelect
          name='priceRange'
          label='가격대'
          updatePriceRange={setValue}
        />
      </List>
      <List title={'태그'}>
        <ShopTag 
          name='tags' 
          control={control} 
        />
      </List>
      <List title={'식당 사진'}>
        <ShopFileUpload 
          name='image' 
          control={control} 
        />
      </List>
      <div className='text-center'>
        <button
          type='button'
          onClick={handleSubmit(onSubmit)}
          className='mt-9 bg-black text-white w-[120px] h-12'
        >
          등록
        </button>
      </div>
    </ul>
  );
}