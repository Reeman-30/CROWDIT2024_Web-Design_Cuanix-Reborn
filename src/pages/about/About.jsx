import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { guides } from "../../data/Dummy";
import GuideCard from "./widgets/GuideCard";
import Layout from "../../components/Layout";

export default function About() {
  return (
    <Layout>
      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-6 ">
            <img
              src="https://t3.ftcdn.net/jpg/05/85/86/44/360_F_585864419_kgIYUcDQ0yiLOCo1aRjeu7kRxndcoitz.jpg"
              alt="test"
              className="rounded mg-fluid"
              style={{ maxWidth: "100%" }}
            />
          </div>
          <div className="col-md-6">
            <h4 className="text-primary" style={{ fontWeigh: "bold" }}>
              ABOUT US
            </h4>
            <h1 style={{ fontSize: "34px" }}> WELCOME TO CUANIX LEARNING</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              et doloremque doloribus minima distinctio dicta sunt totam, nemo
              laudantium nam, aperiam commodi tempora ducimus neque optio
              expedita ipsa impedit ab?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              et doloremque doloribus minima distinctio dicta sunt totam, nemo
              laudantium nam, aperiam commodi tempora ducimus neque optio
              expedita ipsa impedit ab?
            </p>
            <div className="row">
              <div className="col-md-6">
                <ul className="list-unstyled" style={{ paddingLeft: 0 }}>
                  <li>➔ Skilled Instructors</li>
                  <li>➔ International Certificate</li>
                  <li>➔ Online Classes</li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul className="list-unstyled" style={{ paddingLeft: 0 }}>
                  <li>➔ Skilled Instructors</li>
                  <li>➔ International Certificate</li>
                  <li>➔ Online Classes</li>
                </ul>
              </div>
            </div>
            <a href="#" className="btn btn-primary mt-3">
              Read More
            </a>
          </div>
        </div>
        <div className="text-center my-5">
          <h4 className="text-primary" style={{ fontWeight: "bold" }}>
            MENTORS
          </h4>
          <h1>Expert Mentor</h1>
        </div>
        <div className="row">
          {guides.map((guide, index) => (
            <GuideCard key={index} {...guide} />
          ))}
        </div>
        <FrequentlyAskedQuestion />
      </div>
    </Layout>
  );
}

const FrequentlyAskedQuestion = () => {
  return (
    <div className="container-fluid faq-section py-5 px-2">
      <div className="container pb-5">
        <div class="row g-5 align-items-center">
          <div class="col-xl-6 wow fadeInLeft" data-wow-delay="0.2s">
            <div class="h-100">
              <div class="mb-5">
                <h4 class="text-primary">Beberapa FAQ Penting</h4>
                <h1 class="display-4 mb-0 fs-2">
                  Pertanyaan Umum yang Sering Diajukan
                </h1>
              </div>
              <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button
                      class="accordion-button border-0"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Q: Pertanyaan Pertama
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    class="accordion-collapse collapse show active"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body rounded">
                      A: Lorem, ipsum dolor sit amet consectetur adipisicing
                      elit. Quas earum corporis, repellendus ut recusandae neque
                      obcaecati voluptatum reiciendis quam rem ratione quasi,
                      saepe reprehenderit perspiciatis illo sed tempore?
                      Explicabo, amet.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTwo">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Q: Pertanyaan Kedua
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      A: Lorem, ipsum dolor sit amet consectetur adipisicing
                      elit. Odit harum ratione unde maiores, iusto dolorum
                      doloribus numquam modi culpa repellat deserunt sunt maxime
                      autem saepe eligendi hic amet tempore non?
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingThree">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Q: Pertanyaan Ketiga
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      A: Lorem, ipsum dolor sit amet consectetur adipisicing
                      elit. Odit harum ratione unde maiores, iusto dolorum
                      doloribus numquam modi culpa repellat deserunt sunt maxime
                      autem saepe eligendi hic amet tempore non?
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-6 wow fadeInRight" data-wow-delay="0.4s">
            <img
              className="rounded"
              src="https://t3.ftcdn.net/jpg/05/85/86/44/360_F_585864419_kgIYUcDQ0yiLOCo1aRjeu7kRxndcoitz.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
