import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { decrement, increment, selectValue } from './counterSlice'

export default function Counter() {
  const value = useAppSelector(selectValue)
  const dispatch = useAppDispatch()

  return (
    <div className="counter">
      <button onClick={() => dispatch(decrement())} aria-label="Decrement">
        -
      </button>
      <output>{value}</output>
      <button onClick={() => dispatch(increment())} aria-label="Increment">
        +
      </button>
    </div>
  )
}
