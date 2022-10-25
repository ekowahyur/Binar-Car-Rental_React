// import React, { useState, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import Axios from 'axios';
// import './style.css';
// import Filter from '../filter';

// const FindResult = () => {
//   const [cars, setCars] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [emptyData, setEmptyData] = useState(false);

//   const baseUrl = 'https://bootcamp-rent-cars.herokuapp.com/customer';

//   const carName = useRef('');
//   const category = useRef('');
//   const harga = useRef('');
//   const statusOrder = useRef('');

//   const price = () => {
//     switch (harga.current.value) {
//       case 'small':
//         return { maxPrice: 400000 };
//       case 'medium':
//         return { minPrice: 400000, maxPrice: 600000 };
//       case 'large':
//         return { minPrice: 600000 };
//       default:
//         return '';
//     }
//   };

//   const getData = (e) => {
//     e.preventDefault();

//     const params = {
//       name: carName.current.value,
//       category: category.current.value,
//       minPrice: price().minPrice,
//       maxPrice: price().maxPrice,
//       isRented: statusOrder.current.value,
//     };
//     setLoading(true);
//     setEmptyData(false);
//     setCars([]);

//     Axios.get(`${baseUrl}/car?${queryData(params)}`)
//       .then((response) => {
//         if (response.data.cars.length > 0) {
//           setCars(response.data.cars);
//         } else {
//           setEmptyData(true);
//         }
//         setLoading(false);
//       })
//       .catch((error) => console.log(error));
//   };

//   const filterData = {
//     getData,
//     carName,
//     category,
//     harga,
//     statusOrder,
//   };


//   return (
//     <section className="find-result">
//       <div className="container">
//         <Filter {...filterData} />
//         <div className="car-choice">
//           {loading ? (
//             <Bars
//               height="80"
//               width="80"
//               color="#4fa94d"
//               ariaLabel="bars-loading"
//               wrapperStyle={{}}
//               wrapperClass="bars-loading"
//             />
//           ) : (
//             <div className="container">
//               <div className="car-choice-border">
//                 <div className="row">
//                   {cars.map((car, index) => {
//                     return (
//                       <div className="col-lg-4 col-md-6" key={index}>
//                         <div className="card-border">
//                           <div className="card">
//                             <img src={car.image} className="card-img-top" alt="..." />
//                             <div className="card-body">
//                               <h5 className="card-title">{car.name}</h5>
//                               <h4>Rp 500.000 / hari</h4>
//                               <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
//                                 incididunt ut labore et dolore magna aliqua. </p>
//                               <Link to={`/cari-mobil/${car.id}`} className="btn btn-primary">
//                                 Pilih Mobil
//                               </Link>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     );
//                   })}
//                 </div>
//               </div>
//             </div>
//           )}
//           {emptyData && <>Data Tidak Ditemukan</>}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default FindResult;