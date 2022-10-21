import React from 'react';
import './style.css';

const SubCarDetail = () => {
  return (
    <section className="car-detail">
      <div className="container">
        <div className="car-detail-border">
          <div className="row">
            <div className="col-lg-7 col-md-12">
              <div className="package-desc">
                <div className="card">
                  <h3>Tentang Paket</h3>
                  <h3>Include</h3>
                  <ul>
                    <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                    <li>Sudah termasuk bensin selama 12 jam</li>
                    <li>Sudah termasuk Tiket Wisata</li>
                    <li>Sudah termasuk pajak</li>
                  </ul>
                  <h3>Exclude</h3>
                  <ul>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                  </ul>
                  <h3>Refund, Reschedule, Overtime</h3>
                  <ul>
                    <li>Tidak termasuk biaya makan sopir Rp 75.0000/hari</li>
                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                    <li>Tidak termasuk biaya makan sopir Rp 75.0000/hari</li>
                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                    <li>Tidak termasuk biaya makan sopir Rp 75.0000/hari</li>
                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-12">
              <div className="card-border">
                <div className="card">
                  <img src="./images/car.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Innova</h5>
                      <ul>
                        <img src="./images/user-icon.svg" alt="" />
                          <li>6 - 8 orang</li>
                      </ul>
                      <div className="nominal">
                        <h4>Total</h4>
                        <h4>Rp 500.000</h4>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SubCarDetail