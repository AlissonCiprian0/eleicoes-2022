export const HomeHeader = () => {
  return (
    <div className='HomeHeader flex'>
      <div className='HomeHeader-title'>
        <h1 className='flex fs-500 fw-400'>
          Eleições presidenciais{' '}
          <span className='fs-800 fw-800'>BRASIL 2022</span>
        </h1>
      </div>

      <button className='flex fc-neutral-100'>
        Reload
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='22'
          height='22'
          viewBox='0 0 22 22'
          fill='none'
        >
          <path
            d='M5.26569 1.647C10.1336 -1.1635 16.3302 0.389254 19.3373 5.06976L21.957 3.55726L20.9394 11.7947L13.2968 8.55726L15.8732 7.06976C13.9751 4.29621 10.2232 3.40361 7.26569 5.11111C4.16185 6.90311 3.09452 10.8864 4.88652 13.9903C6.67852 17.0941 10.6619 18.1614 13.7657 16.3694C15.3791 15.4379 16.4367 13.9117 16.8338 12.2275L20.5436 13.7991C19.7951 16.2566 18.1611 18.4505 15.7657 19.8335C10.7514 22.7285 4.31742 21.0046 1.42242 15.9903C-1.47258 10.976 0.251402 4.542 5.26569 1.647Z'
            fill='#74121D'
          />
        </svg>
      </button>
    </div>
  );
};
