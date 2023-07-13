import Divider from "../shared/divider";
import SocialSection from "./social-section";

const PageFooter = () => {
  return (
    <footer>
      <Divider />
      <SocialSection />
      <div className="py-6 border-t border-bdr">
        <p className="text-center">2023 - Nyoman Agus Budhiarta Waisnawa</p>
      </div>
    </footer>
  );
};
export default PageFooter;
