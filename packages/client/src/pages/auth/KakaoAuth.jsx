import React from 'react';

export default function KakaoAuth(){
  const code = new URL(window.location.href).searchParams.get('code');

  return(
    <div>
      {code}
    </div>
  );
}
