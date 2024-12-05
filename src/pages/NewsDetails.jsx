import { useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import RightNav from "../components/layout-component/RightNav";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const NewsDetails = () => {
  const data = useLoaderData();
  //   console.log(data.data[0]);
  const news = data.data[0];
  return (
    <div className="w-11/12 mx-auto">
      <header>
        <Header></Header>
      </header>
      <section className="grid grid-cols-12 ">
        <div className="col-span-9">
          <h1 className="font-bold">Dragon News</h1>
          <div className="card bg-base-100 shadow-xl ">
            <figure className="px-10 pt-10">
              <img src={news.image_url} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body space-y-4  ">
              <h2 className="card-title">{news.title}</h2>
              <p>{news.details}</p>
              <div className="card-actions">
                <Link to="/" className="btn btn-primary">
                  <FaArrowLeft />
                  All news in this category
                </Link>
              </div>
            </div>
          </div>
        </div>
        <aside className="col-span-3">
          <RightNav></RightNav>
        </aside>
      </section>
    </div>
  );
};

export default NewsDetails;
