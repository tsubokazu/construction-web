import MainLayout from '@/components/layout/MainLayout';
import HeroSection from '@/components/sections/home/HeroSection';
import CompanyIntroSection from '@/components/sections/home/CompanyIntroSection';
import ProductsSection from '@/components/sections/home/ProductsSection';
import TechnologySection from '@/components/sections/home/TechnologySection';
import NewsSection from '@/components/sections/home/NewsSection';
import ContactSection from '@/components/sections/home/ContactSection';

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <CompanyIntroSection />
      <ProductsSection />
      <TechnologySection />
      <NewsSection />
      <ContactSection />
    </MainLayout>
  );
}
