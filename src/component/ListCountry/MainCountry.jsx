import React, { useState, useEffect } from "react";
// import queryString from "query-string";
import CountryFilterForm from "./CountryFilterForm";
import PostList from "./PostList";
import Axios from "axios";
import Breadcrumbs from "../Home/Breadcrumbs";
import icon from "../../Image/arrow-black.png";
import { useNavigate } from "react-router-dom";
function MainCountry() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [postList, setPostList] = useState([]);
  const [filter, setFilter] = useState();

  function handleFiltersChange(newFilters) {
    const allCountry = postList.map((i) => i.name.common);
    const filterName = allCountry.filter(
      (i) => i.toLowerCase() == newFilters.searchTerm.replace(/ /g, "") // replace spacing
    );
    console.log(
      allCountry.filter(
        (i) => i.toLowerCase() == newFilters.searchTerm.toLowerCase()
      )
    );
    setFilter(filterName);
  }

  useEffect(() => {
    Axios("https://restcountries.com/v3.1/all") // GET all field country
      .then((res) => res.data)
      .then(
        (result) => {
          setIsLoaded(true);
          setPostList(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  return (
    /* here we map over the element and display each item as a card  */
    <div className="wrapper">
      <Breadcrumbs
        handleClick={() => navigate(-1)}
        icon={icon}
        page="Country list"
      />
      <CountryFilterForm onSubmit={handleFiltersChange} />
      <PostList posts={postList} filter={filter} />
    </div>
  );
}

export default MainCountry;
