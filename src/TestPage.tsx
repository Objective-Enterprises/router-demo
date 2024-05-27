import { Outlet } from "react-router-dom"

export default function TestPage () {
  return (
    <>
      <h2>Test Page</h2>
      <Outlet />
    </>
  )
}