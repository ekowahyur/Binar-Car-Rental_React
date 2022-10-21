import React from 'react'
import './style.css'

const FindForm = () => {
  return (
    <section className="find-car">
      <div className="container">
        <div className="find-car-border">
          <div className="row">
            <div className="find-car-form">
              <div className="form">
                <div className="col-lg-3">
                  <div className="form-border">
                    <div className="mb-3">
                      <label className="form-label">Nama Mobil</label>
                      <input type="text" className="form-control" placeholder="Ketik nama/tipe mobil" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="form-border">
                    <label className="form-label">Kategori</label>
                    <select className="form-select">
                      <option selected>Masukan Kapasitas Mobil</option>
                      <option value="1">2 - 4 orang</option>
                      <option value="2">4 - 6 orang</option>
                      <option value="3">6 - 8 orang</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="form-border">
                    <label className="form-label">Harga</label>
                    <select className="form-select">
                      <option selected>Masukan Harga Sewa per Hari</option>
                      <option value="1"> {'< Rp. 400.000'} </option>
                      <option value="2"> Rp. 400.000 - Rp. 600.000 </option>
                      <option value="3"> {'> Rp. 600.000'} </option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="form-border">
                    <label className="form-label">Status</label>
                    <select className="form-select">
                      <option selected>Disewa</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="submit">
                <div className="button">
                  <a href="/find-car/:productId" className="btn btn-success">Cari Mobil</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FindForm