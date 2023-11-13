import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useCreateShop } from '../../../hooks/shop/useCreateShop';
import List from './List';
import FoodSelect from './FoodSelect';
import PriceSelect from './PriceSelect';
import ShopTag from './ShopTag';
import ShopFileUpload from './ShopFileUpload';
import ShopLocation from './ShopLocation';
import FormErrorMessage from './FormErrorMessage';

export default function ShopCreateForm() {
  const methods = useForm({
    mode: 'onSubmit'
  });
  const { 
    handleSubmit,
    formState: { errors }
  } = methods;
  const { mutate: addShop } = useCreateShop();

  const validation = {
    text: {
      required: '*필수입력 정보입니다.',
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
    <FormProvider {...methods}>
      <List title={'식당 이름'}>
        <input
          type='text'
          {...methods.register('title', validation.text)}
          className='h-auto'
        />
        <FormErrorMessage 
          name={'title'}
          errors={errors}
        />
      </List>
      <List title={'식당 위치'}>
        <ShopLocation />
      </List>
      <List title={'카테고리'}>
        <FoodSelect />
      </List>
      <List title={'가격대'}>
        <PriceSelect />
      </List>
      <List title={'태그'}>
        <ShopTag />
      </List>
      <List title={'식당 사진'}>
        <ShopFileUpload />
      </List>
      <button
        type='button'
        className='mx-auto mt-12 block w-[422px] h-20 text-[26px] rounded-[10px] bg-main text-white'
        onClick={handleSubmit(onSubmit)}
      >
        등록하기
      </button>
    </FormProvider>
  );
}