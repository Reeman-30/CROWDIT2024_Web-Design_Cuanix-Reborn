import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Footer() {
  return (
    <div className="d-flex flex-column">
      <div className="flex-grow-1"></div>
      <footer className="bg-primary-subtle bg-gradient text-dark py-3 mt-auto">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-4">
              <h5>E-learning</h5>
              <address>
                Jl. Rangga Gading No.01, Gudang, Kecamatan Bogor Tengah, Kota
                Bogor, Jawa Barat 16123
              </address>
            </div>
            <div className="col-md-4 mb-4">
              <h5>Menu</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-dark">
                    Beranda
                  </a>
                </li>
                <li>
                  <a href="#" className="text-dark">
                    Tentang Kami
                  </a>
                </li>
                <li>
                  <a href="#" className="text-dark">
                    Kontak
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4 mb-4">
              <h5>Follow Us</h5>
              <ul className="list-unstyled">
                <li className="mx-2">
                  <a href="#" className="text-dark">
                    Facebook
                  </a>
                </li>
                <li className="mx-2">
                  <a href="#" className="text-dark">
                    Twitter
                  </a>
                </li>
                <li className="mx-2">
                  <a href="#" className="text-dark">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-center py-3">
              <small>© Copyright E-learning 2024 All rights Reserved</small>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
