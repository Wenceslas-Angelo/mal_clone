import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../redux/store';

const useDispatchSelectorType = () => {
  type DispatchFunc = () => AppDispatch;
  const useAppDispatch: DispatchFunc = useDispatch;
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  return { useAppDispatch, useAppSelector };
};

export default useDispatchSelectorType;
