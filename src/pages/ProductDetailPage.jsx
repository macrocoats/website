import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Nav from '../components/layout/Nav.jsx';
import Footer from '../components/layout/Footer.jsx';
import ProductTechnicalDetail from '../components/products/UnikoatLt700Detail.jsx';
import { PRODUCTS } from '../data/products.js';

const PRODUCT_IMAGES = {
  'uni-manganese-phos':'/images/products-phosphating-parts.webp','uni-iron-phosphate':'/images/solutions-phosphating.webp','unikoat-lt450':'/images/solutions-phosphating.webp','unikoat-lt700':'/images/hero-premium-surface-treatment-gear.webp','unikoat-lt450-rt':'/images/solutions-phosphating.webp','unikoat-lt2000':'/images/products-phosphating-parts.webp','unipass-al-chrome':'/images/solutions-corrosion.webp','unipass-al-non-chrome':'/images/products-corrosion-protection.webp','unipass-al':'/images/solutions-corrosion.webp','unipass-fe-chrome':'/images/solutions-corrosion.webp','unipass-fe-non-chrome':'/images/products-corrosion-protection.webp','unklean-al':'/images/solutions-custom-formulation.webp','unisolve-h3':'/images/products-surface-prep.webp','unisolve':'/images/products-surface-prep.webp','uniklean-sp':'/images/solutions-custom-formulation.webp','uniklean-3-in-1':'/images/hero-surface-treatment-plant.webp','unikconditioner':'/images/hero-surface-treatment-plant.webp','uniktonner':'/images/hero-surface-treatment-plant.webp','unikguard-rpi':'/images/solutions-corrosion.webp','unikoat-zn-ni':'/images/solutions-phosphating.webp','unikstrip':'/images/products-surface-prep.webp',
};

export default function ProductDetailPage(){
  const {slug}=useParams();
  const product=PRODUCTS.find(item=>item.slug===slug);
  useEffect(()=>{document.title=product?`${product.name} — MacroCoats`:'Product not found — MacroCoats';return()=>{document.title='MacroCoats — Process-Engineered Chemical Solutions'}},[product]);
  if(!product)return <><Nav/><main className="pdp-404"><div className="pdp-404__eyebrow">404 — Not Found</div><h1 className="pdp-404__heading">Product not found</h1><p className="pdp-404__body">This product does not exist or the URL may have changed.</p><Link to="/products" className="pdp-404__link">← Back to Products</Link></main><Footer/></>;
  const related=PRODUCTS.filter(item=>item.family===product.family&&item.id!==product.id).slice(0,3);
  const heroImage=PRODUCT_IMAGES[product.slug]||'/images/products-phosphating-parts.webp';
  return <ProductTechnicalDetail product={product} related={related} heroImage={heroImage}/>;
}
