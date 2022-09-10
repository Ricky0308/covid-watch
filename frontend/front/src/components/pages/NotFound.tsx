import { Navigate } from "react-router"

export const NotFound = () => {

    return (
        <>
            <Navigate to="/home"></Navigate>
        </>
    )
}