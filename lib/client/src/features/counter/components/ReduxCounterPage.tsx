import { useSelector, useDispatch } from "react-redux"

import { RootState } from "@app/state"
import { counterSlice } from "@app/features"

export function ReduxCounterPage() {

    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <>
            <main>
                <h2>State with Redux</h2>
            </main>
            <hr className="my-5" />
            <section className="container">
                <div className="row mb-5">
                    <div>
                        <span>Current Count: </span><em>{count}</em>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2">
                        <button
                            className="btn btn-sm btn-primary"
                            aria-label="Increment value"
                            onClick={() => dispatch(counterSlice.actions.increment())}
                        >
                            Increment
                        </button>
                    </div>
                    <div className="col-2">
                        <button
                            className="btn btn-sm btn-primary"
                            aria-label="Decrement value"
                            onClick={() => dispatch(counterSlice.actions.decrement())}
                        >
                            Decrement
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

