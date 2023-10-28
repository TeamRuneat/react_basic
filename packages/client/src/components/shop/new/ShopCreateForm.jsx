import React from 'react';
import { useForm } from 'react-hook-form';
import List from './List';
import { useCreateShop } from '../../../hooks/shop/useCreateShop';
import FoodSelect from './FoodSelect';
import PriceSelect from './PriceSelect';
import ShopTag from './ShopTag';
import ShopFileUpload from './ShopFileUpload';
import ShopLocation from './ShopLocation';
import FormErrorMessage from './FormErrorMessage';

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

  const validation = {
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
      if (Array.isArray(data[key])) {
        data[key].forEach((item) => formData.append(key, item));
      } else {
        formData.append(key, data[key]);
      }
    }
    addShop(formData);
  };

  return (
    <div>
      <List title={'식당 이름'}>
        <input
          type='text'
          {...register('title', validation.text)}
          className='h-auto'
        />
        <FormErrorMessage 
          name={'title'}
          errors={errors}
        />
      </List>
      <List title={'식당 위치'}>
        <ShopLocation
          register={register}
          setShopLocation={setValue}
          errors={errors}
          validation={validation}
        />
      </List>
      <List title={'카테고리'}>
        <FoodSelect
          name='type'
          control={control} 
          errors={errors}
          validation={validation}
        />
      </List>
      <List title={'가격대'}>
        <PriceSelect
          name='priceRange'
          control={control} 
          errors={errors}
          validation={validation}
        />
      </List>
      <List title={'태그'}>
        <ShopTag 
          name='tags' 
          control={control} 
          errors={errors}
          validation={validation}
        />
      </List>
      <List title={'식당 사진'}>
        <ShopFileUpload 
          name='images' 
          control={control} 
          errors={errors}
          validation={validation}
        />
      </List>
      <div className='flex justify-center'>
        <button
          type='button'
          className='mt-12 mr-[30px] w-[422px] h-20 text-[26px] rounded-[10px] bg-main text-white'
          onClick={handleSubmit(onSubmit)}
        >
          등록하기
        </button>
      </div>
    </div>
  );
}