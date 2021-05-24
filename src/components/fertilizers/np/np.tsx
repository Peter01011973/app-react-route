import React from 'react';
import { useParams } from 'react-router-dom';

const Np = () => {
   const {fert} = useParams<any>();
   return (
      <>
         <p>Here {fert}</p>
      </>
   )
}

export default Np