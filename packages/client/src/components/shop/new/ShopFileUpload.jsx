import React, { useState } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import FormErrorMessage from './FormErrorMessage';
import SvgIcon from '../../ui/SvgIcon';
import common from '../../../../public/icons/common.svg';

export default function ShopFileUpload() {
  const { errors } = useFormContext();
  const { field } = useController({ 
    name: 'images',
    rules: {
      required: '필수입력 정보입니다.',
    }
  });
  const [fileList, setFileList] = useState([]);

  const handleChange = async (e) => {
    const newFile = e.target.files[0];
    const newFileList = [...fileList, newFile];
    field.onChange(newFileList);
    setFileList(newFileList);
  };

  const handleDelete = (index) => {
    const updatedFileList = fileList.filter((_, i) => i !== index);
    field.onChange(updatedFileList);
    setFileList(updatedFileList);
  };

  return (
    <>
      <div className='flex'>
        <div className='flex'>
          {fileList.map((file, index) => (
            file && (
              <div key={index} className='relative mr-4 w-[150px] h-[150px] rounded-[10px] overflow-hidden'>
                <img
                  className='absolute inset-0 h-full'
                  src={URL.createObjectURL(file)}
                  alt='thumbnail'
                />
                <button
                  onClick={() => handleDelete(index)}
                  className='absolute top-0 right-0 p-[11px]'
                >
                  <SvgIcon type={common} id='delete' width={18} height={18} />
                </button>
              </div>
            )
          ))}
        </div>
        {fileList.length < 4 && (
          <div className='relative flex flex-shrink-0 items-center justify-center w-[150px] h-[150px] border border-black rounded-[10px]'>
            <input
              multiple
              type='file'
              accept='image/jpg, image/png, image/jpeg'
              onChange={handleChange}
            />
            <SvgIcon type={common} id='plus' width={20} height={20} />
          </div>
        )}
      </div>
      <FormErrorMessage name={'images'} errors={errors} />
      <p className='mt-5 text-16 text-[#999]'>*이미지 첨부시 10MB 이하의 jpg, jpeg, png (최대4장) 으로 업로드 가능합니다.</p>
    </>
  );
}