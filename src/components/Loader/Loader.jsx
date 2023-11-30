import { Blocks } from 'react-loader-spinner';

export const Loader = () => {
    return (
    <Blocks
  visible={true}
  height="200"
  width="200"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
/>
)
}