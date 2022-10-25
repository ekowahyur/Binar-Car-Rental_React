import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Filter = (filterData) => {

  return (
    <section className="filter">
      <div className="container">
        <div className="filter-border">
          <div className="row">
            <div className="filter-form" onSubmit={filterData.getData}>
              <div className="form">
                <div className="col-lg-3">
                  <div className="form-border">
                    <div className="mb-3">
                      <label className="form-label">Nama Mobil</label>
                      <input type="text" className="form-control" placeholder="Ketik nama/tipe mobil" ref={filterData.carName} />
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="form-border">
                    <label className="form-label">Kategori</label>
                    <select className="form-select" defaultValue={{'Masukan Kapasitas Mobil' : ''}} ref={filterData.category}>
                      <option value="small">2 - 4 orang</option>
                      <option value="medium">4 - 6 orang</option>
                      <option value="large">6 - 8 orang</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="form-border">
                    <label className="form-label">Harga</label>
                    <select className="form-select" defaultValue={{'Masukan Harga Sewa per Hari' : ''}} ref={filterData.harga}>
                      <option value="small"> {'< Rp. 400.000'} </option>
                      <option value="medium"> Rp. 400.000 - Rp. 600.000 </option>
                      <option value="large"> {'> Rp. 600.000'} </option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="form-border">
                    <label className="form-label">Status</label>
                    <select className="form-select" defaultValue={{'Disewa' : ''}} ref={filterData.statusOrder}>
                      <option value="true">Tersedia</option>
                      <option value="false">Disewa</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="submit">
                <div className="button">
                  <Link className="btn btn-primary" type="submit">Cari Mobil</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Filter;