import { useNavigate } from "react-router-dom";
import { ButtonTag } from "../material/ButtonTag";
import { ContainerTage } from "../material/ContainerTage";

const ErrorPage = () => {
  const navigate = useNavigate();
  const PageHandle = () => navigate("/");
  return (
    <>
      <section className="pt-16 pb-10">
        <ContainerTage>
          <div className="max-w-xs mx-auto text-center space-y-4">
            <h3 className="text-3xl font-bold text-secondary">Page Not Found </h3>
            <h2 className="text-6xl font-extrabold text-red-600">404</h2>
            <ButtonTag onclick={PageHandle}>Back To Home</ButtonTag>
          </div>
        </ContainerTage>
      </section>
    </>
  );
};

export default ErrorPage;
