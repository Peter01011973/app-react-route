import React from 'react';

const Home = (props: any) => {
   console.log(props);
   
   return (
      <>
         <p>Home page</p>
         <pre>{JSON.stringify(props, null, 2)}</pre>
      </>
   )
}

export default Home;