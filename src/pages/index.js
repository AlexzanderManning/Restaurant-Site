import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import HeroSection from '../components/hero/hero.component';
import HoursSection from '../components/hours-section/hours-section.component';

import SEO from "../components/seo";
import styles from './index/index-styles.module.scss';
import Gallery from "../components/gallery/gallery.component";
import Menu from "../components/menu/menu.component";
import OrderSection from "../components/order-section/order-section.component";
import DecorativeDiv from "../components/decoorative-div/decorative-div.component";
import FooterComponent from "../components/footer/footer.component";
// import Gallery from "../components/gallery/simple-slider.component";



const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSection />
    <HoursSection />
    <Gallery />
    <Menu />
    <OrderSection />
    <DecorativeDiv />
    <FooterComponent />
  </Layout>
)

export default IndexPage
