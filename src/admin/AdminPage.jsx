import React, {useCallback, useRef, useEffect, useState} from 'react';

export default function AdminPage() {
  const domainRef = useRef(null);
  const companyNameRef = useRef(null);
  const [domainList, setDomainList] = useState([]);

  const refreshDomains = useCallback(() => {
    fetch('/admin/domains').then((response) => {
      if (response.ok) {
        response.json().then(setDomainList);
      } else {
        response.text().then(alert);
      }
    });
  }, []);

  const addDomain = () => {
    const domain = domainRef.current?.value;
    const companyName = companyNameRef.current?.value;

    if (domain && companyName) {
      fetch('/admin/domains', {
        method: 'POST',
        body: JSON.stringify({domain, companyName})
      }).then(refreshDomains);
    }
  };
  
  useEffect(() => {
    refreshDomains();
  }, []);

  return (
    <div>
      <h1>Admin Page</h1>
      {
        domainList && (
          <div>
            {domainList.map(({domain, companyName}, index) => <div key={index}>{`도메인: ${domain} | 이메일: ${companyName}`}</div>)}
          </div>
        )
      }
      <div>
        <div>
          <label htmlFor={'domain-input'}>도메인</label>
          <input ref={domainRef} id={'domain-input'} type={'text'} />
        </div>
        <div>
          <label htmlFor={'company-input'}>회사명</label>
          <input ref={companyNameRef} id={'company-input'} type={'text'} />
        </div>
      </div>
      <button onClick={addDomain}>등록</button>
    </div>
  );
}
