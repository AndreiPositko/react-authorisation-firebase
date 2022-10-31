import { useSelector } from 'react-redux';

export const useAuth = () => {
  const { email, tocken, id } = useSelector(state => state.user)

  return {
    isAuth: !!email,
    email,
    tocken,
    id,
  }
}
