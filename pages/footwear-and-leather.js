/** @format */

import Link from "next/link";
import React from "react";
import Layout from "../layout/layout";
import Sidebar from "../layout/sidebar";
import Title from "../layout/title";
import CategoryCard from "../components/verticals/category";
import { footwear } from "../lib/productCategory.json";
import PhotoGallery from "../components/Gallery/PhotoGallery";
import { Check } from "../public/svg/icon";
import {
  Drawing,
  Learning,
  TowerCrane,
} from "../public/svg/service/IconService";

export default function ServiceSingle1() {
  return (
    <>
      <Title title='Footwear & Leather' />
      <Layout>
        {/* Page Title  */}
        <div className='industify_fn_pagetitle'>
          <div className='container'>
            <div className='title_holder singleVerticalBreadcrumb'>
              <h3>Footwear & Leather</h3>
              <div className='industify_fn_breadcrumbs'>
                <ul>
                  <li>
                    <Link href='/'>
                      <a title='Home'>Home</a>
                    </Link>
                  </li>
                  <li className='separator'>
                    <span></span>
                  </li>
                  <li>
                    <Link href='/verticals'>
                      <a title='verticals'>Verticals</a>
                    </Link>
                  </li>
                  <li className='separator'>
                    <span></span>
                  </li>
                  <li>
                    <span className='bread-current'>Footwear & Leather</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* /Page Title  */}

        {/* Sidebar Page  */}
        <div className='industify_fn_sidebarpage'>
          <div className='container'>
            <div className='s_inner'>
              {/* Main Sidebar: Left  */}
              <div className='industify_fn_leftsidebar'>
                {/* Single Service  */}
                <div className='industify_fn_service_single'>
                  <div className='img_holder'>
                    <img src='img/service/single/1.jpg' alt='' />
                  </div>

                  <div className='desc_holder'>
                    <p>
                      The BMTF Footwear & Leather Factory stands as one of the
                      largest military shoe manufacturing shops in Bangladesh.
                      They introduced their brand 'Signature' in 2007 and have
                      been proudly serving many prestigious customers ever
                      since. The factory is equipped with modern machinery
                      capable of producing millions of pairs of shoes and
                      leather products annually. Their dedicated team employs
                      special artisanal techniques to ensure high-quality shoes
                      at every stage of production.
                    </p>
                    <p>
                      Approximately 1,000 skilled workers operate in shifts to
                      craft up to 4,000 pairs of shoes daily, amounting to
                      around 100,000 pairs per month. These craftsmen
                      meticulously handle the leather, paying close attention to
                      every detail to guarantee top-notch quality. They hold
                      quality in the highest regard and never compromise on it.
                      'Signature' is renowned for its distinctive designs,
                      competitive prices, excellent quality, punctual delivery,
                      and efficient service.
                    </p>
                    <h3>Our Aim</h3>
                    <p>
                      Our aim is to achieve maximum client satisfaction and
                      surpass their expectations with motivated and contented
                      staff, generating sustainable results. Our business
                      objective is to grow as a commercially viable production
                      house and contribute significantly to the socio-economic
                      development of the country.
                    </p>
                  </div>

                  {/* Check List Shortcode  */}
                  <div className='fn_cs_check_list'>
                    <h3>Our Promises Are</h3>
                    <div className='list'>
                      <ul>
                        <li>
                          <div className='item'>
                            <Check className='fn__svg' />
                            <p>High standard of products</p>
                          </div>
                        </li>
                        <li>
                          <div className='item'>
                            <Check className='fn__svg' />
                            <p>High-quality raw materials</p>
                          </div>
                        </li>
                        <li>
                          <div className='item'>
                            <Check className='fn__svg' />
                            <p>Proper quality raw materials</p>
                          </div>
                        </li>
                        <li>
                          <div className='item'>
                            <Check className='fn__svg' />
                            <p>Reasonable prices</p>
                          </div>
                        </li>
                        <li>
                          <div className='item'>
                            <Check className='fn__svg' />
                            <p>Timely delivery</p>
                          </div>
                        </li>
                        <li>
                          <div className='item'>
                            <Check className='fn__svg' />
                            <p>Standard compliance</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Check List Shortcode  */}

                  {/* Category card start */}
                  <div className=''>
                    <h3 className='categorySectionTitle'>Product Categories</h3>
                    <div className='clientDiv'>
                      {footwear.map((client) => (
                        <CategoryCard key={client.id} data={client} />
                      ))}
                    </div>
                  </div>
                  {/* Category card End */}
                  {/* Call to Action Shortcode (with corner)  */}
                  <div className='fn_cs_call_to_action corner'>
                    <div className='container'>
                      <div className='cta_holder'>
                        <div className='title_holder'>
                          <h3>Industify LLC</h3>
                          <p>
                            We build your dream house. Contact us for detailed
                            information.
                          </p>
                        </div>
                        <div className='link_holder'>
                          <Link href='/contact'>
                            <a>Our Responsibility</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Call to Action Shortcode (with corner)  */}

                  {/* Get Random Services  */}
                  {/* You can change data-index value to exclude 1st service single from the service list. You can also change data-count value to set including services count.  */}
                  <div
                    data-html='includes/random-service.html'
                    data-index='1'
                    data-count='2'
                  ></div>
                  {/* /Get Random Services  */}

                  {/* Manufacturing Process Start  */}

                  <div className='fn_cs_services_classic manufacture_process'>
                    <div className=''>
                      <div className='list'>
                        <h3>Our Manufacturing Process</h3>
                        <ul>
                          <li>
                            <div className='item'>
                              <span className='bg1'></span>
                              <span className='bg2'></span>
                              <span className='icon'>
                                <Learning className='fn__svg' />
                              </span>
                              <h3>Rubber Outsole Pressing</h3>
                              <p>
                                Our shoe molds consist of two parts — the insole
                                and outsole. First, the outsole is prepped with
                                color for a logo as well as a background color.
                                The middle plate is closed with the colors
                                added, and then raw rubber is placed into the
                                mold.
                              </p>
                            </div>
                          </li>
                          <li>
                            <div className='item'>
                              <span className='bg1'></span>
                              <span className='bg2'></span>
                              <span className='icon'>
                                <Drawing className='fn__svg' />
                              </span>
                              <h3>Rubber Insole Pressing</h3>
                              <p>
                                During the insole pressing process, we add raw
                                rubber to shape the forefront and place the mold
                                back into the heat to form the insole.
                              </p>
                            </div>
                          </li>
                          <li>
                            <div className='item'>
                              <span className='bg1'></span>
                              <span className='bg2'></span>
                              <span className='icon'>
                                <TowerCrane className='fn__svg' />
                              </span>
                              <h3>Fusing</h3>
                              <p>
                                The insole and outsole are later efficiently
                                fused to form a finished rubber sole,
                                prioritizing comfort for the feet.
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Manufacturing Process End  */}

                  {/* Gallery Section Start */}

                  <div
                    className='fn_cs_gallery_grid fn_cs_lightgallery imageGalleryDiv singleVerticalGallery'
                    data-cols='4'
                  >
                    <div className='inner'>
                      <PhotoGallery />
                    </div>
                  </div>

                  {/* Gallery Section End */}
                </div>
                {/* /Single Service  */}
              </div>
              {/* /Main Sidebar: Left  */}

              {/* Main Sidebar: Right  */}
              <div className='industify_fn_rightsidebar'>
                {/* Service List  */}
                <div className='service_list_as_function'>
                  <div className='title'>
                    <h3>Full list of Services</h3>
                  </div>
                  <div className='list_holder'>
                    <ul>
                      <li>
                        <Link href='/service-single-9'>
                          <a>Aerospace and Defense</a>
                        </Link>
                      </li>
                      <li>
                        <Link href='/service-single-8'>
                          <a>Automative Manufacturing</a>
                        </Link>
                      </li>
                      <li>
                        <Link href='/service-single-7'>
                          <a>Chemical Industry</a>
                        </Link>
                      </li>
                      <li>
                        <Link href='/service-single-6'>
                          <a>Oil and Gas Industry</a>
                        </Link>
                      </li>
                      <li>
                        <Link href='/service-single-5'>
                          <a>Energy &amp; Commodities</a>
                        </Link>
                      </li>
                      <li>
                        <Link href='/service-single-4'>
                          <a>Medical Devices</a>
                        </Link>
                      </li>
                      <li>
                        <Link href='/service-single-3'>
                          <a>Housewares &amp; Home Decor</a>
                        </Link>
                      </li>
                      <li>
                        <Link href='/service-single-2'>
                          <a>Textiles &amp; Apparel</a>
                        </Link>
                      </li>
                      <li className='active'>
                        <Link href='/service-single-1'>
                          <a>Construction &amp; Engineering</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* /Service List  */}

                {/* Get Sidebar  */}
                <Sidebar />
                {/* /Get Sidebar  */}
              </div>
              {/* Main Sidebar: Right  */}
            </div>
          </div>
        </div>
        {/* /Sidebar Page  */}
      </Layout>
    </>
  );
}
