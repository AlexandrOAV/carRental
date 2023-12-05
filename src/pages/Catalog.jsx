
import CarList from 'components/CarList/CarList';
import FormSearch from 'components/FormSearch/FormSearch';
import HomeMenu from 'components/HomeMenu/HomeMenu';


const Catalog = ()=> { 
  return (
    <>
      <HomeMenu/>
    <FormSearch/>
      <CarList />
    </>
  )
  }

export default Catalog
