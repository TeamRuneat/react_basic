import React, { useState } from 'react';
import { useController } from 'react-hook-form';

export default function ShopFileUpload({ control, name }) {
  const { field } = useController({ control, name });
  const [fileList, setFileList] = useState([]);

  const handleChange = async (e) => {
    const newFile = e.target.files[0];
    const newFileList = [...fileList, newFile];
    field.onChange(newFileList);
    setFileList(newFileList);
  };

  const handleDelete = (index) => {
    const updatedFileList = fileList.filter((_, i) => i !== index);
    setFileList(updatedFileList);
  };

  return (
    <>
      <div className='flex'>
        <div className='flex'>
          {fileList.map((file, index) => (
            <div
              key={index}
              className='relative w-24 h-24 mr-2 overflow-hidden'
            >
              <img
                className='absolute inset-0 h-full'
                src={URL.createObjectURL(file)}
                alt='thumbnail'
              />
              <button
                onClick={() => handleDelete(index)}
                className='absolute top-0 right-0'
              >
                X
              </button>
            </div>
          ))}
        </div>
        {fileList.length < 4 && (
          <div className='relative flex flex-shrink-0 items-center justify-center w-24 h-24 bg-[#303033] text-white'>
            <input
              multiple
              type='file'
              accept='image/*'
              onChange={handleChange}
            />
            +
          </div>
        )}
      </div>
      <div className='mt-5'>작성된 후기는 런잇 홍보 콘텐츠로 사용될 수 있습니다.</div>
    </>
  );
}
