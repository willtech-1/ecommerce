import Header from "./Header";
import Footer from "./Footer";
import Icons from "./Icons";
import Arrow from "./Arrow";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className="p-5">{children}</div>
      <Footer />
      <Icons />
      {/* <Arrow /> */}
    </div>
  );
}
