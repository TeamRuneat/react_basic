import React, {useEffect} from 'react';

export default function Home(){
  useEffect(() => {
    fetch('/hello').then((response) => {
      if (response.ok) {
        response.json().then(console.log).catch(console.error);
      } else {
        alert('msw not ok');
      }
    });
  }, []);
  return <div>Hello World!</div>;
}