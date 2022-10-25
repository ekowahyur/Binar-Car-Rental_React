import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { Bars } from 'react-loader-spinner';
import './style.css';
// import Filter from '../filter';

const FindResult = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  // const [inputSample, setInputSample] = useState('');

  const baseUrl = 'http://localhost:4000';

  const getCars = () => {
    Axios.get(`${baseUrl}/cars`)
      .then((response) => {
        setCars(response.data)
        setLoading(false)
      })
      .catch((error) => console.log(error));
  }

  const fetch = useRef(true);

  useEffect(() => {
    if (fetch.current) {
      getCars()
      fetch.current = false
    }
  }, [])

  const getData = (e) => {
    e.preventDefault()

    Axios.get(`${baseUrl}/cars`,)
      .then((response) => {
        setCars(response.data)
        setLoading(false)
      })
      .catch((error) => console.log(error));
  }

  const carName = useRef();
  const category = useRef();
  const priceRange = useRef();
  const statusOrder = useRef();

  
  const [selected, setSelected] = useState('');

  const handleChange = event => {
    console.log(event.target.selectedOptions[0].label);
    console.log(event.target.value);

    setSelected(event.target.value);
  };

  return (
    <div className='findResult'>
      <div className='container'>
        <div className="car-choice">
          {/* <Filter /> */}

          {/* <div className="mb-3">
            <label className="form-label">Nama Mobil</label>
            <input
              type="text"
              className="form-control"
              value={inputSample}
              onChange={(e) => setInputSample(e.target.value)}
              placeholder="Ketik nama/tipe mobil" />
          </div>
          <div className="submit">
            <div className="button">
              <button
                className="btn btn-primary"
                type="submit"
                onClick={submitData}
              >
                Cari Mobil
              </button>
            </div>
          </div> */}

          <section className="filter">
            <div className="container">
              <div className="filter-border">
                <div className="row">
                  <div className="filter-form" onSubmit={getData}>
                    <div className="form">
                      <div className="col-lg-3">
                        <div className="form-border">
                          <div className="mb-3">
                            <label className="form-label">Nama Mobil</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Ketik nama/tipe mobil"
                              ref={carName} />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="form-border">
                          <label className="form-label">Kategori</label>
                          <select
                            className="form-select"
                            value={selected}
                            onChange={handleChange}
                            ref={category}>
                            <option
                              disabled={true}
                              hidden={true}
                              value="">
                              Masukan Kapasitas Mobil
                            </option>
                            <option value="small">2 - 4 orang</option>
                            <option value="medium">4 - 6 orang</option>
                            <option value="large">6 - 8 orang</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="form-border">
                          <label className="form-label">Harga</label>
                          <select
                            className="form-select"
                            value={selected}
                            onChange={handleChange}
                            ref={priceRange}>
                            <option
                              disabled={true}
                              hidden={true}
                              value="">
                              Masukan Harga Sewa per Hari
                            </option>
                            <option value="small"> {'< Rp. 400.000'} </option>
                            <option value="medium"> Rp. 400.000 - Rp. 600.000 </option>
                            <option value="large"> {'> Rp. 600.000'} </option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="form-border">
                          <label className="form-label">Status</label>
                          <select
                            className="form-select"
                            value={selected}
                            onChange={handleChange}
                            ref={statusOrder}>
                            <option
                              disabled={true}
                              hidden={true}
                              value="">
                              Disewa
                            </option>
                            <option value="true">Tersedia</option>
                            <option value="false">Disewa</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="submit">
                      <div className="button">
                        <button
                          className="btn btn-primary"
                          type="submit">
                          Cari Mobil
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* {loading ? (
            <Bars
              className="bars-loading"
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="bars-loading"
              wrapperStyle={{}}
              wrapperClass="bars-loading"
            />
          ) : (
            <div className="container">
              <div className="car-choice-border">
                <div className="row">
                  {cars.map((car, index) => {
                    return (
                      <div className="col-lg-4 col-md-6" key={index}>
                        <div className="card-border">
                          <div className="card">
                            <img src={car.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                              <h5 className="card-title">{car.name}</h5>
                              <h4 className='price'>Rp {car.price} / hari</h4>
                              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. </p>
                              <Link className="btn btn-primary" to={`/find-car/${car.id}`} >
                                Pilih Mobil
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )} */}
        </div>
      </div>
    </div>
  )
}

export default FindResult;