import React, { useState, useEffect } from "react";
import Details from "./Details";
import ListItem from "./ListItem";
import Spinner from "./Spinner";

export default function List() {
  const [listUser, setListUser] = useState([]);
  const [info, setInfo] = useState([]);
  const [datailsItem, setDatailsItem] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function fetchRequest(url, setFunction, flag) {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setFunction((prev) => data);
        setIsLoading(false);
      }
    };
    fetchData();
  }

  useEffect(() => {
    fetchRequest(
      "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json",
      setListUser
    );
  }, []);

  useEffect(() => {
    if (info?.id && info.id !== datailsItem.id) {
      fetchRequest(
        `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${info.id}.json`,
        setDatailsItem,
        setIsLoading
      );
    }
  }, [info]);

  const handleInfo = (data) => {
    setInfo((prev) => data);
  };

  return (
    <>
      <div className="wrapper">
        <ul className="list">
          {listUser?.map((item) => {
            return (
              <ListItem
                key={item.id}
                {...item}
                handleInfo={handleInfo}
              ></ListItem>
            );
          })}
        </ul>
        {isLoading ? (
          <Spinner />
        ) : datailsItem.length !== 0 ? (
          <Details {...datailsItem} />
        ) : null}
      </div>
    </>
  );
}

// Назовём первый компонент(который слева) - List, а второй(который справа) - Details.

// Реализуйте следующую логику:

//     При загрузке приложения один раз делается запрос по адресу: https: //raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json и отрисовывается список в компоненте List
//     При клике на конкретный элемент списка в компонент Details передаются один props: info(объект с полями id и name) и начинается загрузка данных по адресу: https: //raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/{id}.json, где {id} - это id пользователя из props.
//     На время загрузки можете отображать индикатор загрузки(протестируйте с помощью выставления ограничения пропускной способности сети в Dev Tools)
// Важные момент:

//     Вся загрузка должна происходить через хук useEffect.Подумайте, как организовать единоразовую загрузку и загрузку при каждом изменении props.info.id
// Обратите внимание, загрузка деталей должна происходить только при изменении props.info.id, а не при каждом рендере.Т.е.если на одного и того же пользователя кликнуть дважды, то загрузка произойдёт только в первый раз.
