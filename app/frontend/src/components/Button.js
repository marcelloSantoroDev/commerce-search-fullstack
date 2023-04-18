import React, { useContext } from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AppContext from '../context/AppContext';
import meliApi from '../utils/meliApi';
// import dbApi from '../utils/dbApi';
import buscapeApi from '../utils/buscapeApi';
// import saveOnDb from '../utils/saveOnDb';

function ButtonComp(props) {
  const { type } = props;
  const { category, api, setApiData, searched, setSearched } = useContext(AppContext);

  // const handleSavedArr = () => {
  //   const isCatSaved = saved.category.some((e) => e === category);
  //   const isSiteSaved = saved.website.some((e) => e === api);
  //   if (isCatSaved && isSiteSaved) {
  //     return true
  //   } else {
  //     setSaved({
  //       ...saved,
  //       category: [...saved.category, category],
  //       website: [...saved.website, api]
  //     })
  //     return false
  //   }
  // }

  const handleMeliClick = async () => {
    // const isSaved = handleSavedArr();
    if (searched.length === 0) {
      // if (isSaved) {
        // const data = await dbApi({category, api});
        // setApiData(data);
      // } else {
        const data = await meliApi(category);
        setApiData(data);
        // saveOnDb(data, 'meli', category);
      // }
    } else {
      // if (isSaved) {
      //   const data = await dbApi({ category, api });
      //   setSearched('');
      //   setApiData(data);
      // } else {
        const data = await meliApi(searched);
        setSearched('');
        setApiData(data);
        // await saveOnDb(data, 'meli', category);
      // }
    }
  }

  const handleBuscapeClick = async () => {
    // const isSaved = handleSavedArr();
    if (searched.length === 0) {
      // if (isSaved) {
      //   const data = await dbApi({ category, api });
      //   setApiData(data);
      // } else {
        const data = await buscapeApi(category);
        setApiData(data);
        // await saveOnDb(data, 'buscape', category)
      // }
    } else {
      // if (isSaved) {
      //   const data = await dbApi({ category, api });
      //   setSearched('');
      //   setApiData(data);
      // } else {
        const data = await buscapeApi(searched);
        setSearched('');
        setApiData(data);
        // saveOnDb(data, 'buscape', category);
      // }
    }
  }

  return (
    <Stack spacing={2} direction="row" alignSelf={'center'} minHeight={55.4}>
      <Button variant="contained" onClick={api === 'Buscape' ? handleBuscapeClick : handleMeliClick}>{type}</Button>
    </Stack>
  )
}

export default ButtonComp