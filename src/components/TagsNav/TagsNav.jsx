/* eslint-disable react/prop-types */

import { useState } from 'react';
import "./tagsNav.scss";

const TagsNav = () => {
  const [selectedCategoria, setSelectedCategoria] = useState("Todos");

  const Tag = ({ categoria }) => {
    return (
      <li>
        <input
          type="radio"
          checked={categoria === selectedCategoria}
          onChange={() => setSelectedCategoria(categoria)}
          name="rd_tags"
          id={"i_tag_" + categoria}
        />
        <label className="text" htmlFor={"i_tag_" + categoria}>
          {categoria}
        </label>
      </li>
    );
  };

  return (
    <ul className="tags" id="tags">
      <Tag categoria="Todos" />
      <Tag categoria="landingPage" />
      <Tag categoria="Wordpress" />
      <Tag categoria="ReactJs" />
      <Tag categoria="Outros" />
    </ul>
  );
};

export default TagsNav;
