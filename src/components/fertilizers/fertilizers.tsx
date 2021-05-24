import React, { Component } from 'react';
import { NavLink, Route, RouteComponentProps, Switch, useParams, useRouteMatch } from 'react-router-dom';
import Np from './np/np';

interface PropsType extends RouteComponentProps<any> {
   /* other props for ChildComponent */
}

interface ParamsType {
   types: 'organic'|'granulated'|'liquid';
}

// interface FertilizersTypes {
//    path: string,
//    component: React.ReactNode
// }

interface FertilizersTypes {
   path: string,
   title: string
}

interface FertStructure {
   'liquid': Array<FertilizersTypes>,
   'granulated': Array<FertilizersTypes>,
   'organic': Array<FertilizersTypes> 
}

const Fertilizers = (props: PropsType) => {
   const {history, location, match} = props;
   console.log(history, location, match);
   const {types} = useParams<ParamsType>();
   const {url} = useRouteMatch();
   const fertStructure: FertStructure = {
      'liquid': [
         {path: '/np822', title: 'LCF NP 8:22'},
         {path: '/np1030', title: 'LCF NP 10:30'},
         {path: '/np918', title: 'LCF NP 9:18'}
      ],
      'granulated': [
         {path: '/np1032', title: 'NP 10:32'},
         {path: '/np2020', title: 'NP 20:20'},
         {path: '/np1046', title: 'NP 10:46'},
         {path: '/np1252', title: 'NP 12:52'},
         {path: '/npk161616', title: 'NPK 16:16:16'}       
      ],
      'organic': [
         {path: '/npk555', title: 'Organic NPK 5:5:5'},
         {path: '/npk161616', title: 'Organic NPK 16:16:16'}     
      ]
   }
   return (
      <>
         <p style={{textAlign:'center'}}>Hi {match.params.types}</p>
         <p>{types}</p>
         <ul>
            {
               fertStructure[types].map(({path, title}, index: number) => {
                  return(
                     <li key={index}>
                        <NavLink 
                           activeStyle={{color: 'red'}} 
                           to={`${url}${path}`}
                           style={{textDecoration: 'none'}}
                        >
                           {title}
                        </NavLink>
                     </li>
                  )
               })
            }
         </ul>
         <Route path={`${url}/:fert`}><Np/></Route>
      </>
   )
}

export default Fertilizers;