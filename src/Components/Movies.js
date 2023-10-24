import React from "react";

function Movies() {
  useEffect(() => {
    async function fetcData() {
      try {
        const request = await axios.get(fetchUrl);
        setMovies(request?.data?.data);
        console.log(request);
        return request;
      } catch (error) {
        console.log(error);
      }
    }
    fetcData();
  }, [fetchUrl]);
  return <div></div>;
}

export default Movies;
