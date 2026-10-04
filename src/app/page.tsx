import { AgeGate } from "@/components/AgeGate";
import { CartDrawer } from "@/components/CartDrawer";
import { Categories } from "@/components/Categories";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Newsletter } from "@/components/Newsletter";
import { ProductModal } from "@/components/ProductModal";
import { Footer, Promo, Values } from "@/components/Sections";
import { Shop } from "@/components/Shop";
import { Toast } from "@/components/Toast";
import { StoreProvider } from "@/context/StoreContext";

export default function Home() {
  return (
    <StoreProvider>
      <Header />
      <main>
        <Hero />
        <Categories />
        <Shop />
        <Promo />
        <Values />
        <Newsletter />
      </main>
      <Footer />
      <CartDrawer />
      <ProductModal />
      <Toast />
      <AgeGate />
    </StoreProvider>
  );
}
